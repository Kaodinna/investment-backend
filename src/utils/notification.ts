import nodemailer from 'nodemailer';
import {GMAIL_USER,GMAIL_PASS,userSubject,fromAdminMail} from '../config/db.config'


const transport = nodemailer.createTransport({
    service: 'gmail',   
    auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
})


export const mailSent = async (
    from:string,
    to:string,
    subject:string,
    html:string
) => {
try {
const response = await transport.sendMail({
    from: fromAdminMail, to, subject: userSubject, html
})
return response
} catch (err) {
    console.log(err);
}
}

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

export const emailHtml = (signature: string) => {
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
  