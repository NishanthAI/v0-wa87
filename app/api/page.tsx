"use client"
import { Code, Copy, ExternalLink, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

export default function ApiPage() {
  const [copiedTab, setCopiedTab] = useState<string | null>(null)

  const copyToClipboard = (text: string, tab: string) => {
    navigator.clipboard.writeText(text)
    setCopiedTab(tab)
    setTimeout(() => setCopiedTab(null), 2000)
  }

  return (
    <div className="container py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Blockchain API Integration</h1>
          <p className="text-xl text-muted-foreground">Connect with major blockchain networks for live data</p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/20 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-emerald-600"
              >
                <path d="M11 5.08V2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v3.08A7.01 7.01 0 0 1 8 11c1.31 0 2.52-.36 3.57-.95"></path>
                <path d="M18 9.13V4a1 1 0 0 0-1-1h-5.18"></path>
                <path d="M14 21.92V22a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4.92a7.18 7.18 0 0 1-4-6.08c0-1.32.36-2.54.97-3.6"></path>
                <path d="M7 22.92V20a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2.92"></path>
                <path d="M8 15a7 7 0 1 0 14 0 7 7 0 0 0-14 0Z"></path>
              </svg>
            </div>
            <CardTitle>Ethereum</CardTitle>
            <CardDescription>Connect to the Ethereum blockchain for smart contracts and transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Access Ethereum Mainnet and testnets (Goerli, Sepolia) with full support for ERC standards, smart contract
              interactions, and transaction monitoring.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View Documentation
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-purple-600"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <CardTitle>Solana</CardTitle>
            <CardDescription>High-performance blockchain with fast transactions and low fees</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Integrate with Solana's high-throughput blockchain for scalable applications, NFTs, and DeFi solutions
              with sub-second finality.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View Documentation
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/20 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-blue-600"
              >
                <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                <line x1="16" y1="8" x2="2" y2="22"></line>
                <line x1="17.5" y1="15" x2="9" y2="15"></line>
              </svg>
            </div>
            <CardTitle>Hyperledger Fabric</CardTitle>
            <CardDescription>Enterprise-grade permissioned blockchain framework</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Build private blockchain networks with modular architecture, pluggable consensus mechanisms, and
              fine-grained access control for enterprise use cases.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View Documentation
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/20 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-indigo-600"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            <CardTitle>Polygon</CardTitle>
            <CardDescription>Ethereum scaling solution with fast and low-cost transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Leverage Polygon's Layer 2 scaling solution for Ethereum to build applications with higher throughput and
              lower gas fees while maintaining Ethereum compatibility.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View Documentation
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-red-100 dark:bg-red-900/20 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-red-600"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <CardTitle>Polkadot</CardTitle>
            <CardDescription>Multi-chain network enabling cross-blockchain transfers</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Build on Polkadot's heterogeneous multi-chain framework to create specialized blockchains that can
              communicate with each other through the Relay Chain.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View Documentation
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-amber-100 dark:bg-amber-900/20 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-amber-600"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <CardTitle>Binance Smart Chain</CardTitle>
            <CardDescription>EVM-compatible blockchain with high throughput</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Integrate with Binance Smart Chain for EVM-compatible smart contracts with higher transaction throughput
              and lower fees compared to Ethereum.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View Documentation
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">API Integration Examples</h2>

        <Tabs defaultValue="javascript">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="javascript">JavaScript</TabsTrigger>
            <TabsTrigger value="python">Python</TabsTrigger>
            <TabsTrigger value="java">Java</TabsTrigger>
            <TabsTrigger value="go">Go</TabsTrigger>
          </TabsList>

          <TabsContent value="javascript" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="mr-2 h-5 w-5" />
                  Ethereum Balance Check
                </CardTitle>
                <CardDescription>Query an Ethereum address balance using ethers.js</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                    <code className="language-javascript">
                      {`import { ethers } from "ethers";

// Connect to Ethereum network
const provider = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/YOUR_INFURA_KEY"
);

async function getAddressBalance(address) {
  try {
    // Get balance in wei
    const balanceWei = await provider.getBalance(address);
    
    // Convert to ETH
    const balanceEth = ethers.utils.formatEther(balanceWei);
    
    console.log(\`Address: \${address}\`);
    console.log(\`Balance: \${balanceEth} ETH\`);
    
    return balanceEth;
  } catch (error) {
    console.error("Error fetching balance:", error);
    throw error;
  }
}

// Example usage
getAddressBalance("0xYourEthereumAddress");`}
                    </code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 h-6 w-6 text-muted-foreground hover:text-foreground"
                    onClick={() =>
                      copyToClipboard(
                        `import { ethers } from "ethers";

// Connect to Ethereum network
const provider = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/YOUR_INFURA_KEY"
);

async function getAddressBalance(address) {
  try {
    // Get balance in wei
    const balanceWei = await provider.getBalance(address);
    
    // Convert to ETH
    const balanceEth = ethers.utils.formatEther(balanceWei);
    
    console.log(\`Address: \${address}\`);
    console.log(\`Balance: \${balanceEth} ETH\`);
    
    return balanceEth;
  } catch (error) {
    console.error("Error fetching balance:", error);
    throw error;
  }
}

// Example usage
getAddressBalance("0xYourEthereumAddress");`,
                        "javascript",
                      )
                    }
                  >
                    {copiedTab === "javascript" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="python" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="mr-2 h-5 w-5" />
                  Solana Token Transfer
                </CardTitle>
                <CardDescription>Transfer SOL tokens using the Solana Python SDK</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                    <code className="language-python">
                      {`from solana.rpc.api import Client
from solana.transaction import Transaction
from solana.system_program import TransferParams, transfer
from solana.keypair import Keypair
import base58

# Connect to Solana network
client = Client("https://api.mainnet-beta.solana.com")

# Load sender keypair (in a real app, use secure key management)
private_key = base58.b58decode("YOUR_PRIVATE_KEY")
sender = Keypair.from_secret_key(private_key)

def transfer_sol(recipient_address, amount_sol):
    try:
        # Convert SOL to lamports (1 SOL = 10^9 lamports)
        amount_lamports = int(amount_sol * 1000000000)
        
        # Create transfer instruction
        transfer_instruction = transfer(
            TransferParams(
                from_pubkey=sender.public_key,
                to_pubkey=recipient_address,
                lamports=amount_lamports
            )
        )
        
        # Create and sign transaction
        transaction = Transaction().add(transfer_instruction)
        signature = client.send_transaction(transaction, sender)
        
        print(f"Transaction sent: {signature['result']}")
        return signature['result']
    
    except Exception as e:
        print(f"Error transferring SOL: {e}")
        raise

# Example usage
transfer_sol("RecipientSolanaAddress", 0.1)  # Transfer 0.1 SOL`}
                    </code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 h-6 w-6 text-muted-foreground hover:text-foreground"
                    onClick={() =>
                      copyToClipboard(
                        `from solana.rpc.api import Client
from solana.transaction import Transaction
from solana.system_program import TransferParams, transfer
from solana.keypair import Keypair
import base58

# Connect to Solana network
client = Client("https://api.mainnet-beta.solana.com")

# Load sender keypair (in a real app, use secure key management)
private_key = base58.b58decode("YOUR_PRIVATE_KEY")
sender = Keypair.from_secret_key(private_key)

def transfer_sol(recipient_address, amount_sol):
    try:
        # Convert SOL to lamports (1 SOL = 10^9 lamports)
        amount_lamports = int(amount_sol * 1000000000)
        
        # Create transfer instruction
        transfer_instruction = transfer(
            TransferParams(
                from_pubkey=sender.public_key,
                to_pubkey=recipient_address,
                lamports=amount_lamports
            )
        )
        
        # Create and sign transaction
        transaction = Transaction().add(transfer_instruction)
        signature = client.send_transaction(transaction, sender)
        
        print(f"Transaction sent: {signature['result']}")
        return signature['result']
    
    except Exception as e:
        print(f"Error transferring SOL: {e}")
        raise

# Example usage
transfer_sol("RecipientSolanaAddress", 0.1)  # Transfer 0.1 SOL`,
                        "python",
                      )
                    }
                  >
                    {copiedTab === "python" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="java" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="mr-2 h-5 w-5" />
                  Hyperledger Fabric Asset Transfer
                </CardTitle>
                <CardDescription>Transfer assets using Hyperledger Fabric Java SDK</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                    <code className="language-java">
                      {`import org.hyperledger.fabric.gateway.*;

import java.nio.file.Path;
import java.nio.file.Paths;

public class AssetTransfer {

    public static void main(String[] args) throws Exception {
        // Load connection profile
        Path networkConfigPath = Paths.get("connection.json");
        
        // Load identity and wallet
        Path walletPath = Paths.get("wallet");
        Wallet wallet = Wallets.newFileSystemWallet(walletPath);
        Identity identity = wallet.get("user1");
        
        // Configure gateway connection
        Gateway.Builder builder = Gateway.createBuilder()
                .identity(identity)
                .networkConfig(networkConfigPath)
                .discovery(true);
        
        // Connect to network and get contract
        try (Gateway gateway = builder.connect()) {
            Network network = gateway.getNetwork("mychannel");
            Contract contract = network.getContract("asset-transfer");
            
            // Submit transaction to transfer asset
            System.out.println("Submitting transaction...");
            byte[] result = contract.submitTransaction(
                "TransferAsset", 
                "asset1", // Asset ID
                "recipient1" // New owner
            );
            
            System.out.println("Transaction submitted successfully");
            System.out.println("Result: " + new String(result));
        }
    }
}`}
                    </code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 h-6 w-6 text-muted-foreground hover:text-foreground"
                    onClick={() =>
                      copyToClipboard(
                        `import org.hyperledger.fabric.gateway.*;

import java.nio.file.Path;
import java.nio.file.Paths;

public class AssetTransfer {

    public static void main(String[] args) throws Exception {
        // Load connection profile
        Path networkConfigPath = Paths.get("connection.json");
        
        // Load identity and wallet
        Path walletPath = Paths.get("wallet");
        Wallet wallet = Wallets.newFileSystemWallet(walletPath);
        Identity identity = wallet.get("user1");
        
        // Configure gateway connection
        Gateway.Builder builder = Gateway.createBuilder()
                .identity(identity)
                .networkConfig(networkConfigPath)
                .discovery(true);
        
        // Connect to network and get contract
        try (Gateway gateway = builder.connect()) {
            Network network = gateway.getNetwork("mychannel");
            Contract contract = network.getContract("asset-transfer");
            
            // Submit transaction to transfer asset
            System.out.println("Submitting transaction...");
            byte[] result = contract.submitTransaction(
                "TransferAsset", 
                "asset1", // Asset ID
                "recipient1" // New owner
            );
            
            System.out.println("Transaction submitted successfully");
            System.out.println("Result: " + new String(result));
        }
    }
}`,
                        "java",
                      )
                    }
                  >
                    {copiedTab === "java" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="go" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="mr-2 h-5 w-5" />
                  Polygon Smart Contract Interaction
                </CardTitle>
                <CardDescription>Interact with a Polygon smart contract using Go</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                    <code className="language-go">
                      {`package main

import (
	"context"
	"fmt"
	"log"
	"math/big"

	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/crypto"
	"github.com/ethereum/go-ethereum/ethclient"
)

// Import your compiled smart contract
//go:generate abigen --abi contract.abi --pkg main --type Token --out token.go

func main() {
	// Connect to Polygon network
	client, err := ethclient.Dial("https://polygon-rpc.com")
	if err != nil {
		log.Fatalf("Failed to connect to the Polygon network: %v", err)
	}

	// Load private key
	privateKey, err := crypto.HexToECDSA("your_private_key_hex")
	if err != nil {
		log.Fatalf("Failed to load private key: %v", err)
	}

	// Get chain ID
	chainID, err := client.ChainID(context.Background())
	if err != nil {
		log.Fatalf("Failed to get chain ID: %v", err)
	}

	// Create transaction options
	auth, err := bind.NewKeyedTransactorWithChainID(privateKey, chainID)
	if err != nil {
		log.Fatalf("Failed to create transactor: %v", err)
	}

	// Set gas price and limit
	auth.GasPrice = big.NewInt(30000000000) // 30 Gwei
	auth.GasLimit = uint64(300000)

	// Contract address
	contractAddress := common.HexToAddress("0xYourContractAddress")

	// Create contract instance
	token, err := NewToken(contractAddress, client)
	if err != nil {
		log.Fatalf("Failed to instantiate contract: %v", err)
	}

	// Call contract method (e.g., transfer tokens)
	recipient := common.HexToAddress("0xRecipientAddress")
	amount := big.NewInt(1000000000000000000) // 1 token with 18 decimals

	tx, err := token.Transfer(auth, recipient, amount)
	if err != nil {
		log.Fatalf("Failed to transfer tokens: %v", err)
	}

	fmt.Printf("Transaction sent: %s\n", tx.Hash().Hex())
}`}
                    </code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 h-6 w-6 text-muted-foreground hover:text-foreground"
                    onClick={() =>
                      copyToClipboard(
                        `package main

import (
	"context"
	"fmt"
	"log"
	"math/big"

	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/crypto"
	"github.com/ethereum/go-ethereum/ethclient"
)

// Import your compiled smart contract
//go:generate abigen --abi contract.abi --pkg main --type Token --out token.go

func main() {
	// Connect to Polygon network
	client, err := ethclient.Dial("https://polygon-rpc.com")
	if err != nil {
		log.Fatalf("Failed to connect to the Polygon network: %v", err)
	}

	// Load private key
	privateKey, err := crypto.HexToECDSA("your_private_key_hex")
	if err != nil {
		log.Fatalf("Failed to load private key: %v", err)
	}

	// Get chain ID
	chainID, err := client.ChainID(context.Background())
	if err != nil {
		log.Fatalf("Failed to get chain ID: %v", err)
	}

	// Create transaction options
	auth, err := bind.NewKeyedTransactorWithChainID(privateKey, chainID)
	if err != nil {
		log.Fatalf("Failed to create transactor: %v", err)
	}

	// Set gas price and limit
	auth.GasPrice = big.NewInt(30000000000) // 30 Gwei
	auth.GasLimit = uint64(300000)

	// Contract address
	contractAddress := common.HexToAddress("0xYourContractAddress")

	// Create contract instance
	token, err := NewToken(contractAddress, client)
	if err != nil {
		log.Fatalf("Failed to instantiate contract: %v", err)
	}

	// Call contract method (e.g., transfer tokens)
	recipient := common.HexToAddress("0xRecipientAddress")
	amount := big.NewInt(1000000000000000000) // 1 token with 18 decimals

	tx, err := token.Transfer(auth, recipient, amount)
	if err != nil {
		log.Fatalf("Failed to transfer tokens: %v", err)
	}

	fmt.Printf("Transaction sent: %s\n", tx.Hash().Hex())
}`,
                        "go",
                      )
                    }
                  >
                    {copiedTab === "go" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
