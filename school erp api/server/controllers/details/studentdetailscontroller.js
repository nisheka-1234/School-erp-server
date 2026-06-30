const studentmodule = require("../../modules/studentmodule");


const studentdetails = async (req, res) => {
  try {
    let classname = req.query.classname;

    console.log("RAW CLASSNAME:", classname);

   
    if (!classname) {
      const all = await studentmodule.find();
      return res.json(all);
    }

    classname = classname.trim().toLowerCase();

    
    const students = await studentmodule.find({
      classname: {
        $regex: new RegExp(`^${classname}$`, "i")
      }
    });

    console.log("FOUND STUDENTS:", students.length);

    res.json(students);

  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

const savestudent = async (req, res) => {
  try {
    const students = req.body;

    if (!Array.isArray(students)) {
      return res.status(400).send("Send array");
    }
const created = await studentmodule.findOneAndUpdate(
  { registernumber: s.regno },
  {
    studentname: s.name,
    registernumber: s.regno,
    username: s.username || "",
    password: s.password || "",
    classname: s.classname?.trim().toLowerCase()
  },
  {
    upsert: true,
    new: true
  }
);

result.push(created);
    

    return res.status(201).json({
      message: "Saved Successfully",
      count: result.length
    });

  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
};

module.exports = {
  studentdetails,
  savestudent
};