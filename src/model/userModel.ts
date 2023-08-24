import mongoose from "mongoose";


export interface UserAttribute {
    _id?: any;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    salt: string;
    address: string;
    phone: string;
    accountStatus:boolean;
  }


  export const userSchema = new mongoose.Schema<UserAttribute>({
    firstName: {
      type: String,
      rquired: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    accountStatus: {
      default: false,
      trim: true,
      type: Boolean
    },
  },
  { timestamps: true });


const User = mongoose.model<UserAttribute>("user", userSchema);
export default User;