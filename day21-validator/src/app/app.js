import express from 'express'
import authRouter from '../routes/auth.route.js'
import productRouter from '../routes/'

const app = express()
app.use(express.json())

app.use("/api/auth", authRouter)

app.use("/api",)

export default app