const Timetable = require("../../modules/timetablemodule");


const saveTimetable = async (req, res) => {
  try {
    console.log("SAVE HIT:", req.body);

    const { classname, columns, rows, announcement } = req.body;

    if (!classname) {
      return res.status(400).send("classname missing");
    }

    const existing = await Timetable.findOne({ classname });

    const result = await Timetable.findOneAndUpdate(
      { classname },
      {
        classname,
        columns: columns || [],
        rows: rows || [],
        announcement: {
          text: announcement?.text || existing?.announcement?.text || "",
          date: announcement?.date || existing?.announcement?.date || "",
          time: announcement?.time || existing?.announcement?.time || "",
        },
      },
      { new: true, upsert: true }
    );

    console.log("SAVED:", result);

    res.status(200).json(result);
  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).send("Server Error");
  }
};

const getTimetable = async (req, res) => {
  try {
    const data = await Timetable.findOne({
      classname: req.params.classname,
    });

    res.json(data || {});
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  saveTimetable,
  getTimetable,
};