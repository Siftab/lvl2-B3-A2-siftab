
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
// getting order with query data 
const queryOrders = async (data: string) => {
    const result = await Order.find({ email: data })
    return result
}


export const orderServices = {
    createOrder,
    getAllOrder,
    queryOrders
}