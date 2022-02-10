import express from "express";
import mongoose from "mongoose";
import User from "../models/user.js";

//ENTER DETAILS
export const createUser = async (req, res) => {
  try {
    // console.log(req.files.originalname);
    const { name, age, college, mobileNumber } = req.body;
    if (!name | !age | !college | !mobileNumber) {
      return res.status(400).json("Fill all the required fields");
    }
    if (mobileNumber.length > 10 || mobileNumber.length < 10) {
      return res.status(400).json("enter valid phone number");
    }
    if (req.files.length === 0) {
      return res.status(400).json("please submit documents");
    }

    let documents = [];

    await req.files.map((document) => {
      documents.push(document.location);
    });

    const user = await new User({
      name,
      age,
      college,
      documents,
      mobileNumber,
    });
    await user.save();
    res.status(200).json({ userID: user._id });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

//get details of all
export const findAll = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

//FIND BY USER ID
export const findUser = async (req, res) => {
  try {
    const { userid } = req.params;
    if (mongoose.Types.ObjectId.isValid(userid) === false) {
      return res.status(400).json("enter valid id");
    }
    const user = await User.findById({ _id: userid });

    if (!user) {
      return res.status(404).json("no details found");
    }

    const { name, age, college } = user;

    res.status(200).json({ name, age, college });
  } catch (err) {
    res.json(err.message);
  }
};
