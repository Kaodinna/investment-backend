import express, { Request, Response, Router } from "express";
import { Register,verifyAccount,Login } from "../controllers/userController";

const router: Router = express.Router();
router.post("/signup", Register);
router.get("/verify-account/:token", verifyAccount);
router.post("/login", Login);

export default router;
