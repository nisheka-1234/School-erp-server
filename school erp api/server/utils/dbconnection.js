const mongoose = require('mongoose');
require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);

const dbConnect = async () => {
  try {
   await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ DB Connected");
  } catch (error) {
    console.error("❌ DB Connection Failed:", error.message);
    process.exit(1);
  }
};

module.exports = dbConnect;