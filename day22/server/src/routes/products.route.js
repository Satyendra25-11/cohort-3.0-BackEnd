import { Router } from "express";
// import productModel from "../models/product.model.js";
import { createProductValidator } from "../validators/product.validator.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { createProduct, listAllProducts } from "../controllers/product.controller.js";
import multer from "multer";

const upload = multer({ 
    storage: multer.memoryStorage(),
    limits:{
        files:5,
        fileSize: 1 * 1024 * 1024 // 1MB
    },
   

});

const router = Router();

router.post( "/", authenticate, (req, res, next) => {
    if (req.user.role !== "seller") {
      return res.status(403).json({
        message: "User is not authorize to create products",
      });
    }
    next();
  },
  upload.array("images"),
  (req, res, next) => {
    req.body?.price && (req.body.price = JSON.parse(req.body.price));
    req.body?.sizes && (req.body.sizes = JSON.parse(req.body.sizes));

    next();
  },createProductValidator,
  createProduct,
);



router.get("/",authenticate, listAllProducts)



export default router;
