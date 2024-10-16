import express from "express";
const router = express.Router();
import { protectedRoute } from "../Middlewares/ProtectedMiddleware.js";
import { getUser } from "../Controllers/UserController.js";

router.get("/getuser", protectedRoute, getUser)

export default router; 