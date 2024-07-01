import express from "express";
import { orderControllers } from "./order.controllers";



const router = express.Router()

router.get('/', orderControllers.getAllOrder)

router.post('/', orderControllers.createOrder)


export const orderRouter = router