import mongoose, { Schema, Document } from "mongoose";

export interface User extends Document {
  email: string;
  userID: string;
  fullName: string;
  password: string;
  collegeName: string;
  isPrime: boolean;
  isNitian: boolean;
  isFromCse: boolean;
  b1: boolean;
  b2: boolean;
}

const UserSchema: Schema<User> = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [
      /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
      "Please use a valid email address",
    ],
  },
  userID: {
    type: String,
    unique: true,
    required: [true, "Error generating the user ID , please retry "],
  },
  fullName: {
    type: String,
    required: [true, "Fullname is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  collegeName: {
    type: String,
    required: [true, "Please enter your college name"],
  },
  isNitian: {
    type: Boolean,
    required: true,
    default: false,
  },
  isFromCse: {
    type: Boolean,
    required: true,
    default: false,
  },
  isPrime: {
    type: Boolean,
    required: true,
    default: false,
  },
  b1: {
    type: Boolean,
    required: true,
    default: false,
  },
  b2: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;
