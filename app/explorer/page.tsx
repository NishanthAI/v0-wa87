"use client"

import { useState } from "react"
import { ArrowRight, ChevronDown, ChevronUp, ExternalLink, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Chart,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartArea,
  ChartLine,
  ChartXAxis,
  ChartYAxis,
  ChartTitle,
  ChartLegend,
} from "@/components/ui/chart"

// Mock data for transactions
const TRANSACTIONS = [
  {
    hash: "0x7d3c...8f92",
    fullHash: "0x7d3c7a3c8d0e6f9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b9c8d7e6f92",
    from: "0x1a2b...3c4d",
    to: "0x5e6f...7g8h",
    value: "1.25 ETH",
    timestamp: "2 mins ago",
    status: "success",
  },
  {
    hash: "0x8e4d...9f03",
    fullHash: "0x8e4d8b7c6a5f4e3d2c1b0a9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b2a1f903",
    from: "0x5e6f...7g8h",
    to: "0x9i0j...1k2l",
    value: "0.5 ETH",
    timestamp: "15 mins ago",
    status: "success",
  },
  {
    hash: "0x9f5e...0g14",
    fullHash: "0x9f5e4d3c2b1a0f9e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b3a2f1e0d9c8b7a14",
    from: "0x3m4n...5o6p",
    to: "0x7q8r...9s0t",
    value: "0.075 ETH",
    timestamp: "32 mins ago",
    status: "success",
  },
  {
    hash: "0x0h6i...1j25",
    fullHash: "0x0h6i5j4k3l2m1n0o9p8q7r6s5t4u3v2w1x0y9z8a7b6c5d4e3f2g1h0i9j25",
    from: "0x1a2b...3c4d",
    to: "0x7q8r...9s0t",
    value: "2.0 ETH",
    timestamp: "45 mins ago",
    status: "success",
  },
  {
    hash: "0x1k7l...2m36",
    fullHash: "0x1k7l6m5n4o3p2q1r0s9t8u7v6w5x4y3z2a1b0c9d8e7f6g5h4i3j2k1l0m36",
    from: "0x9i0j...1k2l",
    to: "0x3m4n...5o6p",
    value: "0.33 ETH",
    timestamp: "1 hour ago",
    status: "failed",
  },
]

// Mock data for blocks
const BLOCKS = [
  {
    number: "18245367",
    hash: "0x2n3o...4p47",
    fullHash: "0x2n3o4p5q6r7s8t9u0v1w2x3y4z5a6b7c8d9e0f1g2h3i4j5k6l7m8n9o0p47",
    timestamp: "1 min ago",
    txCount: 156,
    miner: "0x5e6f...7g8h",
    gasUsed: "12,345,678",
    reward: "2.05 ETH",
  },
  {
    number: "18245366",
    hash: "0x3o4p...5q58",
    fullHash: "0x3o4p5q6r7s8t9u0v1w2x3y4z5a6b7c8d9e0f1g2h3i4j5k6l7m8n9o0p1q58",
    timestamp: "3 mins ago",
    txCount: 142,
    miner: "0x1a2b...3c4d",
    gasUsed: "11,876,543",
    reward: "2.03 ETH",
  },
  {
    number: "18245365",
    hash: "0x4p5q...6r69",
    fullHash: "0x4p5q6r7s8t9u0v1w2x3y4z5a6b7c8d9e0f1g2h3i4j5k6l7m8n9o0p1q2r69",
    timestamp: "5 mins ago",
    txCount: 178,
    miner: "0x9i0j...1k2l",
    gasUsed: "13,567,890",
    reward: "2.12 ETH",
  },
  {
    number: "18245364",
    hash: "0x5q6r...7s70",
    fullHash: "0x5q6r7s8t9u0v1w2x3y4z5a6b7c8d9e0f1g2h3i4j5k6l7m8n9o0p1q2r3s70",
    timestamp: "7 mins ago",
    txCount: 134,
    miner: "0x7q8r...9s0t",
    gasUsed: "10,987,654",
    reward: "2.01 ETH",
  },
  {
    number: "18245363",
    hash: "0x6r7s...8t81",
    fullHash: "0x6r7s8t9u0v1w2x3y4z5a6b7c8d9e0f1g2h3i4j5k6l7m8n9o0p1q2r3s4t81",
    timestamp: "9 mins ago",
    txCount: 165,
    miner: "0x3m4n...5o6p",
    gasUsed: "12,876,543",
    reward: "2.08 ETH",
  },
]

// Mock data for chart
const chartData = [
  { date: "Jan", transactions: 2500, gasPrice: 25 },
  { date: "Feb", transactions: 3000, gasPrice: 28 },
  { date: "Mar", transactions: 2800, gasPrice: 24 },
  { date: "Apr", transactions: 3200, gasPrice: 32 },
  { date: "May", transactions: 3800, gasPrice: 38 },
  { date: "Jun", transactions: 4000, gasPrice: 35 },
  { date: "Jul", transactions: 3700, gasPrice: 30 },
  { date: "Aug", transactions: 4200, gasPrice: 34 },
  { date: "Sep", transactions: 4500, gasPrice: 36 },
  { date: "Oct", transactions: 4800, gasPrice: 40 },
  { date: "Nov", transactions: 5000, gasPrice: 42 },
  { date: "Dec", transactions: 5200, gasPrice: 45 },
]

export default function ExplorerPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [network, setNetwork] = useState("ethereum")
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null })

  const handleSearch = (e) => {
    e.preventDefault()
    // In a real app, this would search for the transaction, block, or address
    console.log("Searching for:", searchQuery)
  }

  const requestSort = (key) => {
    let direction = "ascending"
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending"
    }
    setSortConfig({ key, direction })
  }

  return (
    <div className="container py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Transaction Explorer</h1>
          <p className="text-xl text-muted-foreground">Track blockchain transactions and analytics in real time</p>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 md:flex-row">
        <div className="flex-1">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by transaction hash, block, or address..."
              className="pl-8 pr-20"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" size="sm" className="absolute right-1 top-1 bg-emerald-600 hover:bg-emerald-700">
              Search
            </Button>
          </form>
        </div>
        <div className="w-full md:w-48">
          <Select value={network} onValueChange={setNetwork}>
            <SelectTrigger>
              <SelectValue placeholder="Select network" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ethereum">Ethereum</SelectItem>
              <SelectItem value="polygon">Polygon</SelectItem>
              <SelectItem value="arbitrum">Arbitrum</SelectItem>
              <SelectItem value="optimism">Optimism</SelectItem>
              <SelectItem value="solana">Solana</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Network Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="mr-2 h-3 w-3 rounded-full bg-emerald-500"></div>
              <div className="font-bold">Active</div>
            </div>
            <div className="mt-1 text-xs text-muted-foreground">Last block: 2 seconds ago</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Current Gas Price</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42 Gwei</div>
            <div className="flex items-center text-xs text-emerald-500">
              <ChevronDown className="mr-1 h-4 w-4" />
              8% from yesterday
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Transactions (24h)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2M</div>
            <div className="flex items-center text-xs text-emerald-500">
              <ChevronUp className="mr-1 h-4 w-4" />
              12% from yesterday
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Block Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.4s</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowRight className="mr-1 h-4 w-4" />
              Stable
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Network Activity</CardTitle>
            <CardDescription>Transaction volume and gas prices over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <Chart data={chartData}>
                <ChartContainer>
                  <ChartTitle>Transaction Volume vs Gas Price (2023)</ChartTitle>
                  <ChartLegend />
                  <ChartArea>
                    <ChartLine
                      dataKey="transactions"
                      stroke="#10b981"
                      strokeWidth={2}
                      dot={false}
                      activeDot={{ r: 6 }}
                    />
                    <ChartLine dataKey="gasPrice" stroke="#6366f1" strokeWidth={2} dot={false} activeDot={{ r: 6 }} />
                    <ChartXAxis dataKey="date" />
                    <ChartYAxis />
                    <ChartTooltip>
                      <ChartTooltipContent />
                    </ChartTooltip>
                  </ChartArea>
                </ChartContainer>
              </Chart>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Tabs defaultValue="transactions">
          <TabsList>
            <TabsTrigger value="transactions">Latest Transactions</TabsTrigger>
            <TabsTrigger value="blocks">Latest Blocks</TabsTrigger>
          </TabsList>
          <TabsContent value="transactions" className="mt-6">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[120px]">Tx Hash</TableHead>
                      <TableHead>From</TableHead>
                      <TableHead>To</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {TRANSACTIONS.map((tx) => (
                      <TableRow key={tx.hash}>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <span className="text-emerald-600">{tx.hash}</span>
                            <ExternalLink className="ml-1 h-3 w-3 text-muted-foreground" />
                          </div>
                        </TableCell>
                        <TableCell>{tx.from}</TableCell>
                        <TableCell>{tx.to}</TableCell>
                        <TableCell>{tx.value}</TableCell>
                        <TableCell>{tx.timestamp}</TableCell>
                        <TableCell>
                          <Badge variant={tx.status === "success" ? "outline" : "destructive"} className="capitalize">
                            {tx.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="blocks" className="mt-6">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Block</TableHead>
                      <TableHead>Hash</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Txns</TableHead>
                      <TableHead>Miner</TableHead>
                      <TableHead>Gas Used</TableHead>
                      <TableHead>Reward</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {BLOCKS.map((block) => (
                      <TableRow key={block.hash}>
                        <TableCell className="font-medium text-emerald-600">{block.number}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <span>{block.hash}</span>
                            <ExternalLink className="ml-1 h-3 w-3 text-muted-foreground" />
                          </div>
                        </TableCell>
                        <TableCell>{block.timestamp}</TableCell>
                        <TableCell>{block.txCount}</TableCell>
                        <TableCell>{block.miner}</TableCell>
                        <TableCell>{block.gasUsed}</TableCell>
                        <TableCell>{block.reward}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Transaction Analytics</CardTitle>
            <CardDescription>Advanced metrics and insights</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Average Transaction Fee</span>
                <span className="font-medium">0.0042 ETH</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Pending Transactions</span>
                <span className="font-medium">12,345</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Success Rate (24h)</span>
                <span className="font-medium">99.7%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Average Confirmation Time</span>
                <span className="font-medium">15.2 seconds</span>
              </div>
              <Button variant="outline" className="w-full mt-2">
                View Detailed Analytics
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>API Access</CardTitle>
            <CardDescription>Integrate blockchain data into your applications</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Access real-time blockchain data through our comprehensive API. Perfect for developers building DApps,
              analytics tools, or integrating blockchain data into existing systems.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></div>
                <span>Transaction data</span>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></div>
                <span>Block information</span>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></div>
                <span>Account balances and history</span>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></div>
                <span>Smart contract events</span>
              </div>
            </div>
            <Button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700">Get API Keys</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
