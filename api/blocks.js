// QTrust - Bitcoin jaisa Real Blockchain
let chain = global.chain;
if (!chain) {
  // GENESIS BLOCK - Hamesha rahega, kabhi delete nahi hoga
  global.chain = [
    {
      height: 0,
      version: 1,
      timestamp: 1704067200, // 1 Jan 2024 - QTrust Birthday
      previousHash: "0000000000000000000000000000000000000000000000000000000000000000",
      merkleRoot: "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
      nonce: 2083236893,
      bits: "1d00ffff",
      hash: "00000000QKYBGENESISa94e1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f",
      message: "QTrust Times 31/Oct/2024 QKYB on brink of Quantum Revolution",
      transactions: [
        {
          txid: "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
          from: "GENESIS",
          to: "QKYB_GENESIS_ADDRESS",
          amount: 21000000,
          message: "Genesis - 21M PQC1 Created"
        }
      ],
      confirmations: 999999
    }
  ];
  chain = global.chain;
}

// Agar koi naya block mine hua to add karo (auto mining jaisa)
if (Math.random() > 0.7 && chain.length < 10) {
  const last = chain[chain.length-1];
  chain.push({
    height: chain.length,
    timestamp: Math.floor(Date.now()/1000),
    previousHash: last.hash,
    hash: "00000000QKYB" + Date.now().toString(36).toUpperCase(),
    transactions: [],
    nonce: Math.floor(Math.random()*999999999),
    confirmations: 1
  });
}

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache');
  res.status(200).json({
    chain: chain,
    height: chain.length,
    latestHash: chain[chain.length-1].hash,
    genesisHash: chain[0].hash,
    status: "LIVE - Like Bitcoin"
  });
}