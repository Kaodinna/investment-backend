"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSubject = exports.fromAdminMail = exports.JWT_KEY = exports.GMAIL_PASS = exports.GMAIL_USER = exports.APP_SECRET = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.APP_SECRET = process.env.APP_SECRET;
exports.GMAIL_USER = process.env.GMAIL_USER;
exports.GMAIL_PASS = process.env.GMAIL_PASS;
exports.JWT_KEY = process.env.JWT_KEY;
exports.fromAdminMail = process.env.fromAdminMail;
exports.userSubject = process.env.userSubject;
