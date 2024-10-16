import express from "express";
const router = express.Router();
import {
  loginUser,
  logout,
  RegisterUser,
} from "../Controllers/AuthController.js";

router.post("/register", RegisterUser);
router.post("/login", loginUser);
router.post("/logout", logout);

export default router; 
