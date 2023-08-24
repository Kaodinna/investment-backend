import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import userRouter from "./src/routes/userRoute";





dotenv.config();

const app = express();
const port = process.env.PORT;

mongoose
  .connect("mongodb+srv://investment-platform:<houseparty22>@btc.pp53p4h.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("connected to Mongo");
  })
  .catch((error) => {
    console.log("error");
  });

  app.use(express.json()); // Parse JSON data
  app.use(express.urlencoded({ extended: false }));

app.get('/', (req:Request, res:Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`[server]: Server is running at ${port}`);
});

app.use("/users", userRouter);
