import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { getDashboard } from "../controllers/dashboard.controller.js";

const router = express.Router();

router.get("/", authMiddleware, getDashboard); // GET /api/dashboard

export default router;
