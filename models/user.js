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
  },
  { timestamps: true }
);

const User = new mongoose.model("User", userSchema);

export default User;
