import Link from "next/link"
import { ArrowRight, ChevronRight, Code, Database, Lock, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Blockchain Technology Showcase
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl">
                  Explore specialized applications leveraging blockchain technology across finance, supply chain,
                  identity verification, and more.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/dapps">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    Explore DApps
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/auth/signup">
                  <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] aspect-video overflow-hidden rounded-xl border border-gray-700 bg-gray-800/50 p-2">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-2 w-full h-full p-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-lg border border-emerald-500/30 flex items-center justify-center"
                      >
                        <div
                          className={`w-3 h-3 rounded-full bg-emerald-${300 + i * 50} animate-pulse`}
                          style={{ animationDelay: `${i * 0.1}s` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm dark:bg-emerald-800/30">
                Key Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Explore Blockchain Technology
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our platform provides comprehensive tools and resources to understand and interact with blockchain
                technologies.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <Card className="border-0 shadow-md dark:bg-gray-800/50">
              <CardHeader className="pb-2">
                <Shield className="h-12 w-12 text-emerald-500 mb-2" />
                <CardTitle>Secure Authentication</CardTitle>
                <CardDescription>Robust sign-up, login, and access management system</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our platform implements industry-standard security protocols to ensure your data remains protected.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/auth/signup" className="text-emerald-600 hover:text-emerald-700 text-sm flex items-center">
                  Get started <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardFooter>
            </Card>
            <Card className="border-0 shadow-md dark:bg-gray-800/50">
              <CardHeader className="pb-2">
                <Database className="h-12 w-12 text-emerald-500 mb-2" />
                <CardTitle>Use Case Library</CardTitle>
                <CardDescription>Explore blockchain applications across industries</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Discover how blockchain is transforming finance, supply chain, healthcare, and more with real-world
                  examples.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/use-cases" className="text-emerald-600 hover:text-emerald-700 text-sm flex items-center">
                  Explore use cases <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardFooter>
            </Card>
            <Card className="border-0 shadow-md dark:bg-gray-800/50">
              <CardHeader className="pb-2">
                <Zap className="h-12 w-12 text-emerald-500 mb-2" />
                <CardTitle>DApp Directory</CardTitle>
                <CardDescription>Curated list of decentralized applications</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Browse our comprehensive directory of DApps with detailed descriptions and integration guides.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/dapps" className="text-emerald-600 hover:text-emerald-700 text-sm flex items-center">
                  View directory <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardFooter>
            </Card>
            <Card className="border-0 shadow-md dark:bg-gray-800/50">
              <CardHeader className="pb-2">
                <Lock className="h-12 w-12 text-emerald-500 mb-2" />
                <CardTitle>Smart Contracts</CardTitle>
                <CardDescription>Test and deploy smart contracts</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our platform provides tools to create, test, and deploy smart contracts on various blockchain
                  networks.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="/smart-contracts"
                  className="text-emerald-600 hover:text-emerald-700 text-sm flex items-center"
                >
                  Try it out <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardFooter>
            </Card>
            <Card className="border-0 shadow-md dark:bg-gray-800/50">
              <CardHeader className="pb-2">
                <Code className="h-12 w-12 text-emerald-500 mb-2" />
                <CardTitle>API Integration</CardTitle>
                <CardDescription>Connect with major blockchain networks</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Seamlessly integrate with Ethereum, Solana, Hyperledger, and other blockchain networks for live data.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/api" className="text-emerald-600 hover:text-emerald-700 text-sm flex items-center">
                  View APIs <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardFooter>
            </Card>
            <Card className="border-0 shadow-md dark:bg-gray-800/50">
              <CardHeader className="pb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 text-emerald-500 mb-2"
                >
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" y1="6" x2="6.01" y2="6"></line>
                  <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg>
                <CardTitle>Transaction Explorer</CardTitle>
                <CardDescription>Track blockchain transactions in real time</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Monitor transactions, analyze patterns, and gain insights with our powerful blockchain explorer.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/explorer" className="text-emerald-600 hover:text-emerald-700 text-sm flex items-center">
                  Explore transactions <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-emerald-50 dark:bg-emerald-900/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Explore Blockchain?
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Sign up today and gain access to our comprehensive blockchain technology platform.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/auth/signup">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/use-cases">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
