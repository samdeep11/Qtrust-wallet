export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({ 
    totalSupply: 21000000, 
    circulating: 1250000, 
    symbol: "PQC", 
    chain: "QTrust" 
  });
}