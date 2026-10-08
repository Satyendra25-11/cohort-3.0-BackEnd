import {Router} from "express"
import {registerValidator, loginValidator} from '../validators/auth.validator.js'
import { register , login, refresh, getMe} from "../controllers/auth.controller.js"
import { authenticate } from "../middleware/auth.middleware.js"



const router = Router()


router.post("/register",registerValidator,register)


router.post("/login",loginValidator, login)

router.post("/refresh",refresh)

router.get("/me",authenticate, getMe)





export default router