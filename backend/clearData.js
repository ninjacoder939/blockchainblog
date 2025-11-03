// clearData.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// Define schema inline
const postSchema = new mongoose.Schema({
  title: String,
  desc: String,
  authorname: String,
  image: String,
  video: String,
});

const Post = mongoose.model("Post", postSchema);

async function clearOldData() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const result = await Post.deleteMany({});
    console.log(`🧹 Deleted ${result.deletedCount} posts from database.`);
  } catch (err) {
    console.error("❌ Error clearing posts:", err);
  } finally {
    mongoose.connection.close();
  }
}

clearOldData();
