import express from "express";
import { registerUser, loginUser } from "../controllers/user.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import { getDashboard } from "../controllers/dashboard.controller.js";

const router = express.Router();

router.post("/register", registerUser);  // <-- matches frontend POST URL
router.post("/login", loginUser);
router.get("/dashboard", authMiddleware, getDashboard);

export default router;
