import express from "express";
import {
  getEmails,
  moveEmailsToBin,
  saveSentEmails,
} from "../controller/email-controller.js";
const routes = express.Router();
routes.post("/save", saveSentEmails);
routes.get("/emails/:type", getEmails);
routes.post("/save-draft", saveSentEmails);
routes.post("/bin", moveEmailsToBin);
export default routes;
