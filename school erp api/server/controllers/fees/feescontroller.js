const Fees =
require("../../modules/feesmodule");



const saveFees = async (
  req,
  res
) => {

  try {

    const feesData =
      req.body;

    console.log(
      "BODY:",
      feesData
    );

    for (const item of feesData) {


      if (
        item._id &&
        item._id !== ""
      ) {

        await Fees.findByIdAndUpdate(

          item._id,

          {

            studentId:
              item.studentId,

            studentname:
              item.studentname,

            classname:
              item.classname,

            paymentDate:
              item.paymentDate,

            feesType:
              item.feesType,

            amount:
              item.amount,

            paidAmount:
              item.paidAmount

          }

        );

      }

      

      else {

        const newFees =
          new Fees({

            studentId:
              item.studentId,

            studentname:
              item.studentname,

            classname:
              item.classname,

            paymentDate:
              item.paymentDate,

            feesType:
              item.feesType,

            amount:
              item.amount,

            paidAmount:
              item.paidAmount

          });

        await newFees.save();

      }

    }

    res.send(
      "Fees Saved Successfully"
    );

  } catch (err) {

    console.log(err);

    res
      .status(500)
      .send("Save Error");

  }

};



const getFees = async (
  req,
  res
) => {

  try {

    const studentId =
      req.params.studentId;

    const data =
      await Fees.find({
        studentId
      });

    res.json(data);

  } catch (err) {

    console.log(err);

    res
      .status(500)
      .send("Get Error");

  }

};

module.exports = {

  saveFees,

  getFees

};