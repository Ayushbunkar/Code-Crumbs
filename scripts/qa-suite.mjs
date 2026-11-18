// scripts/qa-suite.mjs
import fs from 'node:fs';
import path from 'node:path';

const BASE_URL = 'http://127.0.0.1:3000';

const results = {
  routesTested: 0,
  routesPassed: 0,
  apiTestsPassed: 0,
  apiTestsFailed: 0,
  documentsTested: 0,
  documentsPassed: 0,
  brokenLinks: [],
  failures: []
};

function pass(name, detail = '') {
  console.log(`  [PASS] ${name} ${detail ? '- ' + detail : ''}`);
}

function fail(name, error) {
  console.error(`  [FAIL] ${name}: ${error}`);
  results.failures.push({ name, error });
}

// 1. ROUTE AUDIT
const routesToTest = [
  { path: '/', expectedText: 'We build what moves your business' },
  { path: '/about', expectedText: 'We combine engineering, product thinking and AI capabilities' },
  { path: '/services', expectedText: 'Disciplines engineered for' },
  { path: '/work', expectedText: 'Rigorous systems built for' },
  { path: '/work/evaluna-erp', expectedText: 'Evaluna ERP' },
  { path: '/work/summrix-ai', expectedText: 'Summrix AI' },
  { path: '/work/multi-agent-research-system', expectedText: 'Multi-Agent Research System' },
  { path: '/work/ai-interview-simulator', expectedText: 'AI Interview Simulator' },
  { path: '/work/aurora-synthetics', expectedText: 'Aurora Synthetics' },
  { path: '/demos', expectedText: 'Functional proof of' },
  { path: '/demos/saas-dashboard', expectedText: 'Telemetry & Customer Analytics Console' },
  { path: '/demos/ai-automation', expectedText: 'Lead Intake & Qualification Orchestrator' },
  { path: '/demos/erp-workflow', expectedText: 'Order Fulfillment, Multi-Hub Inventory & Ledger' },
  { path: '/resources', expectedText: 'Authoritative documents for' },
  { path: '/process', expectedText: 'Four connected stages.' },
  { path: '/technology', expectedText: 'Built with technologies engineered for' },
  { path: '/contact', expectedText: "Let's build something" },
  { path: '/build', expectedText: "Let's build something" },
  { path: '/privacy', expectedText: 'Privacy Policy & Data Security' },
  { path: '/terms', expectedText: 'Terms of Commercial Engagement' },
  { path: '/sitemap.xml', expectedText: 'http://www.sitemaps.org/schemas/sitemap/0.9' },
  { path: '/robots.txt', expectedText: 'User-Agent: *' }
];

async function testRoutes() {
  console.log('\n--- 1. TESTING WEBSITE ROUTES & SITEMAP/ROBOTS ---');
  const internalLinks = new Set();

  for (const r of routesToTest) {
    results.routesTested++;
    try {
      const res = await fetch(`${BASE_URL}${r.path}`);
      if (!res.ok) {
        fail(`Route ${r.path}`, `HTTP status ${res.status}`);
        continue;
      }
      const text = await res.text();
      // Unescape potential HTML entities for matching
      const normalizedText = text.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&apos;/g, "'");
      if (!normalizedText.includes(r.expectedText)) {
        fail(`Route ${r.path}`, `Expected text "${r.expectedText}" not found in response`);
        continue;
      }
      pass(`Route ${r.path}`, `HTTP 200 (${text.length} bytes)`);
      results.routesPassed++;

      // Extract internal links for crawler check
      const hrefMatches = text.matchAll(/href="(\/[^"#?]*)"/g);
      for (const m of hrefMatches) {
        const link = m[1];
        if (!link.startsWith('/_next') && !link.startsWith('/api') && !link.endsWith('.svg')) {
          internalLinks.add(link);
        }
      }
    } catch (err) {
      fail(`Route ${r.path}`, err.message);
    }
  }

  // 404 test
  results.routesTested++;
  try {
    const notFoundRes = await fetch(`${BASE_URL}/this-route-does-not-exist-qa-check`);
    if (notFoundRes.status === 404) {
      const body = await notFoundRes.text();
      if (body.includes('404') || body.includes('Page Not Found') || body.includes('Return Home')) {
        pass('Route 404 handler', 'Correct HTTP 404 status and custom error layout rendered');
        results.routesPassed++;
      } else {
        fail('Route 404 handler', 'Missing 404 text indicator');
      }
    } else {
      fail('Route 404 handler', `Expected 404 status, got ${notFoundRes.status}`);
    }
  } catch (err) {
    fail('Route 404 handler', err.message);
  }

  // Check discovered internal links for broken links
  console.log(`\n--- 2. INTERNAL LINK CRAWLER (${internalLinks.size} discovered links) ---`);
  for (const link of internalLinks) {
    try {
      const linkRes = await fetch(`${BASE_URL}${link}`);
      if (linkRes.ok) {
        pass(`Link target ${link}`, `Status ${linkRes.status}`);
      } else {
        fail(`Link target ${link}`, `HTTP ${linkRes.status}`);
        results.brokenLinks.push({ link, status: linkRes.status });
      }
    } catch (err) {
      fail(`Link target ${link}`, err.message);
      results.brokenLinks.push({ link, error: err.message });
    }
  }
}

// 2. DOCUMENT AND SALES KIT AUDIT
function testDocuments() {
  console.log('\n--- 3. TESTING SALES KIT & PROPOSAL DOCUMENTS ---');
  const docs = [
    { file: 'public/docs/code-and-crumbs-company-introduction.pdf', type: 'pdf' },
    { file: 'public/docs/code-and-crumbs-services-capabilities.pdf', type: 'pdf' },
    { file: 'public/docs/code-and-crumbs-technology-stack.pdf', type: 'pdf' },
    { file: 'public/docs/code-and-crumbs-case-studies.pdf', type: 'pdf' },
    { file: 'public/docs/code-and-crumbs-engagement-process.pdf', type: 'pdf' },
    { file: 'docs/internal/proposals/code-and-crumbs-proposal-template.docx', type: 'docx' },
    { file: 'docs/internal/proposals/code-and-crumbs-proposal-template.pdf', type: 'pdf' },
    { file: 'docs/internal/proposals/CC-2025-SAMPLE-tailored-proposal.docx', type: 'docx' },
    { file: 'docs/internal/proposals/CC-2025-SAMPLE-tailored-proposal.pdf', type: 'pdf' }
  ];

  for (const d of docs) {
    results.documentsTested++;
    const fullPath = path.resolve(process.cwd(), d.file);
    if (!fs.existsSync(fullPath)) {
      fail(`Document ${d.file}`, 'File does not exist');
      continue;
    }
    const stat = fs.statSync(fullPath);
    if (stat.size < 1000) {
      fail(`Document ${d.file}`, `File size suspiciously small (${stat.size} bytes)`);
      continue;
    }
    const buffer = fs.readFileSync(fullPath);
    if (d.type === 'pdf') {
      const header = buffer.subarray(0, 5).toString('ascii');
      if (header !== '%PDF-') {
        fail(`Document ${d.file}`, `Invalid PDF magic bytes: "${header}"`);
        continue;
      }
    } else if (d.type === 'docx') {
      const header = buffer.subarray(0, 4);
      // PK\x03\x04 (zip header for docx)
      if (header[0] !== 0x50 || header[1] !== 0x4b || header[2] !== 0x03 || header[3] !== 0x04) {
        fail(`Document ${d.file}`, 'Invalid DOCX magic bytes (not a valid zip package)');
        continue;
      }
    }
    pass(`Document ${d.file}`, `Valid ${d.type.toUpperCase()} (${(stat.size / 1024).toFixed(1)} KB)`);
    results.documentsPassed++;
  }
}

// 3. API VALIDATION, HONEYPOT, AND INGESTION AUDIT
async function testEnquiryApi() {
  console.log('\n--- 4. TESTING /api/enquiry VALIDATION, HONEYPOT, & RATE LIMITING ---');

  // Test A: Missing required name
  try {
    const res = await fetch(`${BASE_URL}/api/enquiry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-forwarded-for': '198.51.100.11'
      },
      body: JSON.stringify({
        businessEmail: 'sarah@example.com',
        projectTypes: ['AI agent']
      })
    });
    if (res.status === 400) {
      const data = await res.json();
      if (data.error && data.error.includes('valid full name')) {
        pass('API Validation: Missing name rejected', `HTTP 400 ("${data.error}")`);
        results.apiTestsPassed++;
      } else {
        fail('API Validation: Missing name', `Unexpected error: ${JSON.stringify(data)}`);
        results.apiTestsFailed++;
      }
    } else {
      fail('API Validation: Missing name', `Expected HTTP 400, got ${res.status}`);
      results.apiTestsFailed++;
    }
  } catch (err) {
    fail('API Validation: Missing name', err.message);
    results.apiTestsFailed++;
  }

  // Test B: Invalid email format
  try {
    const res = await fetch(`${BASE_URL}/api/enquiry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-forwarded-for': '198.51.100.12'
      },
      body: JSON.stringify({
        fullName: 'Test QA Engineer',
        businessEmail: 'not-a-valid-email',
        projectTypes: ['AI agent']
      })
    });
    if (res.status === 400) {
      const data = await res.json();
      if (data.error && data.error.includes('valid corporate or business email')) {
        pass('API Validation: Invalid email rejected', `HTTP 400 ("${data.error}")`);
        results.apiTestsPassed++;
      } else {
        fail('API Validation: Invalid email', `Unexpected error message: ${JSON.stringify(data)}`);
        results.apiTestsFailed++;
      }
    } else {
      fail('API Validation: Invalid email', `Expected HTTP 400, got ${res.status}`);
      results.apiTestsFailed++;
    }
  } catch (err) {
    fail('API Validation: Invalid email', err.message);
    results.apiTestsFailed++;
  }

  // Test C: Missing project archetype
  try {
    const res = await fetch(`${BASE_URL}/api/enquiry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-forwarded-for': '198.51.100.13'
      },
      body: JSON.stringify({
        fullName: 'Test QA Engineer',
        businessEmail: 'engineer@corp.com',
        projectTypes: []
      })
    });
    if (res.status === 400) {
      const data = await res.json();
      if (data.error && data.error.includes('select at least one target project archetype')) {
        pass('API Validation: Empty project archetype rejected', `HTTP 400 ("${data.error}")`);
        results.apiTestsPassed++;
      } else {
        fail('API Validation: Empty project archetype', `Unexpected error message: ${JSON.stringify(data)}`);
        results.apiTestsFailed++;
      }
    } else {
      fail('API Validation: Empty project archetype', `Expected HTTP 400, got ${res.status}`);
      results.apiTestsFailed++;
    }
  } catch (err) {
    fail('API Validation: Empty project archetype', err.message);
    results.apiTestsFailed++;
  }

  // Test D: Honeypot trap
  try {
    const leadsFile = path.resolve(process.cwd(), 'data/leads.json');
    const initialCount = fs.existsSync(leadsFile) ? JSON.parse(fs.readFileSync(leadsFile, 'utf8')).length : 0;

    const res = await fetch(`${BASE_URL}/api/enquiry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-forwarded-for': '198.51.100.14'
      },
      body: JSON.stringify({
        fullName: 'Spambot Bob',
        businessEmail: 'spambot@example.com',
        projectTypes: ['AI agent'],
        bot_field: 'I am a spam bot filling the hidden input'
      })
    });

    const newCount = fs.existsSync(leadsFile) ? JSON.parse(fs.readFileSync(leadsFile, 'utf8')).length : 0;
    if (res.status === 200 && newCount === initialCount) {
      pass('API Honeypot: Bot trap silently dropped', 'HTTP 200 returned, lead discarded from disk storage');
      results.apiTestsPassed++;
    } else {
      fail('API Honeypot: Bot trap', `Status ${res.status}, initialCount: ${initialCount}, newCount: ${newCount}`);
      results.apiTestsFailed++;
    }
  } catch (err) {
    fail('API Honeypot: Bot trap', err.message);
    results.apiTestsFailed++;
  }

  // Test E: Valid Project Enquiry / Requirement Submission
  try {
    const res = await fetch(`${BASE_URL}/api/enquiry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-forwarded-for': '203.0.113.88'
      },
      body: JSON.stringify({
        fullName: 'Sarah Connor',
        businessEmail: 'sconnor@cyberdyne-defense.com',
        companyName: 'Cyberdyne Resistance LLC',
        phone: '+1 555 019 2831',
        currency: 'USD',
        budgetBand: '$50,000 - $100,000',
        targetTimeline: '3 - 6 months',
        services: ['AI Agents', 'ERP & CRM Systems', 'Workflow Automation'],
        projectTypes: ['AI agent', 'ERP / CRM'],
        techPreferences: ['FastAPI', 'PostgreSQL', 'LangGraph'],
        features: ['User authentication', 'Admin dashboard'],
        problemStatement: 'We require an automated tactical sensor intake and ERP resource dispatch pipeline.',
        targetUsers: 'Defense engineers and field analysts',
        expectedOutcome: 'Sub-second triage latency',
        industry: 'Autonomous Systems',
        currentSolution: 'Legacy spreadsheets and manual email chains',
        designReady: 'yes',
        backendReady: 'needs_scaffolding',
        sourceRef: 'audit-test-suite'
      })
    });

    if (res.ok) {
      const data = await res.json();
      pass('API Submission: Valid complex enquiry ingested', `Reference: ${data.reference}`);
      results.apiTestsPassed++;

      // Verify lead was persisted to disk
      const leadsFile = path.resolve(process.cwd(), 'data/leads.json');
      const leads = JSON.parse(fs.readFileSync(leadsFile, 'utf8'));
      const storedLead = leads.find(l => l.reference === data.reference);
      if (storedLead && storedLead.enquiry && storedLead.enquiry.fullName === 'Sarah Connor') {
        pass('Persistence: Lead written to data/leads.json', `Verified lead ${storedLead.reference} stored with all metadata`);
        results.apiTestsPassed++;
      } else {
        fail('Persistence: Lead verification', 'Lead not found in data/leads.json');
        results.apiTestsFailed++;
      }
    } else {
      const errText = await res.text();
      fail('API Submission: Valid enquiry', `HTTP ${res.status}: ${errText}`);
      results.apiTestsFailed++;
    }
  } catch (err) {
    fail('API Submission: Valid enquiry', err.message);
    results.apiTestsFailed++;
  }

  // Test F: Rate Limiting
  try {
    const testIp = `198.51.100.${Math.floor(Math.random() * 150) + 50}`;
    let hitRateLimit = false;
    for (let i = 0; i < 7; i++) {
      const res = await fetch(`${BASE_URL}/api/enquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-forwarded-for': testIp
        },
        body: JSON.stringify({
          fullName: `Rate Tester ${i}`,
          businessEmail: `rate${i}@example.com`,
          projectTypes: ['MVP development']
        })
      });
      if (res.status === 429) {
        hitRateLimit = true;
        const errJson = await res.json();
        pass('Security: IP Rate Limiting', `Blocked on attempt #${i + 1} with HTTP 429 ("${errJson.error}")`);
        results.apiTestsPassed++;
        break;
      }
    }
    if (!hitRateLimit) {
      fail('Security: IP Rate Limiting', 'Failed to trigger HTTP 429 after 7 rapid submissions');
      results.apiTestsFailed++;
    }
  } catch (err) {
    fail('Security: IP Rate Limiting', err.message);
    results.apiTestsFailed++;
  }
}

async function runAll() {
  console.log('====================================================');
  console.log('  CODE&CRUMBS INDEPENDENT QA AUTOMATED TEST SUITE   ');
  console.log('====================================================');
  await testRoutes();
  testDocuments();
  await testEnquiryApi();

  console.log('\n====================================================');
  console.log('                 AUDIT SUMMARY                      ');
  console.log('====================================================');
  console.log(`Routes Tested:     ${results.routesTested} | Passed: ${results.routesPassed}`);
  console.log(`Documents Tested:  ${results.documentsTested} | Passed: ${results.documentsPassed}`);
  console.log(`API Tests Passed:  ${results.apiTestsPassed} | Failed: ${results.apiTestsFailed}`);
  console.log(`Broken Links:      ${results.brokenLinks.length}`);
  console.log(`Total Failures:    ${results.failures.length}`);

  if (results.failures.length > 0) {
    console.log('\nFailed Tests:');
    results.failures.forEach(f => console.log(` - ${f.name}: ${f.error}`));
    process.exit(1);
  } else {
    console.log('\n✓ ALL AUTOMATED AUDIT SUITE TESTS PASSED CLEANLY.');
    process.exit(0);
  }
}

runAll();
