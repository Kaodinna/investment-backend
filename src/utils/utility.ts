import Joi from "joi";
import bcrypt from "bcrypt";
import { AuthPayload } from "../interface/Auth.dto";
import jwt, { JwtPayload } from "jsonwebtoken";
import { APP_SECRET } from "../config/db.config";






export const registerSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    password: Joi.string().pattern(new RegExp("[a-zA-Z0-9]{3,30}$")),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    address: Joi.string().required(),
  });


  export const option = {
    abortEarly: false,
    errors: {
      wrap: {
        label: "",
      },
    },
  };

  export const GenerateSalt = async () => {
    return await bcrypt.genSalt();
  };

  export const GeneratePassword = async (password: string, salt: string) => {
    return await bcrypt.hash(password, salt);
  };
  export const Generatesignature = async (payload: AuthPayload) => {
    return jwt.sign(payload, APP_SECRET);
  };

  export const loginSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp("[a-zA-Z0-9]{3,30}$")),
  });

  export const validatePassword = async (
    enteredPassword: string,
    savedPassword: string,
    salt: string
  ) => {
    return (await GeneratePassword(enteredPassword, salt)) === savedPassword;
  };