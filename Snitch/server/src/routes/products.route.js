import { Router } from "express";
import { createProductValidator, listProductValidator, unlistProductValidator } from "../validators/product.validator.js";
import { authenticate, authenticateSeller } from "../middleware/auth.middleware.js";
import { createProduct, listAllProducts, listProduct, unlistProduct } from "../controllers/product.controller.js";
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



// Read all published products from db
router.get("/",authenticate, listAllProducts)



// Read all products form db
router.get("/seller", authenticate, authenticateSeller)



router.patch("/unlist/:id",authenticate,authenticateSeller, unlistProductValidator, unlistProduct)

router.patch("/list/:id",authenticate,authenticateSeller, listProductValidator, listProduct)


export default router;
