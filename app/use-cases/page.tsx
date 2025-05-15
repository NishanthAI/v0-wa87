import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function UseCasesPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Blockchain Use Cases</h1>
          <p className="text-xl text-muted-foreground">
            Explore how blockchain technology is transforming various industries
          </p>
        </div>
      </div>

      <Tabs defaultValue="finance" className="mt-8">
        <TabsList className="w-full justify-start overflow-auto py-4">
          <TabsTrigger value="finance">Finance</TabsTrigger>
          <TabsTrigger value="supply-chain">Supply Chain</TabsTrigger>
          <TabsTrigger value="identity">Identity</TabsTrigger>
          <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
          <TabsTrigger value="real-estate">Real Estate</TabsTrigger>
        </TabsList>

        <TabsContent value="finance" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <UseCaseCard
              title="Decentralized Finance (DeFi)"
              description="Financial services without intermediaries, offering lending, borrowing, and trading through smart contracts."
              image="/placeholder.svg?height=200&width=300"
              link="/use-cases/finance/defi"
            />
            <UseCaseCard
              title="Cross-Border Payments"
              description="Fast, low-cost international transfers without traditional banking delays and fees."
              image="/placeholder.svg?height=200&width=300"
              link="/use-cases/finance/payments"
            />
            <UseCaseCard
              title="Asset Tokenization"
              description="Converting real-world assets into digital tokens for fractional ownership and trading."
              image="/placeholder.svg?height=200&width=300"
              link="/use-cases/finance/tokenization"
            />
            <UseCaseCard
              title="Insurance"
              description="Automated claims processing and risk assessment through smart contracts."
              image="/placeholder.svg?height=200&width=300"
              link="/use-cases/finance/insurance"
            />
            <UseCaseCard
              title="Trade Finance"
              description="Streamlining letters of credit and trade documentation with blockchain verification."
              image="/placeholder.svg?height=200&width=300"
              link="/use-cases/finance/trade"
            />
            <UseCaseCard
              title="Central Bank Digital Currencies"
              description="Government-backed digital currencies built on blockchain technology."
              image="/placeholder.svg?height=200&width=300"
              link="/use-cases/finance/cbdc"
            />
          </div>
        </TabsContent>

        <TabsContent value="supply-chain" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <UseCaseCard
              title="Product Traceability"
              description="End-to-end tracking of products from raw materials to consumer delivery."
              image="/placeholder.svg?height=200&width=300"
              link="/use-cases/supply-chain/traceability"
            />
            <UseCaseCard
              title="Counterfeit Prevention"
              description="Verifying product authenticity through immutable blockchain records."
              image="/placeholder.svg?height=200&width=300"
              link="/use-cases/supply-chain/counterfeit"
            />
            <UseCaseCard
              title="Inventory Management"
              description="Real-time visibility of inventory across complex supply chains."
              image="/placeholder.svg?height=200&width=300"
              link="/use-cases/supply-chain/inventory"
            />
          </div>
        </TabsContent>

        <TabsContent value="identity" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <UseCaseCard
              title="Self-Sovereign Identity"
              description="User-controlled digital identity without reliance on centralized authorities."
              image="/placeholder.svg?height=200&width=300"
              link="/use-cases/identity/self-sovereign"
            />
            <UseCaseCard
              title="KYC/AML Compliance"
              description="Streamlined verification processes with secure, reusable identity credentials."
              image="/placeholder.svg?height=200&width=300"
              link="/use-cases/identity/kyc"
            />
            <UseCaseCard
              title="Digital Credentials"
              description="Verifiable academic and professional credentials stored on blockchain."
              image="/placeholder.svg?height=200&width=300"
              link="/use-cases/identity/credentials"
            />
          </div>
        </TabsContent>

        <TabsContent value="healthcare" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <UseCaseCard
              title="Medical Records"
              description="Secure, patient-controlled health records with granular access permissions."
              image="/placeholder.svg?height=200&width=300"
              link="/use-cases/healthcare/records"
            />
            <UseCaseCard
              title="Drug Traceability"
              description="Tracking pharmaceuticals from manufacturer to patient to prevent counterfeits."
              image="/placeholder.svg?height=200&width=300"
              link="/use-cases/healthcare/drugs"
            />
            <UseCaseCard
              title="Clinical Trials"
              description="Transparent, tamper-proof recording of clinical trial data and results."
              image="/placeholder.svg?height=200&width=300"
              link="/use-cases/healthcare/trials"
            />
          </div>
        </TabsContent>

        <TabsContent value="real-estate" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <UseCaseCard
              title="Property Registries"
              description="Immutable records of property ownership and transaction history."
              image="/placeholder.svg?height=200&width=300"
              link="/use-cases/real-estate/registry"
            />
            <UseCaseCard
              title="Fractional Ownership"
              description="Tokenization of real estate assets allowing for partial investment and ownership."
              image="/placeholder.svg?height=200&width=300"
              link="/use-cases/real-estate/fractional"
            />
            <UseCaseCard
              title="Smart Contracts for Leasing"
              description="Automated lease agreements with built-in payment processing and dispute resolution."
              image="/placeholder.svg?height=200&width=300"
              link="/use-cases/real-estate/leasing"
            />
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16 border-t pt-10">
        <h2 className="text-2xl font-bold mb-6">Featured Case Studies</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="overflow-hidden">
            <div className="relative h-60">
              <Image
                src="/placeholder.svg?height=240&width=500"
                alt="Case study thumbnail"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>Supply Chain Transformation at Global Logistics Inc.</CardTitle>
              <CardDescription>
                How blockchain reduced tracking errors by 97% and improved delivery times by 35%
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Global Logistics Inc. implemented a blockchain-based tracking system across their entire supply chain,
                resulting in near-perfect inventory accuracy and significant cost savings.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Read Case Study
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-60">
              <Image
                src="/placeholder.svg?height=240&width=500"
                alt="Case study thumbnail"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>DeFi Platform Revolutionizes Lending in Emerging Markets</CardTitle>
              <CardDescription>
                How blockchain-based microloans reached 2.5 million previously unbanked individuals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A decentralized finance platform built on Ethereum provided microloans to entrepreneurs in regions with
                limited banking infrastructure, creating economic opportunities.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Read Case Study
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="mt-16 rounded-lg bg-emerald-50 p-8 dark:bg-emerald-900/20">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to implement blockchain in your business?</h2>
          <p className="max-w-[600px] text-muted-foreground mb-6">
            Our team of experts can help you identify the right blockchain solutions for your specific needs.
          </p>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            Schedule a Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

function UseCaseCard({ title, description, image, link }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Link href={link} className="text-emerald-600 hover:text-emerald-700 text-sm flex items-center">
          Learn more <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </CardFooter>
    </Card>
  )
}
