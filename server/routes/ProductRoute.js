import express from "express";
import { getProduct, addProduct } from "../controllers/ProductController.js";

const router = express.Router();

router.get("/products", getProduct);
router.post("/products", addProduct);

export default router;