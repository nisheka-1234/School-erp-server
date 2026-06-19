const Student =
  require("../../modules/studentloginschema");

const studentlogin =
  async (req, res) => {

  try {

    const {
      username,
      password,
    } = req.body;

    const student =
      await Student.findOne({

        username: username,

        password: password,

      });

    if (student) {

      res.json({

        success: true,

        student: student,

      });

    }

    else {

      res.json({

        success: false,

        message:
          "Wrong Username or Password",

      });

    }

  }

  catch (error) {

    res.send(
      "Server Error"
    );

  }

};

module.exports = {
  studentlogin,
};