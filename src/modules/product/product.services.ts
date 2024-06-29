
import { TProduct } from "./product.interface";
import { Product } from "./product.model";



// product creating 


const createProduct = async (payload: TProduct) => {
    const result = await Product.create(payload)
    return result
}
// retrive all product
const getAllProduct = () => {
    const result = Product.find();
    return result
}

// get product by id
const getProductById = async (payLoad: string) => {
    const result = await Product.findById(payLoad)
    return result;
}

export const productServices = {
    createProduct,
    getAllProduct,
    getProductById
}