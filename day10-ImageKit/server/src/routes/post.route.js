import express from 'express'
import { upload } from '../config/multer.config.js'
import { createPost } from '../controllers/post.controller.js'

export const router = express.Router()

router.post('/create',upload.single("image"),createPost)