const mongoose = require('mongoose');
require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);

const dbConnect = async () => {
  try {
   await mongoose.connect(
  'mongodb+srv://nish_:1234_@cluster0.xqius16.mongodb.net/?appName=Cluster0'
);
    console.log("✅ DB Connected");
  } catch (error) {
    console.error("❌ DB Connection Failed:", error.message);
    process.exit(1);
  }
};

module.exports = dbConnect;