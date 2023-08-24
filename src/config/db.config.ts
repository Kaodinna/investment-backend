import dotenv from "dotenv";
dotenv.config();
export const APP_SECRET = process.env.APP_SECRET!;
export const GMAIL_USER = process.env.GMAIL_USER;
export const GMAIL_PASS = process.env.GMAIL_PASS;
export const JWT_KEY = process.env.JWT_KEY;
export const fromAdminMail = process.env.fromAdminMail as string;
export const userSubject = process.env.userSubject as string;
