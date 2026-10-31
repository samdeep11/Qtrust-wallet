export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json([
    { height: 1, hash: "QKYB_GENESIS", tx: [] },
    { height: 2, hash: "QKYB_2", tx: [] }
  ]);
}