import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoute from "./routes/userRoute.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).json("hello world");
});

mongoose.connect(process.env.MONGO_URI, () => {
  console.log("connected to database");
});

app.use("/api/v1/users", userRoute);

app.listen(PORT, () => {
  console.log("server is listening on port: " + PORT);
});
