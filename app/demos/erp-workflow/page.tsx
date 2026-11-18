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
  Search,
  CheckSquare,
  Square,
  Layers,
  RotateCcw,
  Plus,
  Package,
  Truck,
  DollarSign,
  Building,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileText,
  Boxes,
  ArrowRight,
  Shield,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

type OrderStatus =
  | "Pending Approval"
  | "Processing"
  | "Picking & Packing"
  | "Dispatched"
  | "Invoiced"
  | "Settled";

interface OrderItem {
  id: string;
  customer: string;
  hub: "North (Chicago)" | "Central (Frankfurt)" | "East (Tokyo)";
  items: { sku: string; name: string; qty: number; unitPrice: number }[];
  totalValue: number;
  priority: "Standard" | "Express" | "Critical";
  status: OrderStatus;
  orderDate: string;
  trackingNumber: string;
}

interface SkuInventory {
  sku: string;
  name: string;
  hub: string;
  onHand: number;
  allocated: number;
  reorderPoint: number;
  status: "Optimal" | "Low Buffer" | "Critical";
}

const INITIAL_ORDERS: OrderItem[] = [
  {
    id: "ORD-8812",
    customer: "Vance Bio Labs",
    hub: "North (Chicago)",
    items: [
      { sku: "SKU-9921-A", name: "Titanium Alloy Rod 40mm", qty: 24, unitPrice: 180 },
      { sku: "SKU-7734-M", name: "Thermal Heat Sink Basalt", qty: 10, unitPrice: 320 },
    ],
    totalValue: 7520,
    priority: "Critical",
    status: "Picking & Packing",
    orderDate: "2024-11-18",
    trackingNumber: "TRK-FEDEX-9921",
  },
  {
    id: "ORD-8813",
    customer: "Strata Global Asset Core",
    hub: "Central (Frankfurt)",
    items: [
      { sku: "SKU-8832-C", name: "Micro-Hydraulic Valve v3", qty: 4, unitPrice: 620 },
      { sku: "SKU-4412-K", name: "Graphite Seal Rings (Pack 100)", qty: 8, unitPrice: 95 },
    ],
    totalValue: 3240,
    priority: "Express",
    status: "Processing",
    orderDate: "2024-11-18",
    trackingNumber: "TRK-DHL-4421",
  },
  {
    id: "ORD-8814",
    customer: "Hyperion Robotics AG",
    hub: "East (Tokyo)",
    items: [
      { sku: "SKU-1029-X", name: "Optic Fiber Conduit 200m", qty: 15, unitPrice: 420 },
    ],
    totalValue: 6300,
    priority: "Standard",
    status: "Dispatched",
    orderDate: "2024-11-17",
    trackingNumber: "TRK-YAMATO-8801",
  },
  {
    id: "ORD-8815",
    customer: "Kavach Defense Systems",
    hub: "North (Chicago)",
    items: [
      { sku: "SKU-9921-A", name: "Titanium Alloy Rod 40mm", qty: 50, unitPrice: 180 },
    ],
    totalValue: 9000,
    priority: "Critical",
    status: "Pending Approval",
    orderDate: "2024-11-18",
    trackingNumber: "Pending Release",
  },
  {
    id: "ORD-8816",
    customer: "Lumiere Logistics",
    hub: "Central (Frankfurt)",
    items: [
      { sku: "SKU-7734-M", name: "Thermal Heat Sink Basalt", qty: 5, unitPrice: 320 },
    ],
    totalValue: 1600,
    priority: "Standard",
    status: "Invoiced",
    orderDate: "2024-11-16",
    trackingNumber: "TRK-DHL-1190",
  },
  {
    id: "ORD-8817",
    customer: "Nordic Monolith Practice",
    hub: "East (Tokyo)",
    items: [
      { sku: "SKU-4412-K", name: "Graphite Seal Rings (Pack 100)", qty: 20, unitPrice: 95 },
    ],
    totalValue: 1900,
    priority: "Standard",
    status: "Settled",
    orderDate: "2024-11-15",
    trackingNumber: "TRK-SAGAWA-5542",
  },
];

const INITIAL_INVENTORY: SkuInventory[] = [
  {
    sku: "SKU-9921-A",
    name: "Titanium Alloy Rod 40mm",
    hub: "North (Chicago)",
    onHand: 1420,
    allocated: 380,
    reorderPoint: 500,
    status: "Optimal",
  },
  {
    sku: "SKU-8832-C",
    name: "Micro-Hydraulic Valve v3",
    hub: "Central (Frankfurt)",
    onHand: 84,
    allocated: 80,
    reorderPoint: 100,
    status: "Low Buffer",
  },
  {
    sku: "SKU-4412-K",
    name: "Graphite Seal Rings (Pack 100)",
    hub: "East (Tokyo)",
    onHand: 3200,
    allocated: 120,
    reorderPoint: 800,
    status: "Optimal",
  },
  {
    sku: "SKU-1029-X",
    name: "Optic Fiber Conduit 200m",
    hub: "North (Chicago)",
    onHand: 410,
    allocated: 410,
    reorderPoint: 300,
    status: "Low Buffer",
  },
  {
    sku: "SKU-7734-M",
    name: "Thermal Heat Sink Basalt",
    hub: "Central (Frankfurt)",
    onHand: 890,
    allocated: 210,
    reorderPoint: 250,
    status: "Optimal",
  },
];

const WORKFLOW_SEQUENCE: OrderStatus[] = [
  "Pending Approval",
  "Processing",
  "Picking & Packing",
  "Dispatched",
  "Invoiced",
  "Settled",
];

export default function ErpWorkflowDemo() {
  const [activeTab, setActiveTab] = useState<"orders" | "inventory" | "finance">("orders");
  const [orders, setOrders] = useState<OrderItem[]>(INITIAL_ORDERS);
  const [inventory, setInventory] = useState<SkuInventory[]>(INITIAL_INVENTORY);
  const [searchQuery, setSearchQuery] = useState("");
  const [hubFilter, setHubFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedOrder, setSelectedOrder] = useState<OrderItem | null>(null);
  const [isNewOrderModalOpen, setIsNewOrderModalOpen] = useState(false);

  // New Order Form State
  const [newOrderForm, setNewOrderForm] = useState({
    customer: "",
    hub: "North (Chicago)" as OrderItem["hub"],
    sku: "SKU-9921-A",
    qty: 10,
    priority: "Express" as OrderItem["priority"],
  });

  // Advance Order Lifecycle Workflow
  const handleAdvanceStatus = (id: string) => {
    setOrders((prev) =>
      prev.map((ord) => {
        if (ord.id !== id) return ord;
        const currentIdx = WORKFLOW_SEQUENCE.indexOf(ord.status);
        if (currentIdx < WORKFLOW_SEQUENCE.length - 1) {
          const nextStatus = WORKFLOW_SEQUENCE[currentIdx + 1];
          return { ...ord, status: nextStatus };
        }
        return ord;
      })
    );
    if (selectedOrder && selectedOrder.id === id) {
      const currentIdx = WORKFLOW_SEQUENCE.indexOf(selectedOrder.status);
      if (currentIdx < WORKFLOW_SEQUENCE.length - 1) {
        setSelectedOrder((prev) =>
          prev ? { ...prev, status: WORKFLOW_SEQUENCE[currentIdx + 1] } : null
        );
      }
    }
  };

  const handleManualStatusChange = (id: string, status: OrderStatus) => {
    setOrders((prev) => prev.map((ord) => (ord.id === id ? { ...ord, status } : ord)));
    if (selectedOrder && selectedOrder.id === id) {
      setSelectedOrder((prev) => (prev ? { ...prev, status } : null));
    }
  };

  const handleReplenishSku = (sku: string) => {
    setInventory((prev) =>
      prev.map((item) =>
        item.sku === sku
          ? { ...item, onHand: item.onHand + 500, status: "Optimal" }
          : item
      )
    );
  };

  const handleCreateOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newOrderForm.customer) return;

    const matchedSku = inventory.find((i) => i.sku === newOrderForm.sku);
    const unitPrice = 180;
    const totalVal = (Number(newOrderForm.qty) || 1) * unitPrice;

    const newRecord: OrderItem = {
      id: `ORD-${Math.floor(8900 + Math.random() * 1000)}`,
      customer: newOrderForm.customer,
      hub: newOrderForm.hub,
      items: [
        {
          sku: newOrderForm.sku,
          name: matchedSku ? matchedSku.name : "Custom Industrial Component",
          qty: Number(newOrderForm.qty) || 1,
          unitPrice,
        },
      ],
      totalValue: totalVal,
      priority: newOrderForm.priority,
      status: "Pending Approval",
      orderDate: new Date().toISOString().split("T")[0],
      trackingNumber: `TRK-EXPRESS-${Math.floor(1000 + Math.random() * 9000)}`,
    };

    setOrders([newRecord, ...orders]);
    setIsNewOrderModalOpen(false);
    setNewOrderForm({
      customer: "",
      hub: "North (Chicago)",
      sku: "SKU-9921-A",
      qty: 10,
      priority: "Express",
    });
  };

  const handleResetDemo = () => {
    setOrders(INITIAL_ORDERS);
    setInventory(INITIAL_INVENTORY);
    setSearchQuery("");
    setHubFilter("All");
    setStatusFilter("All");
    setSelectedOrder(null);
  };

  // Filtered orders
  const filteredOrders = orders.filter((o) => {
    const matchesSearch =
      o.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.items.some((i) => i.name.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesHub = hubFilter === "All" || o.hub.includes(hubFilter);
    const matchesStatus = statusFilter === "All" || o.status === statusFilter;
    return matchesSearch && matchesHub && matchesStatus;
  });

  const totalOrdersValue = orders.reduce((sum, o) => sum + o.totalValue, 0);
  const activeInFlight = orders.filter(
    (o) => o.status !== "Settled" && o.status !== "Invoiced"
  ).length;

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
              Interactive Demo — Sample Operations Data
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={handleResetDemo}
              className="gap-1.5 text-xs font-mono uppercase"
            >
              <RotateCcw className="h-3.5 w-3.5 text-charcoal-50" />
              <span>Reset State</span>
            </Button>
          </div>
        </div>
      </Section>

      <Section spacing="md" theme="sand">
        <div className="border border-border bg-surface shadow-subtle">
          {/* Internal Application Header */}
          <div className="p-6 bg-charcoal text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-charcoal-200">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono uppercase text-burnt tracking-widest font-semibold">
                  Demo 03 • Enterprise ERP
                </span>
                <span className="text-charcoal-200">•</span>
                <span className="text-xs font-mono text-sand/80">
                  Operations &amp; Warehouse Dispatch Matrix
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-serif text-white tracking-tight mt-1">
                Order Fulfillment, Multi-Hub Inventory &amp; Ledger
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="primary"
                size="sm"
                onClick={() => setIsNewOrderModalOpen(true)}
                className="gap-1.5 text-xs font-mono uppercase tracking-wider"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Create Sample Order</span>
              </Button>
            </div>
          </div>

          {/* Horizontal Nav Bar */}
          <div className="flex items-center justify-between px-6 py-2.5 bg-sand-50 border-b border-border overflow-x-auto">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab("orders")}
                className={cn(
                  "px-3.5 py-1.5 text-xs font-mono uppercase transition-all flex items-center gap-1.5 border",
                  activeTab === "orders"
                    ? "bg-surface border-border text-charcoal font-semibold shadow-subtle"
                    : "border-transparent text-charcoal-50 hover:text-charcoal"
                )}
              >
                <Package className="h-3.5 w-3.5 text-burnt" />
                <span>Order Dispatch Lifecycle ({orders.length})</span>
              </button>

              <button
                onClick={() => setActiveTab("inventory")}
                className={cn(
                  "px-3.5 py-1.5 text-xs font-mono uppercase transition-all flex items-center gap-1.5 border",
                  activeTab === "inventory"
                    ? "bg-surface border-border text-charcoal font-semibold shadow-subtle"
                    : "border-transparent text-charcoal-50 hover:text-charcoal"
                )}
              >
                <Boxes className="h-3.5 w-3.5 text-burnt" />
                <span>Warehouse Matrix ({inventory.length} SKUs)</span>
              </button>

              <button
                onClick={() => setActiveTab("finance")}
                className={cn(
                  "px-3.5 py-1.5 text-xs font-mono uppercase transition-all flex items-center gap-1.5 border",
                  activeTab === "finance"
                    ? "bg-surface border-border text-charcoal font-semibold shadow-subtle"
                    : "border-transparent text-charcoal-50 hover:text-charcoal"
                )}
              >
                <DollarSign className="h-3.5 w-3.5 text-burnt" />
                <span>Financial Reconciliation</span>
              </button>
            </div>

            <span className="text-xs font-mono text-charcoal-50 hidden md:block">
              Event-Driven Double Entry Ledger
            </span>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* KPI Ticker */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 border border-border bg-sand-50/60 space-y-2">
                <span className="text-[10px] font-mono uppercase text-charcoal-50 tracking-wider block">
                  Total Order Value
                </span>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-charcoal block">
                  ${totalOrdersValue.toLocaleString()}
                </span>
                <span className="text-[11px] font-mono text-emerald-700">
                  Across 3 Distribution Hubs
                </span>
              </div>

              <div className="p-5 border border-border bg-sand-50/60 space-y-2">
                <span className="text-[10px] font-mono uppercase text-charcoal-50 tracking-wider block">
                  Orders in Flight
                </span>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-charcoal block">
                  {activeInFlight} Active
                </span>
                <span className="text-[11px] font-mono text-burnt">
                  {orders.filter((o) => o.priority === "Critical").length} Critical Priority
                </span>
              </div>

              <div className="p-5 border border-border bg-sand-50/60 space-y-2">
                <span className="text-[10px] font-mono uppercase text-charcoal-50 tracking-wider block">
                  On-Time Dispatch SLA
                </span>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-charcoal block">
                  99.4%
                </span>
                <span className="text-[11px] font-mono text-emerald-700">
                  Sub-4hr picking turnaround
                </span>
              </div>

              <div className="p-5 border border-border bg-sand-50/60 space-y-2">
                <span className="text-[10px] font-mono uppercase text-charcoal-50 tracking-wider block">
                  Three-Way Invoicing Match
                </span>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-charcoal block">
                  100% Verified
                </span>
                <span className="text-[11px] font-mono text-charcoal-50">
                  Zero ledger discrepancy
                </span>
              </div>
            </div>

            {/* TAB 1: ORDER DISPATCH LIFECYCLE */}
            {activeTab === "orders" && (
              <div className="space-y-6">
                {/* Search & Filter Header */}
                <div className="p-4 bg-sand-50 border border-border flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="relative w-full md:w-80">
                    <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-charcoal-50" />
                    <Input
                      placeholder="Search order ID, client, or item..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-9 text-xs"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase text-charcoal-50">Hub:</span>
                      <Select
                        value={hubFilter}
                        onChange={(e) => setHubFilter(e.target.value)}
                        className="text-xs h-8 py-0"
                      >
                        <option value="All">All Hubs</option>
                        <option value="Chicago">Chicago Hub</option>
                        <option value="Frankfurt">Frankfurt Hub</option>
                        <option value="Tokyo">Tokyo Hub</option>
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
                        {WORKFLOW_SEQUENCE.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Main Orders Table */}
                <div className="border border-border bg-surface overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-sand-50 border-b border-border text-charcoal-50 text-[10px] uppercase">
                      <tr>
                        <th className="p-3">Order Identifier</th>
                        <th className="p-3">Client Entity</th>
                        <th className="p-3">Fulfillment Hub</th>
                        <th className="p-3 text-right">Order Value</th>
                        <th className="p-3">Priority</th>
                        <th className="p-3">Lifecycle State</th>
                        <th className="p-3 text-right">Workflow Transition</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {filteredOrders.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="p-8 text-center text-charcoal-50">
                            No orders match your filter query.
                          </td>
                        </tr>
                      ) : (
                        filteredOrders.map((ord) => {
                          const currentStepIdx = WORKFLOW_SEQUENCE.indexOf(ord.status);
                          const canAdvance = currentStepIdx < WORKFLOW_SEQUENCE.length - 1;
                          const nextStatusName = canAdvance ? WORKFLOW_SEQUENCE[currentStepIdx + 1] : null;

                          return (
                            <tr key={ord.id} className="hover:bg-sand-50/40 transition-colors">
                              <td className="p-3">
                                <span className="font-semibold text-burnt block">{ord.id}</span>
                                <span className="text-[10px] text-charcoal-50">{ord.orderDate}</span>
                              </td>
                              <td className="p-3">
                                <span className="font-medium text-charcoal block">{ord.customer}</span>
                                <span className="text-[10px] text-charcoal-50">
                                  {ord.items.length} line items
                                </span>
                              </td>
                              <td className="p-3 text-charcoal-50">{ord.hub}</td>
                              <td className="p-3 text-right font-semibold text-charcoal">
                                ${ord.totalValue.toLocaleString()}
                              </td>
                              <td className="p-3">
                                <span
                                  className={cn(
                                    "px-2 py-0.5 text-[10px] border uppercase",
                                    ord.priority === "Critical" &&
                                      "border-red-400 text-red-800 bg-red-50",
                                    ord.priority === "Express" &&
                                      "border-amber-400 text-amber-800 bg-amber-50",
                                    ord.priority === "Standard" &&
                                      "border-border text-charcoal-50 bg-sand-100"
                                  )}
                                >
                                  {ord.priority}
                                </span>
                              </td>
                              <td className="p-3">
                                <span
                                  className={cn(
                                    "px-2 py-0.5 text-[10px] font-semibold border uppercase",
                                    ord.status === "Pending Approval" && "border-amber-300 bg-amber-50 text-amber-800",
                                    ord.status === "Processing" && "border-blue-300 bg-blue-50 text-blue-800",
                                    ord.status === "Picking & Packing" && "border-purple-300 bg-purple-50 text-purple-800",
                                    ord.status === "Dispatched" && "border-emerald-300 bg-emerald-50 text-emerald-800",
                                    ord.status === "Invoiced" && "border-charcoal-200 bg-sand-100 text-charcoal",
                                    ord.status === "Settled" && "border-emerald-500 bg-emerald-100 text-emerald-900"
                                  )}
                                >
                                  {ord.status}
                                </span>
                              </td>
                              <td className="p-3 text-right space-x-2">
                                {canAdvance && (
                                  <button
                                    onClick={() => handleAdvanceStatus(ord.id)}
                                    className="px-2.5 py-1 text-[11px] font-mono uppercase bg-burnt text-white hover:bg-burnt-dark transition-colors inline-flex items-center gap-1 shadow-subtle"
                                    title={`Transition to ${nextStatusName}`}
                                  >
                                    <span>Advance</span>
                                    <ArrowRight className="h-3 w-3" />
                                  </button>
                                )}
                                <button
                                  onClick={() => setSelectedOrder(ord)}
                                  className="text-burnt hover:underline text-xs"
                                >
                                  Inspect
                                </button>
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 2: WAREHOUSE & PRODUCT INVENTORY */}
            {activeTab === "inventory" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-lg text-charcoal">
                      Multi-Hub SKU Physical Inventory &amp; Bin Reserves
                    </h3>
                    <p className="text-xs text-charcoal-50">
                      Real-time inventory levels across regional fulfillment centers with automated replenishment alerts.
                    </p>
                  </div>
                  <Badge variant="outline" className="font-mono text-[10px]">
                    Optimistic Lock Engine Active
                  </Badge>
                </div>

                <div className="border border-border bg-surface overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-sand-50 border-b border-border text-charcoal-50 text-[10px] uppercase">
                      <tr>
                        <th className="p-3">SKU Identifier</th>
                        <th className="p-3">Description</th>
                        <th className="p-3">Facility Hub</th>
                        <th className="p-3 text-right">Physical On-Hand</th>
                        <th className="p-3 text-right">Allocated in Flight</th>
                        <th className="p-3">Buffer Health</th>
                        <th className="p-3 text-right">Replenishment Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {inventory.map((item) => (
                        <tr key={item.sku} className="hover:bg-sand-50/40 transition-colors">
                          <td className="p-3 font-semibold text-burnt">{item.sku}</td>
                          <td className="p-3 font-medium text-charcoal">{item.name}</td>
                          <td className="p-3 text-charcoal-50">{item.hub}</td>
                          <td className="p-3 text-right font-bold text-charcoal">
                            {item.onHand.toLocaleString()} units
                          </td>
                          <td className="p-3 text-right text-charcoal-50">
                            {item.allocated.toLocaleString()} units
                          </td>
                          <td className="p-3">
                            <span
                              className={cn(
                                "px-2 py-0.5 text-[10px] border uppercase",
                                item.status === "Optimal" &&
                                  "border-emerald-300 bg-emerald-50 text-emerald-800",
                                item.status === "Low Buffer" &&
                                  "border-amber-300 bg-amber-50 text-amber-800",
                                item.status === "Critical" &&
                                  "border-red-300 bg-red-50 text-red-800"
                              )}
                            >
                              {item.status}
                            </span>
                          </td>
                          <td className="p-3 text-right">
                            <button
                              onClick={() => handleReplenishSku(item.sku)}
                              className="px-2.5 py-1 text-[10px] font-mono uppercase bg-sand-100 hover:bg-burnt hover:text-white border border-border transition-colors"
                            >
                              +500 Restock
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 3: FINANCIAL RECONCILIATION */}
            {activeTab === "finance" && (
              <div className="space-y-6">
                <div className="p-6 border border-border bg-sand-50/50 space-y-4">
                  <span className="text-xs font-mono uppercase text-burnt font-semibold block">
                    Audit Verification &amp; Invoicing
                  </span>
                  <h3 className="font-serif text-xl text-charcoal">
                    Three-Way PO Matching Ledger Status
                  </h3>
                  <p className="text-xs text-charcoal-50 max-w-2xl">
                    Every order undergoes cryptographic three-way tolerance matching before invoicing releases.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                    <div className="p-4 bg-surface border border-border space-y-1">
                      <span className="text-[10px] font-mono uppercase text-charcoal-50 block">
                        Pending Fulfillment Invoices
                      </span>
                      <span className="text-2xl font-serif font-bold text-charcoal block">
                        $
                        {orders
                          .filter((o) => o.status === "Invoiced")
                          .reduce((s, o) => s + o.totalValue, 0)
                          .toLocaleString()}
                      </span>
                      <span className="text-[11px] font-mono text-amber-700">
                        Net 30 Payment Terms
                      </span>
                    </div>

                    <div className="p-4 bg-surface border border-border space-y-1">
                      <span className="text-[10px] font-mono uppercase text-charcoal-50 block">
                        Settled &amp; Paid (This Cycle)
                      </span>
                      <span className="text-2xl font-serif font-bold text-emerald-700 block">
                        $
                        {orders
                          .filter((o) => o.status === "Settled")
                          .reduce((s, o) => s + o.totalValue, 0)
                          .toLocaleString()}
                      </span>
                      <span className="text-[11px] font-mono text-emerald-700">
                        Zero Outstanding Variance
                      </span>
                    </div>

                    <div className="p-4 bg-surface border border-border space-y-1">
                      <span className="text-[10px] font-mono uppercase text-charcoal-50 block">
                        Audit Compliance Score
                      </span>
                      <span className="text-2xl font-serif font-bold text-charcoal block">
                        100%
                      </span>
                      <span className="text-[11px] font-mono text-charcoal-50">
                        SOX / SOC-2 Ledger Schema
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Order Inspection Drawer */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 bg-charcoal/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-surface border border-border max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-elevated animate-fade-in relative">
            <button
              onClick={() => setSelectedOrder(null)}
              className="absolute top-6 right-6 text-charcoal-50 hover:text-charcoal p-1"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-burnt font-semibold tracking-wider block">
                Order Specification &amp; Manifest
              </span>
              <h2 className="text-2xl font-serif text-charcoal">
                {selectedOrder.id} • {selectedOrder.customer}
              </h2>
              <span className="text-xs font-mono text-charcoal-50">
                Fulfillment Node: {selectedOrder.hub} • Date: {selectedOrder.orderDate}
              </span>
            </div>

            <div className="space-y-4 pt-2 border-t border-border text-xs font-mono">
              <div className="space-y-2">
                <span className="text-[10px] uppercase text-charcoal-50 block font-semibold">
                  Manifest Line Items
                </span>
                <div className="border border-border bg-sand-50 divide-y divide-border">
                  {selectedOrder.items.map((item) => (
                    <div key={item.sku} className="p-3 flex justify-between items-center">
                      <div>
                        <strong className="text-charcoal block">{item.name}</strong>
                        <span className="text-[10px] text-charcoal-50">{item.sku}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-charcoal font-bold">
                          {item.qty} × ${item.unitPrice}
                        </span>
                        <span className="text-[10px] text-charcoal-50 block">
                          ${(item.qty * item.unitPrice).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-charcoal-50">Tracking Carrier Code:</span>
                <span className="text-charcoal font-semibold">{selectedOrder.trackingNumber}</span>
              </div>

              {/* Status Switcher in Drawer */}
              <div className="pt-2">
                <FormLabel>Manual Lifecycle Override</FormLabel>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  {WORKFLOW_SEQUENCE.map((st) => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => handleManualStatusChange(selectedOrder.id, st)}
                      className={cn(
                        "py-1.5 px-2 text-[10px] font-mono uppercase border transition-colors text-left",
                        selectedOrder.status === st
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

            <div className="pt-4 border-t border-border flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-charcoal">
                Total: ${selectedOrder.totalValue.toLocaleString()}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedOrder(null)}
                className="text-xs font-mono uppercase"
              >
                Close Manifest
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Create Sample Order Modal */}
      {isNewOrderModalOpen && (
        <div className="fixed inset-0 z-50 bg-charcoal/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-surface border border-border max-w-md w-full p-6 sm:p-8 space-y-6 shadow-elevated animate-fade-in relative">
            <button
              onClick={() => setIsNewOrderModalOpen(false)}
              className="absolute top-6 right-6 text-charcoal-50 hover:text-charcoal p-1"
            >
              <X className="h-5 w-5" />
            </button>

            <div>
              <span className="text-xs font-mono uppercase text-burnt font-semibold tracking-wider block">
                Interactive State Simulation
              </span>
              <h2 className="text-2xl font-serif text-charcoal">Create Sample Order</h2>
              <p className="text-xs text-charcoal-50 mt-1">
                Dispatches a simulated procurement order into the active fulfillment ledger.
              </p>
            </div>

            <form onSubmit={handleCreateOrderSubmit} className="space-y-4">
              <FormGroup>
                <FormLabel required>Customer Organization</FormLabel>
                <Input
                  placeholder="e.g. Helix Robotics Labs"
                  required
                  value={newOrderForm.customer}
                  onChange={(e) =>
                    setNewOrderForm({ ...newOrderForm, customer: e.target.value })
                  }
                />
              </FormGroup>

              <div className="grid grid-cols-2 gap-4">
                <FormGroup>
                  <FormLabel>Fulfillment Hub</FormLabel>
                  <Select
                    value={newOrderForm.hub}
                    onChange={(e) =>
                      setNewOrderForm({
                        ...newOrderForm,
                        hub: e.target.value as OrderItem["hub"],
                      })
                    }
                  >
                    <option value="North (Chicago)">North (Chicago)</option>
                    <option value="Central (Frankfurt)">Central (Frankfurt)</option>
                    <option value="East (Tokyo)">East (Tokyo)</option>
                  </Select>
                </FormGroup>

                <FormGroup>
                  <FormLabel>Priority Tier</FormLabel>
                  <Select
                    value={newOrderForm.priority}
                    onChange={(e) =>
                      setNewOrderForm({
                        ...newOrderForm,
                        priority: e.target.value as OrderItem["priority"],
                      })
                    }
                  >
                    <option value="Standard">Standard</option>
                    <option value="Express">Express</option>
                    <option value="Critical">Critical</option>
                  </Select>
                </FormGroup>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormGroup>
                  <FormLabel>Select SKU</FormLabel>
                  <Select
                    value={newOrderForm.sku}
                    onChange={(e) =>
                      setNewOrderForm({ ...newOrderForm, sku: e.target.value })
                    }
                  >
                    {inventory.map((inv) => (
                      <option key={inv.sku} value={inv.sku}>
                        {inv.sku} ({inv.name})
                      </option>
                    ))}
                  </Select>
                </FormGroup>

                <FormGroup>
                  <FormLabel>Quantity</FormLabel>
                  <Input
                    type="number"
                    min={1}
                    value={newOrderForm.qty}
                    onChange={(e) =>
                      setNewOrderForm({ ...newOrderForm, qty: Number(e.target.value) })
                    }
                  />
                </FormGroup>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-end gap-3">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setIsNewOrderModalOpen(false)}
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
                  Dispatch to Ledger
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
              Enterprise Engineering
            </span>
            <h3 className="font-serif text-2xl text-charcoal">
              Building custom ERP or supply chain operations?
            </h3>
            <p className="text-xs text-charcoal-50 max-w-lg">
              We engineer mission-critical enterprise systems with TanStack virtualization, distributed locks, and automated audit trails.
            </p>
          </div>

          <Link href="/contact?service=ERP+and+CRM+systems" className="shrink-0">
            <Button
              variant="primary"
              size="lg"
              className="gap-2 text-xs font-mono uppercase tracking-wider px-8"
            >
              <span>Discuss a Similar Project</span>
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
