const studentmodule =
require(
  "../../modules/studentloginroutemodule"
);



const loginstudent =
async (req, res) => {

  try {

    const {
      username,
      password
    } = req.body;

    console.log(
      "LOGIN DATA:",
      username,
      password
    );

    const student =
      await studentmodule.findOne({

        username: username,
        password: password

      });

    console.log(
      "FOUND STUDENT:",
      student
    );

    if (!student) {

      return res
        .status(401)
        .json({

          message:
            "Wrong Username or Password"

        });

    }

    res.status(200).json({

      _id: student._id,

      name:
        student.studentname,

      regno:
        student.registernumber,

      username:
        student.username,

      classname:
        student.classname

    });

  }

  catch (error) {

    console.log(error);

    res
      .status(500)
      .json({

        message:
          "Server Error"

      });

  }

};

module.exports = {

  loginstudent

};