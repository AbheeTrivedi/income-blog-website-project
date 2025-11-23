// models/User.js
import mongoose from "mongoose"

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,               
  },
  email: {
    type: String,
    required: true,
    unique: true, // same email se register na ho
    lowercase: true,
  },
  password: {
    type: String,
    required: true,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    minlength: 6, // password min 6 chars
  },
}, { timestamps: true });

// confirm password ko DB me save nahi karte, sirf validation ke liye frontend/backend pe check hota hai

export default mongoose.model("User", userSchema);

