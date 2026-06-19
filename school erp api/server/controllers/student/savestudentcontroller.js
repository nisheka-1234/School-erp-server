const Student =
require("../../modules/studentloginschema");

const savestudent = async (req, res) => {
  try {
    const students = req.body;

    if (!Array.isArray(students)) {
      return res.status(400).send("Send array of students");
    }

    const inserted = [];

    for (const s of students) {
      if (!s.name || !s.regno) continue;

      const saved = await studentmodule.create({
  studentname: s.name,
  registernumber: s.regno,
  username: s.username,
  password: s.password,

  classname: s.classname?.trim().toLowerCase()
});

      inserted.push(saved);
    }

    res.status(201).json({
      message: "Saved successfully",
      count: inserted.length
    });

  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  savestudent,
};