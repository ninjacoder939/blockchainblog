require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Define schema
const PostSchema = new mongoose.Schema({
  title: String,
  desc: String,
  author: String,
  image: String,   // 🆕 e.g. "https://example.com/img.jpg"
  video: String,   // 🆕 e.g. "https://example.com/clip.mp4"
});

const Post = mongoose.model("Post", PostSchema);

// ✅ GET all blog data — your frontend will call this endpoint
app.get("/getdata", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ message: "Error fetching data" });
  }
});

// Optional: seed route (for testing/demo)
app.get("/seed", async (req, res) => {
  const demo = [
    { title: "What is Blockchain?", desc: "Blockchain is a distributed ledger...", author: "Satoshi" },
    { title: "Smart Contracts", desc: "Smart contracts are self-executing agreements...", author: "Vitalik" },
  ];
  await Post.insertMany(demo);
  res.send("✅ Demo data inserted!");
});

// Start server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
