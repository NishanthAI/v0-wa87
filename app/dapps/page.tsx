"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ExternalLink, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

// Mock data for DApps
const DAPPS = [
  {
    id: 1,
    name: "UniSwap",
    description: "Decentralized trading protocol for automated liquidity provision on Ethereum.",
    category: "DeFi",
    blockchain: "Ethereum",
    image: "/placeholder.svg?height=200&width=200",
    url: "https://uniswap.org",
    users: "2.5M+",
    tvl: "$5.8B",
  },
  {
    id: 2,
    name: "Aave",
    description: "Open source liquidity protocol for earning interest on deposits and borrowing assets.",
    category: "DeFi",
    blockchain: "Ethereum",
    image: "/placeholder.svg?height=200&width=200",
    url: "https://aave.com",
    users: "1.2M+",
    tvl: "$6.2B",
  },
  {
    id: 3,
    name: "Axie Infinity",
    description: "Blockchain-based game where players collect, breed, and battle fantasy creatures called Axies.",
    category: "Gaming",
    blockchain: "Ethereum/Ronin",
    image: "/placeholder.svg?height=200&width=200",
    url: "https://axieinfinity.com",
    users: "3M+",
    tvl: "$1.2B",
  },
  {
    id: 4,
    name: "Lens Protocol",
    description: "Decentralized social graph that allows creators to own their content and connections.",
    category: "Social",
    blockchain: "Polygon",
    image: "/placeholder.svg?height=200&width=200",
    url: "https://lens.xyz",
    users: "500K+",
    tvl: "N/A",
  },
  {
    id: 5,
    name: "Arweave",
    description: "Decentralized storage network that allows users to store data permanently.",
    category: "Storage",
    blockchain: "Arweave",
    image: "/placeholder.svg?height=200&width=200",
    url: "https://arweave.org",
    users: "800K+",
    tvl: "N/A",
  },
  {
    id: 6,
    name: "Compound",
    description: "Algorithmic, autonomous interest rate protocol built for developers.",
    category: "DeFi",
    blockchain: "Ethereum",
    image: "/placeholder.svg?height=200&width=200",
    url: "https://compound.finance",
    users: "950K+",
    tvl: "$3.1B",
  },
  {
    id: 7,
    name: "Decentraland",
    description:
      "Virtual reality platform powered by the Ethereum blockchain where users can create, experience, and monetize content and applications.",
    category: "Metaverse",
    blockchain: "Ethereum",
    image: "/placeholder.svg?height=200&width=200",
    url: "https://decentraland.org",
    users: "1.8M+",
    tvl: "$800M",
  },
  {
    id: 8,
    name: "Chainlink",
    description: "Decentralized oracle network that enables smart contracts to securely interact with real-world data.",
    category: "Infrastructure",
    blockchain: "Multiple",
    image: "/placeholder.svg?height=200&width=200",
    url: "https://chain.link",
    users: "1.5M+",
    tvl: "N/A",
  },
  {
    id: 9,
    name: "Audius",
    description: "Decentralized music streaming platform that connects fans directly with artists.",
    category: "Media",
    blockchain: "Solana",
    image: "/placeholder.svg?height=200&width=200",
    url: "https://audius.co",
    users: "7M+",
    tvl: "N/A",
  },
]

const CATEGORIES = ["All", "DeFi", "Gaming", "Social", "Storage", "Metaverse", "Infrastructure", "Media"]
const BLOCKCHAINS = ["All", "Ethereum", "Solana", "Polygon", "Multiple", "Arweave", "Ethereum/Ronin"]

export default function DAppsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("All")
  const [blockchainFilter, setBlockchainFilter] = useState("All")

  const filteredDApps = DAPPS.filter((dapp) => {
    const matchesSearch =
      dapp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dapp.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "All" || dapp.category === categoryFilter
    const matchesBlockchain = blockchainFilter === "All" || dapp.blockchain.includes(blockchainFilter)

    return matchesSearch && matchesCategory && matchesBlockchain
  })

  return (
    <div className="container py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">DApp Directory</h1>
          <p className="text-xl text-muted-foreground">Explore our curated collection of decentralized applications</p>
        </div>
      </div>

      <div className="my-8 grid gap-4 md:grid-cols-3">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search DApps..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            {CATEGORIES.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={blockchainFilter} onValueChange={setBlockchainFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by blockchain" />
          </SelectTrigger>
          <SelectContent>
            {BLOCKCHAINS.map((blockchain) => (
              <SelectItem key={blockchain} value={blockchain}>
                {blockchain}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredDApps.map((dapp) => (
          <Card key={dapp.id} className="overflow-hidden">
            <div className="flex items-center justify-center p-6 bg-muted/30">
              <Image
                src={dapp.image || "/placeholder.svg"}
                alt={dapp.name}
                width={100}
                height={100}
                className="rounded-lg"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{dapp.name}</CardTitle>
                <Badge variant="outline" className="ml-2">
                  {dapp.category}
                </Badge>
              </div>
              <CardDescription>{dapp.blockchain}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{dapp.description}</p>
              <div className="flex justify-between text-sm">
                <div>
                  <span className="font-medium">Users:</span> {dapp.users}
                </div>
                {dapp.tvl !== "N/A" && (
                  <div>
                    <span className="font-medium">TVL:</span> {dapp.tvl}
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link
                href={`/dapps/${dapp.id}`}
                className="text-emerald-600 hover:text-emerald-700 text-sm flex items-center"
              >
                View details <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
              <a
                href={dapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm flex items-center text-muted-foreground hover:text-foreground"
              >
                Visit <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredDApps.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium mb-2">No DApps found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filters</p>
        </div>
      )}

      <div className="mt-16 rounded-lg bg-muted p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Submit Your DApp</h2>
            <p className="text-muted-foreground max-w-md">
              Have you developed a decentralized application? Submit it to our directory for review.
            </p>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">Submit DApp</Button>
        </div>
      </div>
    </div>
  )
}
