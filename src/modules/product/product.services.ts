
import { TProduct } from "./product.interface";
import { Product } from "./product.model";



// product creating 


const createProduct = async (payload: TProduct) => {
    const result = await Product.create(payload)
    return result
}
// retrive all product
const getAllProduct = async () => {
    const result = await Product.find();
    return result
}
// retrive all product
const findByQuery = async (data: string) => {
    const result = await Product.find({
        tags: {
            $regex: data,
            $options: "i"
        }
    })
    return result
}

// get product by id
const getProductById = async (payLoad: string) => {
    const result = await Product.findById(payLoad)
    return result;
}
// updating product  ---need clarification
const updateProduct = async (id: string, payLoad: TProduct) => {
    payLoad.inventory.quantity = payLoad.inventory.quantity - 1;
    const result = await Product.findByIdAndUpdate(id, { $set: { "inventory.quantity": payLoad.inventory.quantity } })
    return result

}
// delete a product 
const deleteProduct = async (id: string) => {
    const result = await Product.findByIdAndDelete(id)
    return result
}




export const productServices = {
    createProduct,
    getAllProduct,
    getProductById,
    updateProduct,
    deleteProduct,
    findByQuery
}