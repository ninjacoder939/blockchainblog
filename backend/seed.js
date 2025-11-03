const { mongoose } = require("mongoose");

//const MONGO_URI = "mongodb://127.0.0.1:27017/blogdb";
const MONGO_URI ="mongodb+srv://ckulthe56_db_user:K1ovMB4HwOrM27XE@blogdb.g3ta9p0.mongodb.net/";

const postSchema = new mongoose.Schema({
  title: String,
  author: String,
  content: String,
  image: String,
  video: String,
});

const Post = mongoose.model("Post", postSchema);

const authors = [
  "ninjacode",
  "shishimaro",
  "jul",
  "evan",
  "lenin",
  "mariam",
  "steve",
  "patric",
  "labeneseGuy",
  "blockLover",
  "exploreWithMe",
];

const posts = [
  {
    title: "Understanding Blockchain Fundamentals",
    content: `Blockchain technology represents a revolutionary method of recording and verifying transactions across a decentralized network of computers. 
Each block in the chain contains a list of transactions, a timestamp, and a cryptographic hash of the previous block. 
This structure ensures data integrity and immutability, meaning no one can modify or delete records without consensus. 

Unlike traditional databases managed by a single entity, blockchain operates on a peer-to-peer network where every participant maintains a copy of the ledger. 
This decentralization eliminates the need for intermediaries such as banks or notaries, reducing operational costs and increasing transparency. 
Cryptographic algorithms and consensus mechanisms like Proof of Work (PoW) and Proof of Stake (PoS) ensure that only valid transactions are recorded. 

Beyond cryptocurrencies, blockchain technology is now being adopted across industries. 
In supply chain management, it enables end-to-end product tracking—from raw material sourcing to final delivery—helping reduce fraud and ensure authenticity. 
In healthcare, patient data stored on blockchain enhances privacy and interoperability between institutions. 
Voting systems built on blockchain promise tamper-proof and transparent elections. 
Even governments are exploring blockchain for secure record-keeping, taxation, and digital identity verification.

The transparency and security offered by blockchain make it a cornerstone of the emerging digital trust economy. 
With advancements in scalability, interoperability, and regulatory frameworks, blockchain is steadily moving from experimentation to mass adoption. 
From decentralized finance (DeFi) to NFTs and Web3, this foundational technology continues to reshape how humans exchange value, share information, and build systems without borders.`,

    image: "https://picsum.photos/200/300?grayscale",
    video: "",
  },
  {
    title: "Smart Contracts: Automating the Future",
    content: `Smart contracts are self-executing agreements stored directly on the blockchain. Once predefined conditions are met, the contract executes automatically without intermediaries. For example, in real estate, once payment is verified, property ownership can automatically transfer to the buyer. This eliminates fraud, reduces costs, and increases efficiency. Ethereum was the first to implement smart contracts at scale, inspiring hundreds of projects to build decentralized applications (dApps) that automate complex workflows across industries.`,
    image: "",
    video: "https://example.com/videos/smartcontracts.mp4",
  },
  {
    title: "DeFi: Redefining Global Finance",
    content: `Smart contracts are self-executing digital agreements that run directly on blockchain networks. They contain the terms of an agreement written as code, which automatically executes when predefined conditions are met. This removes the need for third-party intermediaries, ensuring transparency, trust, and efficiency. 

For instance, in real estate transactions, once the buyer’s payment is verified on-chain, the smart contract can automatically trigger the transfer of property ownership, reducing paperwork and the risk of human error. In supply chain management, smart contracts can verify product authenticity, release payments upon delivery confirmation, and ensure compliance at every stage without manual oversight.

Ethereum was the first blockchain to implement smart contracts at scale, introducing the concept of decentralized applications (dApps) — software that operates without central servers. These dApps power entire ecosystems of financial services, from decentralized exchanges (DEXs) and lending platforms to NFT marketplaces and gaming economies. 

Smart contracts rely on deterministic execution, meaning their outcomes are predictable and verifiable by all network participants. They cannot be altered once deployed, guaranteeing immutability and trust. Developers use languages like Solidity or Vyper to code these contracts, which are then compiled and executed by the Ethereum Virtual Machine (EVM).

The potential use cases are expanding rapidly: insurance payouts, royalties for digital content, voting systems, crowdfunding, and decentralized governance (DAOs). Combined with advancements in Layer 2 scaling and cross-chain interoperability, smart contracts are evolving into the backbone of the decentralized web (Web3). 

In essence, smart contracts bring automation, fairness, and security to the digital economy — redefining how humans make agreements in a trustless world.`,

    image: "https://picsum.photos/200/300/?blur",
    video: "",
  },
  {
    title: "NFTs: Ownership in the Digital Era",
    content: `Non-Fungible Tokens (NFTs) are unique digital assets recorded on a blockchain, representing ownership of a specific item, file, or piece of data. Unlike cryptocurrencies such as Bitcoin or Ethereum, which are interchangeable and identical in value, each NFT is distinct and verifiably scarce. This makes them ideal for representing art, collectibles, in-game assets, virtual real estate, and even intellectual property rights.

The global NFT boom began with digital art — artists could mint their creations as NFTs and sell them directly to collectors, receiving royalties automatically through smart contracts each time the artwork was resold. This innovation empowered creators and removed traditional intermediaries such as galleries or auction houses. Platforms like OpenSea, Rarible, and Magic Eden became global hubs for NFT trading and discovery.

However, NFTs extend far beyond the art world. They are being integrated into gaming, allowing players to truly own their in-game items or avatars. Virtual worlds like Decentraland and The Sandbox use NFTs to represent plots of virtual land and digital assets. In the music industry, NFTs enable artists to release limited-edition albums, concert tickets, and fan experiences, creating new revenue models. 

NFTs are also revolutionizing identity verification and credential management. Universities and organizations are issuing diplomas and certifications as NFTs to prevent forgery. Real-world assets such as real estate, luxury items, and patents are being tokenized, enabling fractional ownership and easy transferability.

Despite market fluctuations and speculation, the underlying technology continues to evolve. With improvements in blockchain scalability, interoperability, and sustainability, NFTs are poised to become a cornerstone of Web3 — powering digital ownership, authenticity, and economic empowerment in the decentralized future.`,

    image: "",
    video: "",
  },
  {
    title: "Ethereum 2.0: The Merge and Beyond",
    content: `Ethereum 2.0 represents one of the most important upgrades in blockchain history, marking the network’s transition from the energy-intensive Proof of Work (PoW) consensus mechanism to the much more efficient Proof of Stake (PoS). This transformation, often referred to as “The Merge,” reduced Ethereum’s energy consumption by over 99%, addressing one of the biggest criticisms faced by earlier blockchain systems. Validators now secure the network by staking ETH instead of mining with powerful hardware, making Ethereum more sustainable and decentralized at the same time.

The new PoS model not only promotes environmental responsibility but also strengthens the network’s economic security. Validators are incentivized to act honestly since any malicious behavior could result in losing their staked funds. This creates a self-regulating ecosystem that’s both efficient and robust. Ethereum 2.0 has also improved the speed of block confirmations and reduced the likelihood of chain forks, enhancing overall network stability.

Looking ahead, Ethereum’s roadmap includes major scalability enhancements such as sharding — a process that divides the blockchain into smaller segments (shards) to process transactions in parallel. Combined with layer-2 solutions like Arbitrum, Optimism, and zkSync, these innovations are expected to increase throughput dramatically while lowering gas fees. 

As a result, Ethereum continues to maintain its leadership in decentralized applications (dApps), DeFi, and NFT ecosystems. Developers are building advanced tools for gaming, finance, and governance on top of this powerful infrastructure. With continuous upgrades and an active global community, Ethereum 2.0 is not just a technical milestone — it’s a vision for a scalable, secure, and sustainable future for Web3.`,

    image: "https://picsum.photos/id/870/200/300?grayscale&blur=2",
    video: "https://example.com/videos/eth2.mp4",
  },
  {
    title: "Web3: The Next Evolution of the Internet",
    content: `Web3 represents the next major evolution of the internet—one that shifts power from centralized corporations to individual users. At its core, Web3 leverages blockchain technology, decentralized storage, and peer-to-peer networks to create an open, trustless, and permissionless ecosystem. Instead of relying on intermediaries like tech giants to store or manage data, users retain direct ownership of their information, digital identities, and assets. 

Platforms such as IPFS (InterPlanetary File System) and Filecoin are at the forefront of this transformation, providing decentralized ways to host and retrieve content without depending on centralized servers. Meanwhile, crypto wallets like MetaMask, Phantom, and WalletConnect function as personal gateways into this new internet—serving as both digital identities and financial tools that connect users to decentralized applications (dApps).

Web3 also introduces novel economic models like token-based incentives and decentralized autonomous organizations (DAOs), where communities govern projects collectively without centralized control. As this ecosystem matures, it aims to deliver a more private, transparent, and equitable digital experience—one where creativity, ownership, and innovation thrive beyond the limits of traditional web systems.`,

    image: "",
    video: "",
  },
  {
    title: "DAOs: A New Model for Governance",
    content: `Decentralized Autonomous Organizations (DAOs) mark a revolutionary shift in how communities, companies, and projects can organize and operate. Unlike traditional organizations with centralized management and rigid hierarchies, DAOs function through transparent, self-executing smart contracts that define the rules, processes, and governance mechanisms directly on the blockchain. Every action, from treasury management to proposal voting, is recorded on-chain—ensuring full transparency and trust among members.

In a DAO, power is distributed among token holders who use governance tokens to propose, discuss, and vote on decisions that shape the organization’s future. These proposals can range from allocating project funding, approving partnerships, launching new features, or changing key operational parameters. This collective decision-making system removes the need for intermediaries and enables a truly democratic, community-driven structure.

The impact of DAOs is already visible across industries. They have been used to fund open-source software, coordinate decentralized investment funds, support social and environmental initiatives, and even manage entire blockchain protocols like Uniswap and Aave. As blockchain adoption grows, DAOs are emerging as a powerful alternative to traditional corporations—offering borderless participation, global collaboration, and a governance model where every member has a voice and stake in the ecosystem’s success.`,

    image: "https://picsum.photos/seed/picsum/200/300",
    video: "",
  },
  {
    title: "Blockchain in Global Supply Chains",
    content: `In global trade, transparency, authenticity, and traceability remain some of the biggest challenges for supply chains. Complex international networks often involve multiple intermediaries, making it difficult to verify product origins, track shipments, and ensure compliance at every stage. Blockchain technology introduces a groundbreaking solution by enabling real-time, tamper-proof tracking of goods from their point of origin to the end consumer. Every transaction, inspection, or movement can be recorded as an immutable entry on the blockchain, creating a single, trusted source of truth accessible to all participants.

Leading corporations such as IBM, Maersk, and Walmart have already integrated blockchain into their logistics systems to monitor the movement of food, raw materials, and consumer goods. In the food industry, for example, Walmart uses blockchain to trace the journey of produce from farm to shelf, ensuring freshness, safety, and accountability. If contamination occurs, affected batches can be identified and recalled within seconds rather than days.

Beyond food and agriculture, blockchain is revolutionizing other industries such as pharmaceuticals, luxury goods, and automotive manufacturing. It helps authenticate high-value items like diamonds and designer products, combats counterfeiting, and ensures that medicines meet regulatory standards throughout the distribution chain. By providing real-time visibility and verifiable proof of authenticity, blockchain not only builds trust among suppliers and buyers but also improves efficiency, reduces fraud, and strengthens the overall integrity of global trade networks.`,

    image: "",
    video: "https://example.com/videos/supplychain.mp4",
  },
  {
    title: "Crypto Wallet Security: Protecting Your Assets",
    content: `Security is the cornerstone of cryptocurrency management and the foundation of trust in the decentralized world. Unlike traditional banking systems, where institutions act as custodians, crypto ownership depends entirely on the user’s ability to protect their private keys—the cryptographic strings that represent true ownership of funds. Losing these keys is equivalent to losing access to the assets forever, as no central authority can recover them. This makes self-custody both empowering and deeply responsible.

Crypto wallets, whether software-based or hardware-based, serve as the interface between users and their digital assets. Hardware wallets like Ledger, Trezor, and SafePal are considered the gold standard for security, as they store private keys offline and away from internet exposure, preventing most forms of hacking. Software wallets such as MetaMask, Trust Wallet, and Phantom offer convenience and accessibility but require diligent security practices. Users should always verify wallet authenticity before installation, avoid downloading from unofficial sources, and regularly update software to patch vulnerabilities.

Best practices for crypto security extend beyond simply owning a wallet. Users should double-check wallet addresses before initiating any transaction—phishing attacks and clipboard hijackers are common threats. Enabling two-factor authentication (2FA) wherever possible adds an extra layer of protection, and using unique, strong passwords is essential to prevent credential stuffing attacks. Seed phrases, which act as a master recovery key, must be stored securely—ideally offline, written on paper or engraved on metal, and never shared digitally or stored in cloud services.

Education remains the most powerful defense. Understanding how wallets, keys, and blockchain networks operate helps users identify scams, avoid malicious links, and recover from mistakes more effectively. As cryptocurrency adoption grows, awareness about self-custody, cold storage, and multi-signature security will continue to define the difference between safe investors and vulnerable victims. Managing digital wealth responsibly isn’t just about owning crypto—it’s about mastering the security mindset that keeps it truly yours.`,

    image: "https://picsum.photos/seed/picsum/200/300",
    video: "",
  },
  {
    title: "Cross-Chain Bridges: Connecting Blockchain Islands",
    content: `With the rapid rise of multiple blockchain ecosystems, interoperability has become one of the most critical goals in Web3 evolution. In the early days, blockchains like Bitcoin and Ethereum operated as isolated networks, each with its own consensus mechanism, token standards, and developer communities. However, as the ecosystem expanded, this fragmentation began to limit scalability, liquidity, and innovation. The need to transfer assets and information seamlessly across these ecosystems gave birth to a new era of interoperability solutions.

Cross-chain bridges are at the heart of this transformation. They enable assets and data to move between networks such as Ethereum, Binance Smart Chain, Solana, Avalanche, and Polygon. For example, users can lock tokens on one chain and mint wrapped versions on another, effectively allowing liquidity to flow across previously siloed systems. This has opened the door to multichain decentralized finance (DeFi), where investors can farm, trade, or lend across multiple networks without needing centralized intermediaries. Interoperability also supports gaming, NFTs, and enterprise solutions, allowing developers to combine the strengths of different chains into unified ecosystems.

Yet, with great power comes significant risk. Bridge security has become one of the most pressing issues in blockchain. Several high-profile bridge hacks, resulting in billions of dollars lost, revealed the vulnerabilities in centralized validator systems and weak smart contract implementations. As a result, new solutions such as trustless bridges, zero-knowledge proofs, and decentralized validation networks have emerged to strengthen cross-chain communication. Projects like Wormhole, LayerZero, and Axelar are pioneering secure interoperability frameworks designed to minimize single points of failure.

Beyond asset transfers, interoperability is evolving into cross-chain messaging and shared state synchronization—key features for the next generation of decentralized applications. This means that in the future, dApps will no longer be confined to a single blockchain but will operate seamlessly across multiple environments, leveraging the best features of each. As the blockchain industry matures, true interoperability will not only enhance user experience but will also pave the way for a unified, interconnected Web3—where blockchains collaborate rather than compete.`,

    image: "",
    video: "",
  },
  {
    title: "Layer 2 Scaling: Making Blockchain Faster",
    content: `As blockchain adoption grows, the limitations of traditional Layer 1 networks like Ethereum have become apparent. High transaction fees, network congestion, and slow processing times often make decentralized applications (dApps) impractical for everyday use. Layer 2 (L2) scaling solutions were designed to solve these issues by moving most transactions off-chain while maintaining the security of the main blockchain. 

Popular L2 solutions include Optimistic Rollups (Optimism, Arbitrum) and Zero-Knowledge Rollups (zkSync, StarkNet). These technologies batch multiple transactions into a single proof that is verified on the main chain, drastically reducing gas fees and improving transaction throughput. As a result, users can enjoy near-instant transfers with minimal costs. 

Beyond scalability, Layer 2 solutions play a crucial role in enabling new financial systems. They allow DeFi applications to serve millions of users efficiently, support NFT minting without huge costs, and open up the possibility of microtransactions—essential for gaming and metaverse economies. With continuous innovation, L2s are becoming the backbone of the next-generation Web3 infrastructure.`,
    image: "https://picsum.photos/id/1015/200/300",
    video: "",
  },
  {
    title: "Stablecoins: The Bridge Between Crypto and Fiat",
    content: `Stablecoins are a vital component of the cryptocurrency ecosystem, providing the stability of fiat currency with the flexibility of blockchain technology. Pegged to assets like the U.S. dollar, euro, or gold, stablecoins such as USDT, USDC, and DAI are used for trading, payments, and remittances without the volatility associated with traditional cryptocurrencies. 

In DeFi, stablecoins serve as liquidity anchors—allowing users to earn yield, borrow, or lend with predictable value. For individuals in countries with unstable currencies, stablecoins offer a safe way to store wealth and transfer funds internationally with minimal fees. Businesses are also adopting them for faster settlements and cross-border payments. 

However, not all stablecoins are equal. Centralized stablecoins rely on custodians to hold reserves, while decentralized ones like DAI maintain stability through smart contract-based collateralization. Regulatory scrutiny is increasing, aiming to ensure transparency, reserve audits, and consumer protection. As the world moves toward digital money, stablecoins are likely to play a key role in merging traditional finance and crypto economies.`,
    image: "",
    video: "https://example.com/videos/stablecoins.mp4",
  },
  {
    title: "The Rise of Decentralized Finance (DeFi)",
    content: `Decentralized Finance (DeFi) is revolutionizing how financial systems operate by replacing intermediaries like banks and brokers with open, blockchain-based protocols. Built mainly on Ethereum, DeFi platforms allow anyone with an internet connection to trade, lend, borrow, and earn interest without permission or central oversight. 

Protocols like Aave, Uniswap, and MakerDAO exemplify this new financial paradigm. Through liquidity pools, automated market makers (AMMs), and yield farming, DeFi users can generate passive income and access innovative financial products. Smart contracts ensure transparency and fairness—removing the human bias and inefficiency found in traditional systems. 

Despite its success, DeFi is still evolving. Security vulnerabilities, governance challenges, and regulatory uncertainties pose risks. Yet, the long-term vision remains clear: a more inclusive and accessible financial system powered by code, not institutions.`,
    image: "https://picsum.photos/id/1020/200/300",
    video: "",
  },
  {
    title: "The Metaverse: Building a Digital Universe",
    content: `The Metaverse represents a collective virtual space where users interact through avatars, engage in digital commerce, and explore interconnected worlds. Powered by blockchain, NFTs, and decentralized networks, it blurs the line between physical and digital realities. 

In this new frontier, assets such as land, wearables, and art are owned as NFTs, granting users full ownership and transfer rights. Cryptocurrencies serve as the native currencies for in-game economies, while DAOs govern entire metaverse platforms like Decentraland and The Sandbox. 

Beyond gaming, enterprises are entering the Metaverse to host events, training sessions, and virtual workplaces. Tech giants like Meta, Microsoft, and NVIDIA are investing heavily in virtual reality (VR) and augmented reality (AR) infrastructure, while blockchain ensures interoperability and user ownership. As it evolves, the Metaverse promises a new digital economy where creativity, community, and commerce converge.`,
    image: "",
    video: "",
  },
  {
    title: "Privacy Coins and Confidential Transactions",
    content: `Privacy remains one of the most debated topics in the cryptocurrency world. While blockchains are transparent by design, certain applications require confidentiality. Privacy coins such as Monero (XMR), Zcash (ZEC), and Dash introduce cryptographic methods to obscure transaction details—ensuring user anonymity and financial privacy. 

Techniques like ring signatures, stealth addresses, and zero-knowledge proofs make it virtually impossible to trace specific transactions or link wallets to real-world identities. This innovation supports freedom and privacy but also raises concerns about regulatory oversight and misuse. 

As governments explore digital currencies, privacy-preserving technologies are influencing how public and private blockchains can coexist. Future networks are expected to balance privacy and compliance, ensuring security without compromising individual rights.`,
    image: "https://picsum.photos/id/1016/200/300",
    video: "",
  },
  {
    title: "The Role of Oracles in Smart Contracts",
    content: `Smart contracts are powerful, but they cannot access data outside the blockchain on their own. Oracles bridge this gap by feeding real-world data—like weather, stock prices, or sports results—into blockchain systems. This makes advanced applications like decentralized insurance, prediction markets, and supply chain tracking possible. 

Chainlink, Band Protocol, and API3 are among the leading oracle solutions. They aggregate data from multiple trusted sources and ensure reliability through decentralized validation. Without oracles, most smart contracts would remain limited to on-chain events. 

The oracle problem—how to ensure data accuracy and prevent manipulation—remains a central challenge. Innovations like zero-knowledge proofs and cross-chain oracles are addressing these issues, pushing blockchain closer to real-world usability.`,
    image: "",
    video: "",
  },
  {
    title: "Central Bank Digital Currencies (CBDCs)",
    content: `Central Bank Digital Currencies, or CBDCs, represent a government-issued form of digital money built on blockchain or similar distributed technologies. Unlike cryptocurrencies, CBDCs are fully regulated and backed by the state, combining the efficiency of digital assets with the trust of traditional currency. 

Countries like China, India, and Sweden are leading CBDC pilots, aiming to improve payment efficiency, reduce costs, and enhance monetary policy implementation. For consumers, CBDCs promise instant, low-cost transfers and financial inclusion for the unbanked. 

However, CBDCs also raise concerns about privacy and surveillance, as central authorities may have visibility into every transaction. The global financial landscape is watching closely as these projects redefine the relationship between governments, citizens, and digital money.`,
    image: "https://picsum.photos/id/1030/200/300",
    video: "",
  },
  {
    title: "Blockchain and Artificial Intelligence (AI)",
    content: `The convergence of blockchain and artificial intelligence (AI) is opening new frontiers in data security, automation, and decentralized decision-making. Blockchain provides a transparent and tamper-proof infrastructure for storing and verifying data, while AI brings the intelligence to analyze and act on that data. Together, they form a powerful duo that can redefine industries. 

AI models can be trained on decentralized data marketplaces, ensuring privacy while improving accuracy. Blockchain enables provenance tracking—verifying the origin and integrity of datasets used to train AI. Moreover, decentralized AI networks allow models to be owned and governed collectively, rather than by centralized corporations. 

From healthcare diagnostics to autonomous vehicles, this synergy enhances trust, transparency, and accountability. As the AI economy grows, blockchain ensures that data and decisions remain auditable and free from manipulation.`,
    image: "",
    video: "https://example.com/videos/ai-blockchain.mp4",
  },
  {
    title: "Tokenization of Real-World Assets",
    content: `Tokenization converts real-world assets like real estate, stocks, or art into digital tokens that can be traded on blockchain platforms. Each token represents fractional ownership, enabling greater liquidity and accessibility for investors. 

Through smart contracts, tokenized assets can be transferred globally with minimal fees and without the need for intermediaries. For example, a property worth $1 million can be divided into 1,000 tokens, allowing multiple investors to participate. This democratizes investment opportunities and opens new markets. 

Tokenization also improves transparency, as all ownership records are permanently stored on-chain. Governments and financial institutions are increasingly exploring tokenization to modernize capital markets and bridge traditional finance (TradFi) with decentralized finance (DeFi).`,
    image: "https://picsum.photos/id/1050/200/300",
    video: "",
  },
  {
    title: "Quantum Computing and Blockchain Security",
    content: `Quantum computing poses both opportunities and threats to the blockchain world. While quantum computers promise unprecedented computational power, they could also potentially break current cryptographic algorithms that secure blockchains. 

Projects like Ethereum and Bitcoin rely on elliptic curve cryptography (ECC), which could become vulnerable to quantum attacks in the future. To address this, researchers are developing quantum-resistant algorithms such as lattice-based and hash-based cryptography. 

At the same time, quantum technology may also enhance blockchain efficiency by accelerating consensus algorithms or enabling secure quantum communication. The race is on to create blockchains that are “quantum-safe” while leveraging the benefits of this new computing paradigm.`,
    image: "",
    video: "",
  },
];

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");

    await Post.deleteMany({});
    console.log("🧹 Old data cleared");

    const postsWithAuthors = posts.map((p) => ({
      ...p,
      author: authors[Math.floor(Math.random() * authors.length)],
    }));

    await Post.insertMany(postsWithAuthors);
    console.log("🌱 10 blockchain posts inserted successfully");

    await mongoose.connection.close();
    console.log("🔒 MongoDB connection closed");
  } catch (err) {
    console.error("❌ Error seeding database:", err);
  }
}

seed();
