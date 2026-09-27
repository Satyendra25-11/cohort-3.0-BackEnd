import { Router } from "express";
// import productModel from "../models/product.model.js";
import { createProductValidator, unlistProductValidator } from "../validators/product.validator.js";
import { authenticate, authenticateSeller } from "../middleware/auth.middleware.js";
import { createProduct, listAllProducts, unlistProduct } from "../controllers/product.controller.js";
import multer from "multer";

const upload = multer({ 
    storage: multer.memoryStorage(),
    limits:{
        files:5,
        fileSize: 1 * 1024 * 1024 // 1MB
    },
   

});

const router = Router();

router.post( "/", authenticate, authenticateSeller
,
  upload.array("images"),
  (req, res, next) => {
    req.body?.price && (req.body.price = JSON.parse(req.body.price));
    req.body?.sizes && (req.body.sizes = JSON.parse(req.body.sizes));

    next();
  },createProductValidator,
  createProduct,
);



router.get("/",authenticate, listAllProducts)


router.patch("/unlist/:id",authenticate,authenticateSeller, unlistProductValidator, unlistProduct)



export default router;
