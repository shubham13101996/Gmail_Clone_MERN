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
