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
  res.status(200).json("Welcome!!, post to https://custom-web-api.herokuapp.com/api/v1/users ");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => console.log(err.message));

//document submission  =>POST to  https://custom-web-api.herokuapp.com/api/v1/users -
// post multipart/post-data - name - string,
//                            age-number,
//                            college-string,
//                            documents- any type,
//                            mobilenumber-valid mobile number
//               as headers - rollno- number,
//                            emailid-string

app.use("/api/v1/users", userRoute);

app.listen(PORT, () => {
  console.log("server is listening on port: " + PORT);
});
