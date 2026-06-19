const studentlogout = async (
  req,
  res
) => {
  try {
    res.send(
      "Student Logout Working"
    );
  } catch (error) {
    console.log(error);
  }
};

const teacherlogout = async (
  req,
  res
) => {
  try {
    res.send(
      "Teacher Logout Working"
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  studentlogout,
  teacherlogout,
};