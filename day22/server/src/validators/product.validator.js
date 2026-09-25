import { body, validationResult } from "express-validator";

export const createProductValidator = [
    body("title")
        .exists()
        .withMessage("Title is required")
        .bail()
        .isString()
        .withMessage("Title must be a string")
        .bail()
        .trim()
        .isLength({ min: 2, max: 100 })
        .withMessage("Title length must be between 2 to 100")
        .bail()
        .isAlpha("en-US", { ignore: " " })
        .withMessage(
            "Title can have only English small case and capital case character",
        ),
    body("description")
        .exists().withMessage("Description is required").bail()
        .isString().withMessage("Description must be String").bail()
        .trim()
        .isLength({ min: 20, max: 500 }).withMessage("Description length must be between 20 to 500 character").bail(),
    body("price.amount")
        .exists().withMessage("Price amount is required").bail()
        .isFloat({min:0}).withMessage("Price amount must be a floating number and must be greater than 0."),
    body("price.currency")
        .exists().withMessage("Currency is required")
        .isString().withMessage("Currency must be a string value")
        .isIn(["INR", "USD"]).withMessage("Currency either be INR or USD"),
    body("sizes")
    .exists().withMessage("Sizes are required").bail()
    .isArray().withMessage("Sizes must be an array of object"),
    body("sizes.*.size")
        .exists().withMessage("Size must be present in every entry of sizes array").bail()
        .isString().withMessage("Size must be an string value").bail()
        .isIn(["XS","S","M","L","XL","XXL"]).withMessage("Size can be one of these XS, S, M, L, XL, XXL"),
    body("sizes.*.stock")
        .exists().withMessage("Stock must be present in every entry of the size array").bail()
        .isInt({min: 0}).withMessage("Stock must be an integer value").bail(),
    (req,res, next)=>{
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            console.log(errors.array());
            return res.status(400).json({
                message:"Invalid request from product validator",
                errors : errors.array()
            })
            
        }

        next()
    }
];
