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
        .isIn(["INR", "USD"]).withMessage("Currency either be INR or USD")
];
