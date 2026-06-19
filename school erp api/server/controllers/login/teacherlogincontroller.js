const Teacher =
  require("../../modules/teacherloginschema");

const teacherlogin = async (
  req,
  res
) => {

  try {

    const {
      username,
      password,
    } = req.body;

    const teacher =
      await Teacher.findOne({

        username: username,

        password: password,

      });

    if (teacher) {

      res.send(
        "Teacher Login Successful"
      );

    }

    else {

      res.send(
        "Wrong Username or Password"
      );

    }

  }

  catch (error) {

    res.send(
      "Server Error"
    );

  }

};

module.exports = {
  teacherlogin,
};