




import { Request, Response } from "express"
import { ResponseHook } from "../../app/hooks/response"
import { orderServices } from "./order.servicesl"

//creating order
const createOrder = async (req: Request, res: Response) => {

    try {
        const result = await orderServices.createOrder(req.body)
        ResponseHook(res, true, "Order created successfully!", result)
    } catch (error) {
        ResponseHook(res, false, "failed to create order ")

    }
}
// fetching all orders 
const getAllOrder = async (req: Request, res: Response) => {
    try {
        const result = await orderServices.getAllOrder()
        ResponseHook(res, true, "fetched all orders succesfully", result)

    } catch (error) {

        ResponseHook(res, false, "failed to fetch orders")

    }
}







export const orderControllers = {
    createOrder,
    getAllOrder
}