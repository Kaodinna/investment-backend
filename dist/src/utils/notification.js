"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailHtml = exports.mailSent = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const db_config_1 = require("../config/db.config");
const transport = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: db_config_1.GMAIL_USER,
        pass: db_config_1.GMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
});
const mailSent = (from, to, subject, html) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield transport.sendMail({
            from: db_config_1.fromAdminMail, to, subject: db_config_1.userSubject, html
        });
        return response;
    }
    catch (err) {
        console.log(err);
    }
});
exports.mailSent = mailSent;
// export const emailHtml = (signature:string) => {
//     let response = `
//     <div style="max-width:700px;
//     margin: auto; border:10px; solid #add;
//     padding:50px 20px; font-size:110%;
//     "> 
//     <h2 style="text-align: center; text-transform: uppercase; 
//     color: teal;">Welcome to Food App
//     </h2>
//     <p>Congratulations! You're almost set to start using Food App. your otp is ${signature}</p>
//     </div>
//     `
//     return response
// }
const emailHtml = (signature) => {
    let response = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <style>
          /* Add your CSS styles here */
          body {
            font-family: Arial, sans-serif;
            font-size: 16px;
            line-height: 1.5;
          }
          .email-container {
            max-width: 700px;
            margin: auto;
            border: 10px solid #add;
            padding: 50px 20px;
            font-size: 110%;
          }
          .email-heading {
            text-align: center;
            text-transform: uppercase;
            color: teal;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <h2 class="email-heading">Welcome to Food App</h2>
          <p>Congratulations! You're almost set to start using Food App. Your OTP is http://localhost:8000/api/auth/verify-account/${signature}</p>
        </div>
      </body>
      </html>
      `;
    return response;
};
exports.emailHtml = emailHtml;
