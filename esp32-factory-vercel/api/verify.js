export default function handler(req, res) {
  const validKeys = ["0786421798", "1234567890", "9876543210"];
  const { key } = req.body;

  if (key && validKeys.includes(key)) {
    res.status(200).json({
      access: true,
      firmware_url: "https://example.com/firmware.bin"
    });
  } else {
    res.status(403).json({ access: false });
  }
}

