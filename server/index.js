import express from "express";
import Connection from "./database/db.js";
const app = express();
const port = process.env.PORT;

Connection();
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
