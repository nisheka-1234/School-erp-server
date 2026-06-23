const cors = require("cors");
const express = require("express");

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000; 
const dbconnect = require("./dbconnection");
dbconnect();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const login = require("../router/login");
const home = require("../router/home");
const details = require("../router/details");



const timetable = require("../router/timetable");
const announcement = require("../router/announcement");

const attendance = require("../router/attendance");



const marksRouter =
require("../router/marks");
const fees =
require("../router/fees");
const studentloginroute =
require(
  "../router/studentloginroute"
);
app.use(
  "/student",
  studentloginroute
);
app.use("/fees", fees);

app.use(
  "/marks",
  marksRouter
);
app.use("/attendance", attendance);

app.use("/login", login);
app.use("/home", home);
app.use("/details", details);


app.use("/timetable", timetable);
app.use("/announcement", announcement);




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});