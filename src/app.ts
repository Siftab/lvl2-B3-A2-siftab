import express, { Application, Request, Response } from "express"
export const app: Application = express()
import cors from "cors"
import { productRouter } from "./modules/product/product.route"
const port = 3000


// parser

app.use(express.json())
app.use(cors())

// linking routes 
app.use("/api/products", productRouter)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World! server hitted')
})

