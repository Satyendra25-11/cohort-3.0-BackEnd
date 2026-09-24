import {body, validationResult} from 'express-validator'

export const registerValidator = [
    body("email")
    .exists().withMessage("Email is required")
    .isEmail().withMessage("Invalid email address"),
    body("phone")
    .exists().withMessage("mobile number is required")
    .isMobilePhone("en-IN").withMessage("Invalid phone number"),
    body("password")
    .exists().withMessage("password is required")
    .trim().isLength({min:6}).withMessage("Password at least 6 character long"),
    (req,res, next)=>{
        const errors = validationResult()

        if(!errors.isEmpty){
            return res.status(400).json({
                message:"Invalid Request",
                errors: errors.array()
            })
        }

        next()
    }
]