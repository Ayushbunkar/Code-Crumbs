"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input, FormLabel, FormGroup, Select } from "@/components/ui/form";
import {
  ArrowLeft,
  ArrowUpRight,
  TrendingUp,
  Users,
  Activity,
  DollarSign,
  Filter,
  CheckCircle2,
  Clock,
  Search,
  Plus,
  RotateCcw,
  Sparkles,
  Layers,
  ChevronRight,
  X,
  CreditCard,
  Shield,
  Building,
  Mail,
  Calendar,
  AlertCircle,
  BarChart3,
  SlidersHorizontal,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Customer {
  id: string;
  name: string;
  company: string;
  email: string;
  tier: "Starter" | "Growth" | "Enterprise";
  mrr: number;
  status: "Active" | "Trial" | "Churned";
  joinedDate: string;
  renewalDate: string;
  apiCallsMonthly: string;
  seatsAllocated: number;
}

const INITIAL_CUSTOMERS: Customer[] = [
  {
    id: "CUST-1001",
    name: "Elena Vance",
    company: "Vance Bio Labs",
    email: "elena@vancebio.internal",
    tier: "Enterprise",
    mrr: 4800,
    status: "Active",
    joinedDate: "2024-01-15",
    renewalDate: "2025-01-15",
    apiCallsMonthly: "2.4M",
    seatsAllocated: 45,
  },
  {
    id: "CUST-1002",
    name: "Marcus Thorne",
    company: "Strata Global Wealth",
    email: "m.thorne@strataglobal.internal",
    tier: "Enterprise",
    mrr: 7200,
    status: "Active",
    joinedDate: "2023-11-20",
    renewalDate: "2024-11-20",
    apiCallsMonthly: "5.8M",
    seatsAllocated: 120,
  },
  {
    id: "CUST-1003",
    name: "Aria Chen",
    company: "Hyperion Robotics",
    email: "aria@hyperion.internal",
    tier: "Growth",
    mrr: 1800,
    status: "Active",
    joinedDate: "2024-03-02",
    renewalDate: "2025-03-02",
    apiCallsMonthly: "840k",
    seatsAllocated: 18,
  },
  {
    id: "CUST-1004",
    name: "David Ross",
    company: "Apex Synthetic Media",
    email: "david@apexmedia.internal",
    tier: "Growth",
    mrr: 1200,
    status: "Trial",
    joinedDate: "2024-04-10",
    renewalDate: "2024-05-10",
    apiCallsMonthly: "320k",
    seatsAllocated: 8,
  },
  {
    id: "CUST-1005",
    name: "Siddharth Verma",
    company: "Kavach Cyber Systems",
    email: "siddharth@kavach.internal",
    tier: "Starter",
    mrr: 450,
    status: "Active",
    joinedDate: "2024-02-18",
    renewalDate: "2025-02-18",
    apiCallsMonthly: "110k",
    seatsAllocated: 5,
  },
  {
    id: "CUST-1006",
    name: "Claire Beaulieu",
    company: "Lumiere Logistics",
    email: "claire@lumiere.internal",
    tier: "Growth",
    mrr: 2100,
    status: "Churned",
    joinedDate: "2023-08-14",
    renewalDate: "2024-08-14",
    apiCallsMonthly: "15k",
    seatsAllocated: 12,
  },
];

export default function SaasDashboardDemo() {
  const [activeTab, setActiveTab] = useState<"overview" | "customers" | "analytics">("overview");
  const [customers, setCustomers] = useState<Customer[]>(INITIAL_CUSTOMERS);
  const [searchQuery, setSearchQuery] = useState("");
  const [tierFilter, setTierFilter] = useState<string>("All");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Add Customer Form State
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    company: "",
    email: "",
    tier: "Growth" as "Starter" | "Growth" | "Enterprise",
    mrr: 1500,
    status: "Active" as "Active" | "Trial" | "Churned",
    seatsAllocated: 10,
  });

  // Calculate live metrics from customer array
  const totalMRR = customers
    .filter((c) => c.status === "Active" || c.status === "Trial")
    .reduce((sum, c) => sum + c.mrr, 0);
  const activeCount = customers.filter((c) => c.status === "Active").length;
  const trialCount = customers.filter((c) => c.status === "Trial").length;
  const totalSeats = customers.reduce((sum, c) => sum + c.seatsAllocated, 0);

  // Filtered customer records
  const filteredCustomers = customers.filter((c) => {
    const matchesSearch =
      c.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTier = tierFilter === "All" || c.tier === tierFilter;
    const matchesStatus = statusFilter === "All" || c.status === statusFilter;
    return matchesSearch && matchesTier && matchesStatus;
  });

  const handleStatusChange = (id: string, newStatus: "Active" | "Trial" | "Churned") => {
    setCustomers((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: newStatus } : c))
    );
    if (selectedCustomer && selectedCustomer.id === id) {
      setSelectedCustomer((prev) => (prev ? { ...prev, status: newStatus } : null));
    }
  };

  const handleAddCustomerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCustomer.company || !newCustomer.email) return;

    const newRecord: Customer = {
      id: `CUST-${Math.floor(1000 + Math.random() * 9000)}`,
      name: newCustomer.name || "Operations Lead",
      company: newCustomer.company,
      email: newCustomer.email,
      tier: newCustomer.tier,
      mrr: Number(newCustomer.mrr) || 1200,
      status: newCustomer.status,
      joinedDate: new Date().toISOString().split("T")[0],
      renewalDate: new Date(Date.now() + 365 * 86400000).toISOString().split("T")[0],
      apiCallsMonthly: "150k",
      seatsAllocated: Number(newCustomer.seatsAllocated) || 5,
    };

    setCustomers([newRecord, ...customers]);
    setIsAddModalOpen(false);
    setNewCustomer({
      name: "",
      company: "",
      email: "",
      tier: "Growth",
      mrr: 1500,
      status: "Active",
      seatsAllocated: 10,
    });
  };

  const handleResetDemo = () => {
    setCustomers(INITIAL_CUSTOMERS);
    setSearchQuery("");
    setTierFilter("All");
    setStatusFilter("All");
    setSelectedCustomer(null);
  };

  return (
    <div className="w-full">
      {/* Top Header Bar */}
      <Section spacing="sm" divider="bottom" className="bg-surface">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Link
            href="/demos"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase text-charcoal-50 hover:text-burnt transition-colors font-semibold"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Return to Demos Directory</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono bg-burnt/10 text-burnt border border-burnt/30 px-3 py-1 font-semibold flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-burnt animate-pulse" />
              Interactive Demo — Sample Data
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={handleResetDemo}
              className="gap-1.5 text-xs font-mono uppercase"
            >
              <RotateCcw className="h-3.5 w-3.5 text-charcoal-50" />
              <span>Reset Demo</span>
            </Button>
          </div>
        </div>
      </Section>

      {/* Main Application Container */}
      <Section spacing="md" theme="sand">
        <div className="border border-border bg-surface shadow-subtle">
          {/* Internal Application Header */}
          <div className="p-6 bg-charcoal text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-charcoal-200">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono uppercase text-burnt tracking-widest font-semibold">
                  Demo 01 • Product Application
                </span>
                <span className="text-charcoal-200">•</span>
                <span className="text-xs font-mono text-sand/80">Code&amp;Crumbs SaaS Architecture</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-serif text-white tracking-tight mt-1">
                Telemetry &amp; Customer Analytics Console
              </h1>
            </div>

            {/* Application Level CTAs */}
            <div className="flex items-center gap-3">
              <Button
                variant="primary"
                size="sm"
                onClick={() => setIsAddModalOpen(true)}
                className="gap-1.5 text-xs font-mono uppercase tracking-wider"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add Customer</span>
              </Button>
            </div>
          </div>

          {/* Sub-Navigation Strip (Sidebar equivalent for horizontal responsive layout) */}
          <div className="flex items-center justify-between px-6 py-2.5 bg-sand-50 border-b border-border overflow-x-auto">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab("overview")}
                className={cn(
                  "px-3.5 py-1.5 text-xs font-mono uppercase transition-all flex items-center gap-1.5 border",
                  activeTab === "overview"
                    ? "bg-surface border-border text-charcoal font-semibold shadow-subtle"
                    : "border-transparent text-charcoal-50 hover:text-charcoal"
                )}
              >
                <BarChart3 className="h-3.5 w-3.5 text-burnt" />
                <span>Executive Overview</span>
              </button>

              <button
                onClick={() => setActiveTab("customers")}
                className={cn(
                  "px-3.5 py-1.5 text-xs font-mono uppercase transition-all flex items-center gap-1.5 border",
                  activeTab === "customers"
                    ? "bg-surface border-border text-charcoal font-semibold shadow-subtle"
                    : "border-transparent text-charcoal-50 hover:text-charcoal"
                )}
              >
                <Users className="h-3.5 w-3.5 text-burnt" />
                <span>Customer Directory ({customers.length})</span>
              </button>

              <button
                onClick={() => setActiveTab("analytics")}
                className={cn(
                  "px-3.5 py-1.5 text-xs font-mono uppercase transition-all flex items-center gap-1.5 border",
                  activeTab === "analytics"
                    ? "bg-surface border-border text-charcoal font-semibold shadow-subtle"
                    : "border-transparent text-charcoal-50 hover:text-charcoal"
                )}
              >
                <TrendingUp className="h-3.5 w-3.5 text-burnt" />
                <span>Revenue Metrics</span>
              </button>
            </div>

            <div className="hidden md:flex items-center gap-2 text-xs font-mono text-charcoal-50">
              <Shield className="h-3.5 w-3.5 text-emerald-600" />
              <span>Simulated Client-Side State</span>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* KPI Metrics Strip */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 border border-border bg-sand-50/60 space-y-2">
                <span className="text-[10px] font-mono uppercase text-charcoal-50 tracking-wider block">
                  Simulated MRR
                </span>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-charcoal block">
                  ${totalMRR.toLocaleString()}
                </span>
                <span className="text-[11px] font-mono text-emerald-700 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  <span>+14.2% QoQ Net Expansion</span>
                </span>
              </div>

              <div className="p-5 border border-border bg-sand-50/60 space-y-2">
                <span className="text-[10px] font-mono uppercase text-charcoal-50 tracking-wider block">
                  Active Subscriptions
                </span>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-charcoal block">
                  {activeCount} Accounts
                </span>
                <span className="text-[11px] font-mono text-charcoal-50">
                  {trialCount} currently in 14-day trials
                </span>
              </div>

              <div className="p-5 border border-border bg-sand-50/60 space-y-2">
                <span className="text-[10px] font-mono uppercase text-charcoal-50 tracking-wider block">
                  Total Allocated Seats
                </span>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-charcoal block">
                  {totalSeats} Users
                </span>
                <span className="text-[11px] font-mono text-charcoal-50">
                  Avg 18.2 seats / enterprise node
                </span>
              </div>

              <div className="p-5 border border-border bg-sand-50/60 space-y-2">
                <span className="text-[10px] font-mono uppercase text-charcoal-50 tracking-wider block">
                  Global API Invocations
                </span>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-charcoal block">
                  9.48M
                </span>
                <span className="text-[11px] font-mono text-emerald-700">
                  99.99% Edge Availability
                </span>
              </div>
            </div>

            {/* TAB 1: EXECUTIVE OVERVIEW */}
            {activeTab === "overview" && (
              <div className="space-y-8">
                {/* Visual Revenue Breakdown Chart */}
                <div className="p-6 border border-border bg-sand-50/40 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-border gap-2">
                    <div>
                      <h3 className="font-serif text-lg text-charcoal">
                        Monthly Recurring Revenue Progression (Sample Trajectory)
                      </h3>
                      <p className="text-xs text-charcoal-50">
                        Visualizing ARR expansion from Enterprise contracts and Growth tier upgrades.
                      </p>
                    </div>
                    <Badge variant="outline" className="font-mono text-[10px]">
                      Simulated Trajectory
                    </Badge>
                  </div>

                  {/* SVG Bar Chart Visualization */}
                  <div className="pt-4 pb-2">
                    <div className="flex items-end justify-between gap-2 sm:gap-4 h-48 sm:h-56 px-2 border-b border-border">
                      {[
                        { month: "Jan", val: 8400, prev: 7200 },
                        { month: "Feb", val: 9800, prev: 8400 },
                        { month: "Mar", val: 11200, prev: 9800 },
                        { month: "Apr", val: 12800, prev: 11200 },
                        { month: "May", val: 13900, prev: 12800 },
                        { month: "Jun", val: 14700, prev: 13900 },
                        { month: "Jul", val: 15800, prev: 14700 },
                        { month: "Aug", val: 16900, prev: 15800 },
                        { month: "Sep", val: 17400, prev: 16900 },
                        { month: "Oct", val: 18100, prev: 17400 },
                        { month: "Nov", val: 19200, prev: 18100 },
                        { month: "Dec", val: totalMRR, prev: 19200 },
                      ].map((item, idx) => {
                        const heightPct = Math.min(100, Math.round((item.val / 22000) * 100));
                        return (
                          <div key={item.month} className="flex-1 flex flex-col items-center gap-2 group">
                            <span className="text-[9px] font-mono text-charcoal-50 opacity-0 group-hover:opacity-100 transition-opacity">
                              ${item.val.toLocaleString()}
                            </span>
                            <div
                              className="w-full bg-sand-200 group-hover:bg-burnt transition-colors rounded-none relative"
                              style={{ height: `${heightPct}%` }}
                            >
                              {idx === 11 && (
                                <div className="absolute top-0 inset-x-0 h-1 bg-burnt animate-pulse" />
                              )}
                            </div>
                            <span className="text-[10px] font-mono text-charcoal-50 uppercase">
                              {item.month}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Recent High-Value Customers Snippet */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg text-charcoal">
                      Recent Enterprise &amp; Growth Subscriptions
                    </h3>
                    <button
                      onClick={() => setActiveTab("customers")}
                      className="text-xs font-mono text-burnt hover:underline"
                    >
                      View Full Table ({customers.length}) &rarr;
                    </button>
                  </div>

                  <div className="border border-border bg-surface overflow-x-auto">
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-sand-50 border-b border-border text-charcoal-50 text-[10px] uppercase">
                        <tr>
                          <th className="p-3">Company</th>
                          <th className="p-3">Tier</th>
                          <th className="p-3 text-right">MRR Value</th>
                          <th className="p-3">Status</th>
                          <th className="p-3 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {customers.slice(0, 4).map((c) => (
                          <tr key={c.id} className="hover:bg-sand-50/50 transition-colors">
                            <td className="p-3">
                              <span className="font-semibold text-charcoal block">{c.company}</span>
                              <span className="text-[10px] text-charcoal-50">{c.name}</span>
                            </td>
                            <td className="p-3">
                              <span className="px-2 py-0.5 text-[10px] bg-sand-100 border border-border">
                                {c.tier}
                              </span>
                            </td>
                            <td className="p-3 text-right font-semibold text-charcoal">
                              ${c.mrr.toLocaleString()}/mo
                            </td>
                            <td className="p-3">
                              <span
                                className={cn(
                                  "px-2 py-0.5 text-[10px] border uppercase",
                                  c.status === "Active" && "border-emerald-300 text-emerald-800 bg-emerald-50",
                                  c.status === "Trial" && "border-amber-300 text-amber-800 bg-amber-50",
                                  c.status === "Churned" && "border-charcoal-100 text-charcoal-50 bg-charcoal-50/10"
                                )}
                              >
                                {c.status}
                              </span>
                            </td>
                            <td className="p-3 text-right">
                              <button
                                onClick={() => setSelectedCustomer(c)}
                                className="text-burnt hover:underline text-xs"
                              >
                                View Specs
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: CUSTOMERS DIRECTORY */}
            {activeTab === "customers" && (
              <div className="space-y-6">
                {/* Search & Filter Bar */}
                <div className="p-4 bg-sand-50 border border-border flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="relative w-full md:w-80">
                    <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-charcoal-50" />
                    <Input
                      placeholder="Search company, contact, or email..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-9 text-xs"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase text-charcoal-50">Tier:</span>
                      <Select
                        value={tierFilter}
                        onChange={(e) => setTierFilter(e.target.value)}
                        className="text-xs h-8 py-0"
                      >
                        <option value="All">All Tiers</option>
                        <option value="Starter">Starter</option>
                        <option value="Growth">Growth</option>
                        <option value="Enterprise">Enterprise</option>
                      </Select>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase text-charcoal-50">Status:</span>
                      <Select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="text-xs h-8 py-0"
                      >
                        <option value="All">All Statuses</option>
                        <option value="Active">Active</option>
                        <option value="Trial">Trial</option>
                        <option value="Churned">Churned</option>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Main Interactive Customer Table */}
                <div className="border border-border bg-surface overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-sand-50 border-b border-border text-charcoal-50 text-[10px] uppercase">
                      <tr>
                        <th className="p-3">ID / Account</th>
                        <th className="p-3">Primary Contact</th>
                        <th className="p-3">Subscription Tier</th>
                        <th className="p-3 text-right">MRR (USD)</th>
                        <th className="p-3">Seats</th>
                        <th className="p-3">Status Lifecycle</th>
                        <th className="p-3 text-right">Quick Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {filteredCustomers.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="p-8 text-center text-charcoal-50">
                            No customers match your filter query.
                          </td>
                        </tr>
                      ) : (
                        filteredCustomers.map((c) => (
                          <tr key={c.id} className="hover:bg-sand-50/40 transition-colors">
                            <td className="p-3">
                              <span className="font-semibold text-charcoal block">{c.company}</span>
                              <span className="text-[10px] text-charcoal-50">{c.id}</span>
                            </td>
                            <td className="p-3">
                              <span className="text-charcoal block">{c.name}</span>
                              <span className="text-[10px] text-charcoal-50">{c.email}</span>
                            </td>
                            <td className="p-3">
                              <span className="px-2 py-0.5 text-[10px] bg-sand-100 border border-border">
                                {c.tier}
                              </span>
                            </td>
                            <td className="p-3 text-right font-semibold text-charcoal">
                              ${c.mrr.toLocaleString()}
                            </td>
                            <td className="p-3 text-charcoal-50">{c.seatsAllocated} seats</td>
                            <td className="p-3">
                              <select
                                value={c.status}
                                onChange={(e) =>
                                  handleStatusChange(
                                    c.id,
                                    e.target.value as "Active" | "Trial" | "Churned"
                                  )
                                }
                                className={cn(
                                  "text-[10px] font-mono uppercase px-2 py-1 border rounded-none cursor-pointer",
                                  c.status === "Active" && "border-emerald-300 text-emerald-800 bg-emerald-50",
                                  c.status === "Trial" && "border-amber-300 text-amber-800 bg-amber-50",
                                  c.status === "Churned" && "border-charcoal-100 text-charcoal-50 bg-charcoal-50/10"
                                )}
                              >
                                <option value="Active">Active</option>
                                <option value="Trial">Trial</option>
                                <option value="Churned">Churned</option>
                              </select>
                            </td>
                            <td className="p-3 text-right">
                              <button
                                onClick={() => setSelectedCustomer(c)}
                                className="text-burnt hover:underline text-xs"
                              >
                                Details &rarr;
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 3: REVENUE METRICS SPECIFICATION */}
            {activeTab === "analytics" && (
              <div className="space-y-6">
                <div className="p-6 border border-border bg-sand-50/50 space-y-4">
                  <span className="text-xs font-mono uppercase text-burnt font-semibold block">
                    Financial Partitioning
                  </span>
                  <h3 className="font-serif text-xl text-charcoal">
                    Subscription Tier Revenue Distribution
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    <div className="p-4 bg-surface border border-border space-y-2">
                      <span className="text-[10px] font-mono uppercase text-charcoal-50 block">
                        Enterprise Tier ($4,000+)
                      </span>
                      <span className="text-2xl font-serif font-bold text-charcoal block">
                        $
                        {customers
                          .filter((c) => c.tier === "Enterprise" && c.status !== "Churned")
                          .reduce((s, c) => s + c.mrr, 0)
                          .toLocaleString()}
                        /mo
                      </span>
                      <p className="text-[11px] text-charcoal-50">
                        Dedicated SLA, custom vector index, SSO integration.
                      </p>
                    </div>

                    <div className="p-4 bg-surface border border-border space-y-2">
                      <span className="text-[10px] font-mono uppercase text-charcoal-50 block">
                        Growth Tier ($1,000–$3,000)
                      </span>
                      <span className="text-2xl font-serif font-bold text-charcoal block">
                        $
                        {customers
                          .filter((c) => c.tier === "Growth" && c.status !== "Churned")
                          .reduce((s, c) => s + c.mrr, 0)
                          .toLocaleString()}
                        /mo
                      </span>
                      <p className="text-[11px] text-charcoal-50">
                        Up to 25 seats, automated webhook pipeline, standard API limit.
                      </p>
                    </div>

                    <div className="p-4 bg-surface border border-border space-y-2">
                      <span className="text-[10px] font-mono uppercase text-charcoal-50 block">
                        Starter Tier (&lt;$1,000)
                      </span>
                      <span className="text-2xl font-serif font-bold text-charcoal block">
                        $
                        {customers
                          .filter((c) => c.tier === "Starter" && c.status !== "Churned")
                          .reduce((s, c) => s + c.mrr, 0)
                          .toLocaleString()}
                        /mo
                      </span>
                      <p className="text-[11px] text-charcoal-50">
                        Entry-level self-serve teams, shared database instance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Customer Details Drawer / Modal */}
      {selectedCustomer && (
        <div className="fixed inset-0 z-50 bg-charcoal/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-surface border border-border max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-elevated animate-fade-in relative">
            <button
              onClick={() => setSelectedCustomer(null)}
              className="absolute top-6 right-6 text-charcoal-50 hover:text-charcoal p-1"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-burnt font-semibold tracking-wider block">
                Customer Account Details
              </span>
              <h2 className="text-2xl font-serif text-charcoal">
                {selectedCustomer.company}
              </h2>
              <span className="text-xs font-mono text-charcoal-50">
                Account ID: {selectedCustomer.id}
              </span>
            </div>

            <div className="space-y-4 pt-2 border-t border-border text-xs font-mono">
              <div className="grid grid-cols-2 gap-4 p-4 bg-sand-50 border border-border">
                <div>
                  <span className="text-charcoal-50 uppercase text-[10px] block">Contracted MRR</span>
                  <strong className="text-base text-charcoal font-serif">
                    ${selectedCustomer.mrr.toLocaleString()}/mo
                  </strong>
                </div>
                <div>
                  <span className="text-charcoal-50 uppercase text-[10px] block">Subscription Tier</span>
                  <strong className="text-base text-charcoal font-serif">
                    {selectedCustomer.tier}
                  </strong>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between py-1.5 border-b border-border">
                  <span className="text-charcoal-50">Primary Contact:</span>
                  <span className="text-charcoal font-semibold">{selectedCustomer.name}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-border">
                  <span className="text-charcoal-50">Business Email:</span>
                  <span className="text-charcoal">{selectedCustomer.email}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-border">
                  <span className="text-charcoal-50">Allocated Seats:</span>
                  <span className="text-charcoal">{selectedCustomer.seatsAllocated} Users</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-border">
                  <span className="text-charcoal-50">Monthly API Invocations:</span>
                  <span className="text-charcoal">{selectedCustomer.apiCallsMonthly}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-border">
                  <span className="text-charcoal-50">Customer Inception:</span>
                  <span className="text-charcoal">{selectedCustomer.joinedDate}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-border">
                  <span className="text-charcoal-50">Contract Renewal Date:</span>
                  <span className="text-charcoal">{selectedCustomer.renewalDate}</span>
                </div>
              </div>

              {/* Status Switcher in Drawer */}
              <div className="pt-2">
                <FormLabel>Update Account Status Lifecycle</FormLabel>
                <div className="grid grid-cols-3 gap-2 mt-1">
                  {(["Active", "Trial", "Churned"] as const).map((st) => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => handleStatusChange(selectedCustomer.id, st)}
                      className={cn(
                        "py-2 text-xs font-mono uppercase border transition-colors",
                        selectedCustomer.status === st
                          ? "bg-burnt text-white border-burnt font-semibold"
                          : "bg-surface border-border text-charcoal-50 hover:bg-sand-50"
                      )}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border flex justify-end">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedCustomer(null)}
                className="text-xs font-mono uppercase"
              >
                Close Specifications
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Add Customer Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-charcoal/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-surface border border-border max-w-md w-full p-6 sm:p-8 space-y-6 shadow-elevated animate-fade-in relative">
            <button
              onClick={() => setIsAddModalOpen(false)}
              className="absolute top-6 right-6 text-charcoal-50 hover:text-charcoal p-1"
            >
              <X className="h-5 w-5" />
            </button>

            <div>
              <span className="text-xs font-mono uppercase text-burnt font-semibold tracking-wider block">
                Interactive State Simulation
              </span>
              <h2 className="text-2xl font-serif text-charcoal">Add Sample Customer</h2>
              <p className="text-xs text-charcoal-50 mt-1">
                Adds a realistic customer record to the in-memory telemetry table.
              </p>
            </div>

            <form onSubmit={handleAddCustomerSubmit} className="space-y-4">
              <FormGroup>
                <FormLabel required>Company or Venture Name</FormLabel>
                <Input
                  placeholder="e.g. Acme Quantum Technologies"
                  required
                  value={newCustomer.company}
                  onChange={(e) => setNewCustomer({ ...newCustomer, company: e.target.value })}
                />
              </FormGroup>

              <div className="grid grid-cols-2 gap-4">
                <FormGroup>
                  <FormLabel>Contact Full Name</FormLabel>
                  <Input
                    placeholder="e.g. Sarah Connor"
                    value={newCustomer.name}
                    onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel required>Contact Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="s@acme.internal"
                    required
                    value={newCustomer.email}
                    onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
                  />
                </FormGroup>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormGroup>
                  <FormLabel>Subscription Tier</FormLabel>
                  <Select
                    value={newCustomer.tier}
                    onChange={(e) =>
                      setNewCustomer({
                        ...newCustomer,
                        tier: e.target.value as "Starter" | "Growth" | "Enterprise",
                      })
                    }
                  >
                    <option value="Starter">Starter ($450)</option>
                    <option value="Growth">Growth ($1,500)</option>
                    <option value="Enterprise">Enterprise ($4,800)</option>
                  </Select>
                </FormGroup>

                <FormGroup>
                  <FormLabel>Monthly MRR ($)</FormLabel>
                  <Input
                    type="number"
                    value={newCustomer.mrr}
                    onChange={(e) =>
                      setNewCustomer({ ...newCustomer, mrr: Number(e.target.value) })
                    }
                  />
                </FormGroup>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-end gap-3">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setIsAddModalOpen(false)}
                  className="text-xs font-mono uppercase"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  size="sm"
                  className="text-xs font-mono uppercase tracking-wider"
                >
                  Insert Sample Customer
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Mandatory Discuss Similar Project CTA */}
      <Section spacing="md" theme="surface" divider="top">
        <div className="max-w-4xl mx-auto p-8 sm:p-10 border border-border bg-sand-50/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-burnt font-semibold tracking-wider block">
              Architectural Advisory
            </span>
            <h3 className="font-serif text-2xl text-charcoal">
              Planning a high-density SaaS product?
            </h3>
            <p className="text-xs text-charcoal-50 max-w-lg">
              We design and engineer bespoke software architectures with real-time telemetry, RBAC, and zero UI lag.
            </p>
          </div>

          <Link href="/contact?service=SaaS+development" className="shrink-0">
            <Button variant="primary" size="lg" className="gap-2 text-xs font-mono uppercase tracking-wider px-8">
              <span>Discuss a Similar Project</span>
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
