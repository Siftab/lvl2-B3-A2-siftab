
import { TProduct } from "./product.interface";
import { Product } from "./product.model";



// product creating 


const createProduct = async (payload: TProduct) => {
    const result = await Product.create(payload)
    return result
}


export const productServices = {
    createProduct
}