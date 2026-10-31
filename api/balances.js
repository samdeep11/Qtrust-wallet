export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const address = req.query.address;
  if (!address) return res.status(400).json({ error: "address chahiye" });

  // Demo balance - Baad me real chain se calculate karna
  res.status(200).json({ address, balance: 1000, unit: "PQC1" });
}