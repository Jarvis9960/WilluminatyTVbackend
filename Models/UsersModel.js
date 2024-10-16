import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: [true, "First name is required"],
    trim: true,
  },
  LastName: {
    type: String,
    required: [true, "Last name is required"],
    trim: true,
  },
  Username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
  },
  Email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    lowercase: true,
  },
  Password: {
    type: String,
    required: true,
    minlength: [8, "Password must be at least 8 characters"],
  },
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
