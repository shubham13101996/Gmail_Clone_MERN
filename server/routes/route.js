import express from "express";
import { saveSentEmails } from "../controller/email-controller.js";
const routes = express.Router();
routes.post("/save", saveSentEmails);
export default routes;
