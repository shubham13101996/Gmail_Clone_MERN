import Email from "../model/email.js";

export const saveSentEmails = (req, res) => {
  try {
    const email = new Email(req.body);

    email.save();
    res.status(200).json({
      message: "Email Saved Successfully",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getEmails = async (req, res) => {
  try {
    let emails;
    if (req.params.type === "bin") {
      emails = await Email.find({ bin: true });
    } else if (req.params.type === "allmail") {
      emails = await Email.find({});
    } else {
      emails = await Email.find({ type: req.params.type });
    }
    return res.status(200).json(emails);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

export const moveEmailsToBin = async (req, res) => {
  try {
    await Email.updateMany(
      { _id: { $in: req.body } },
      { $set: { bin: true, starred: false, type: "" } }
    );
    return res.status(200).json({ message: "email deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};
