import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      // required: true,
    },
    age: {
      type: Number,
      // required: true,
    },
    college: {
      type: String,
    },
    documents: [
      {
        type: String,
      },
    ],
    mobileNumber: {
      type: Number,
      required: true,
    },
    rollNO: {
      type: Number,
      required: true,
    },
    emailID: {
      type: String,
      required: true,
    },
    githubLink: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = new mongoose.model("User", userSchema);

export default User;
