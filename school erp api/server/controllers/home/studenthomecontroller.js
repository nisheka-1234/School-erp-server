const studenthome = async (
  req,
  res
) => {
  try {
    res.send(
      "Student Home Working"
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  studenthome,
};