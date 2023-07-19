import express from "express";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
dotenv.config();

//console.log(app.get("env")); //development
console.log(process.env);
//all these are environment variable set by node js that node js is using internally
// these variable comes from process, it is the core module of node js
//I can set the environment variable manually also from terminal

//USER="admin" nodemon server (on terminal)

app.get("/", (req, res) => {
  res.send({ success: true });
});

app.get("/square/:number", (req, res) => {
  const number = req.params.number;
  const result = number * process.env.VALUE;
  res.send(`The result is ${result}`);
});

app.listen(process.env.PORT, () => {
  console.log("listenning on port 4000");
});
