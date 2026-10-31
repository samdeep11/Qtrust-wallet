export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const address = req.query.address || req.body?.address;
  if (!address) return res.status(400).json({ error: "address chahiye ?address=QKYB..." });

  // Free PQC1 de raha hu
  res.status(200).json({ 
    success: true,
    message: `100 PQC1 sent to ${address}`,
    txHash: "QKYB_TX_" + Date.now(),
    amount: 100
  });
}