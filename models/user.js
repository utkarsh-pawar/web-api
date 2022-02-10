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
      minlength: 10,
      maxlength: 10,
      required:true
    },
  },
  { timestamps: true }
);

const User = new mongoose.model("User", userSchema);

export default User;
