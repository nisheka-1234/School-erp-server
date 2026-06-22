const Announcement = require("../../modules/announcementmodule");

/* SAVE ANNOUNCEMENT */
const saveAnnouncement = async (req, res) => {
  try {
    const { text } = req.body;

    console.log("SAVE BODY:", req.body);

    if (!text || text.trim() === "") {
      return res.status(400).json({ message: "Text is required" });
    }

    const data = new Announcement({
      text,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    });

    await data.save();

    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

/* GET ALL ANNOUNCEMENTS */
const getAnnouncements = async (req, res) => {
  try {
    const data = await Announcement.find().sort({ _id: -1 });

    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  saveAnnouncement,
  getAnnouncements,
};