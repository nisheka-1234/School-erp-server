const Marks =
require("../../modules/marksmodule");



const saveMarks =
async (req, res) => {

  try {

    const {

      studentId,
      studentname,
      registernumber,
      examtitle,
      rows,
      totalmarks,
      totaloutof,
      average

    } = req.body;

    if (
      !studentId ||
      !examtitle
    ) {

      return res
      .status(400)
      .send("Missing Data");

    }

    await Marks.findOneAndUpdate(

      {
        studentId,
        examtitle
      },

      {
        studentId,
        studentname,
        registernumber,
        examtitle,
        rows,
        totalmarks,
        totaloutof,
        average
      },

      {
        new: true,
        upsert: true
      }

    );

    res.send("Marks Saved");

  }

  catch (err) {

    console.log(err);

    res.status(500).send(
      "Server Error"
    );

  }

};




const searchMarks =
async (req, res) => {

  try {

    const examtitle =
      req.params.examtitle;

    const studentId =
      req.query.studentId;

    const data =
    await Marks.findOne({

      examtitle,
      studentId

    });

    if (!data) {

      return res
      .status(404)
      .send("No Data");

    }

    res.json(data);

  }

  catch (err) {

    console.log(err);

    res.status(500).send(
      "Server Error"
    );

  }

};




const getAllMarks =
async (req, res) => {

  try {

    const studentId =
      req.params.studentId;

    const data =
    await Marks.find({

      studentId

    }).sort({

      _id: -1

    });

    res.json(data);

  }

  catch (err) {

    console.log(err);

    res.status(500).send(
      "Server Error"
    );

  }

};


module.exports = {

  saveMarks,
  searchMarks,
  getAllMarks

};