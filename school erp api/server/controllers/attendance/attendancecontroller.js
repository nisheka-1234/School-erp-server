const Attendance = require("../../modules/attendancemodule");


const saveAttendance = async (req, res) => {
  try {
    const {
      studentId,
      studentname,
      classname,
      month,
      attendance
    } = req.body;

    if (!studentId || !month) {
      return res.status(400).send("Missing data");
    }

    const result = await Attendance.findOneAndUpdate(
      { studentId, month },
      {
        studentId,
        studentname,
        classname,
        month,
        attendance
      },
      { upsert: true, new: true }
    );

    res.status(200).json(result);

  } catch (err) {
    res.status(500).send(err.message);
  }
};


const getAttendance = async (req, res) => {

  try {

    const { studentId } = req.query;

    if (!studentId) {
      return res.status(400).send("Student ID required");
    }

    const data = await Attendance.find({
      studentId: studentId
    });

    res.status(200).json(data);

  } catch (err) {

    res.status(500).send(err.message);

  }
};

module.exports = {
  saveAttendance,
  getAttendance
};