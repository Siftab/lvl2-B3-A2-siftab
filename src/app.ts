import express, { Application, Request, Response } from "express"
export const app: Application = express()
import cors from "cors"
import { productRouter } from "./modules/product/product.route"
import { orderRouter } from "./modules/orders/order.route"


// parser

app.use(express.json())
app.use(cors())

// linking routes 
app.use("/api/products", productRouter)
app.use("/api/orders", orderRouter)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World! server hitted')
})

