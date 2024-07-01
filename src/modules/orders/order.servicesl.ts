
import { ResponseHook } from "../../app/hooks/response"
import { Order } from "./order.model"


// createorder

const createOrder = async (payload: object) => {
    const result = await Order.create(payload)
    return result
}
// retrive all orders

const getAllOrder = async () => {
    const result = await Order.find()
    return result
}


export const orderServices = {
    createOrder,
    getAllOrder
}