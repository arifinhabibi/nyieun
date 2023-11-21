import express from "express";
import Controller from "./apps/controllers/Controller.js";

const router = express.Router();

router.get("/", Controller.index);

export default router;
