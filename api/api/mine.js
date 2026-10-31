export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const chain = global.chain;
  if (!chain) return res.status(500).json({ error: "Chain not started" });

  const last = chain[chain.length-1];
  const newBlock = {
    height: chain.length,
    timestamp: Math.floor(Date.now()/1000),
    previousHash: last.hash,
    hash: "00000000QKYB" + Math.random().toString(36).substr(2,9).toUpperCase() + Date.now(),
    nonce: Math.floor(Math.random()*1000000000),
    transactions: [{ from: "MINER", to: req.query.miner || "QKYB_MINER", amount: 50 }],
    confirmations: 0
  };
  chain.push(newBlock);
  res.status(200).json({ success: true, block: newBlock, message: "New Block Mined! Like Bitcoin!" });
}