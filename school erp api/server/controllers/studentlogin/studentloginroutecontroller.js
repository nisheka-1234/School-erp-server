const studentmodule = require("../../modules/studentmodule");

const loginstudent = async (req, res) => {
  try {

    const { username, password } = req.body;

    console.log("LOGIN:", username, password);

    const student = await studentmodule.findOne({
      username: username.trim(),
      password: password.trim()
    });

    console.log("FOUND:", student);

    if (!student) {
      return res.status(401).json({
        message: "Wrong Username or Password"
      });
    }

    res.status(200).json({
      _id: student._id,
      studentname: student.studentname,
      registernumber: student.registernumber,
      username: student.username,
      classname: student.classname
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Server Error"
    });

  }
};

module.exports = {
  loginstudent
};