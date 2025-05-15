"use client"

import { useState } from "react"
import { Check, Copy, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"

// Sample smart contract templates
const CONTRACT_TEMPLATES = {
  erc20: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, Ownable {
    constructor(string memory name, string memory symbol, uint256 initialSupply) 
        ERC20(name, symbol) {
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }
    
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}`,
  nft: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor(string memory name, string memory symbol) ERC721(name, symbol) {}

    function mintNFT(address recipient, string memory tokenURI) public onlyOwner returns (uint256) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);
        return newItemId;
    }
}`,
  dao: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract SimpleDAO is AccessControl {
    bytes32 public constant MEMBER_ROLE = keccak256("MEMBER");
    
    struct Proposal {
        uint256 id;
        address proposer;
        string description;
        uint256 forVotes;
        uint256 againstVotes;
        bool executed;
        mapping(address => bool) hasVoted;
    }
    
    uint256 public proposalCount;
    mapping(uint256 => Proposal) public proposals;
    IERC20 public governanceToken;
    
    constructor(address _governanceToken) {
        governanceToken = IERC20(_governanceToken);
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(MEMBER_ROLE, msg.sender);
    }
    
    function addMember(address member) external onlyRole(DEFAULT_ADMIN_ROLE) {
        grantRole(MEMBER_ROLE, member);
    }
    
    function createProposal(string memory description) external onlyRole(MEMBER_ROLE) returns (uint256) {
        uint256 proposalId = proposalCount++;
        Proposal storage proposal = proposals[proposalId];
        proposal.id = proposalId;
        proposal.proposer = msg.sender;
        proposal.description = description;
        
        return proposalId;
    }
    
    function vote(uint256 proposalId, bool support) external onlyRole(MEMBER_ROLE) {
        Proposal storage proposal = proposals[proposalId];
        require(!proposal.hasVoted[msg.sender], "Already voted");
        require(!proposal.executed, "Proposal already executed");
        
        proposal.hasVoted[msg.sender] = true;
        
        if (support) {
            proposal.forVotes += 1;
        } else {
            proposal.againstVotes += 1;
        }
    }
    
    function executeProposal(uint256 proposalId) external onlyRole(DEFAULT_ADMIN_ROLE) {
        Proposal storage proposal = proposals[proposalId];
        require(!proposal.executed, "Proposal already executed");
        require(proposal.forVotes > proposal.againstVotes, "Proposal not passed");
        
        proposal.executed = true;
        // Execute the proposal logic here
    }
}`,
}

export default function SmartContractsPage() {
  const [selectedTemplate, setSelectedTemplate] = useState("erc20")
  const [contractCode, setContractCode] = useState(CONTRACT_TEMPLATES.erc20)
  const [network, setNetwork] = useState("ethereum")
  const [compileStatus, setCompileStatus] = useState(null)
  const [copied, setCopied] = useState(false)

  const handleTemplateChange = (value) => {
    setSelectedTemplate(value)
    setContractCode(CONTRACT_TEMPLATES[value])
    setCompileStatus(null)
  }

  const handleCodeChange = (e) => {
    setContractCode(e.target.value)
    setCompileStatus(null)
  }

  const handleCompile = () => {
    // In a real app, this would send the code to a compilation service
    setCompileStatus("success")
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="container py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Smart Contract Interaction</h1>
          <p className="text-xl text-muted-foreground">
            Test and deploy smart contracts on various blockchain networks
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Contract Editor</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={copyToClipboard} className="flex items-center gap-1">
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    {copied ? "Copied" : "Copy"}
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleCompile}
                    className="bg-emerald-600 hover:bg-emerald-700 flex items-center gap-1"
                  >
                    <Play className="h-4 w-4" />
                    Compile
                  </Button>
                </div>
              </div>
              <CardDescription>Write or modify your smart contract code</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea value={contractCode} onChange={handleCodeChange} className="font-mono h-[500px] resize-none" />

              {compileStatus === "success" && (
                <Alert className="mt-4 bg-emerald-50 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300">
                  <AlertDescription>Contract compiled successfully! Ready for deployment.</AlertDescription>
                </Alert>
              )}

              {compileStatus === "error" && (
                <Alert className="mt-4 bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-300">
                  <AlertDescription>Compilation failed. Please check your code for errors.</AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Contract Templates</CardTitle>
              <CardDescription>Choose from pre-built smart contract templates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Tabs value={selectedTemplate} onValueChange={handleTemplateChange}>
                  <TabsList className="w-full">
                    <TabsTrigger value="erc20">ERC-20 Token</TabsTrigger>
                    <TabsTrigger value="nft">NFT (ERC-721)</TabsTrigger>
                    <TabsTrigger value="dao">Simple DAO</TabsTrigger>
                  </TabsList>
                  <TabsContent value="erc20" className="mt-2">
                    <p className="text-sm text-muted-foreground">
                      A standard ERC-20 fungible token contract with minting capabilities.
                    </p>
                  </TabsContent>
                  <TabsContent value="nft" className="mt-2">
                    <p className="text-sm text-muted-foreground">
                      An ERC-721 non-fungible token contract for creating unique digital assets.
                    </p>
                  </TabsContent>
                  <TabsContent value="dao" className="mt-2">
                    <p className="text-sm text-muted-foreground">
                      A simple Decentralized Autonomous Organization with proposal and voting functionality.
                    </p>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Deployment Settings</CardTitle>
              <CardDescription>Configure your deployment parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Target Network</label>
                <Select value={network} onValueChange={setNetwork}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select network" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ethereum">Ethereum Mainnet</SelectItem>
                    <SelectItem value="goerli">Goerli Testnet</SelectItem>
                    <SelectItem value="sepolia">Sepolia Testnet</SelectItem>
                    <SelectItem value="polygon">Polygon</SelectItem>
                    <SelectItem value="arbitrum">Arbitrum</SelectItem>
                    <SelectItem value="optimism">Optimism</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-4">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={!compileStatus}>
                  Deploy Contract
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  {compileStatus ? "Ready to deploy" : "Compile your contract first"}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Contract Verification</CardTitle>
            <CardDescription>Verify your contract on block explorers</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              After deployment, verify your contract's source code on Etherscan, Polygonscan, or other block explorers
              for transparency.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Learn More
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contract Interaction</CardTitle>
            <CardDescription>Interact with deployed contracts</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Call functions, send transactions, and monitor events from your deployed smart contracts through our
              intuitive interface.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Learn More
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security Auditing</CardTitle>
            <CardDescription>Analyze your contract for vulnerabilities</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Use our integrated security tools to scan your smart contracts for common vulnerabilities and best
              practice violations.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Learn More
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
