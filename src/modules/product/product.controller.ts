import { Request, Response } from "express"
import { productServices } from "./product.services"
import { ResponseHook } from "../../app/hooks/response"



// creating product
const createProduct = async (req: Request, res: Response) => {

    try {

        const result = await productServices.createProduct(req.body)

        ResponseHook(res, true, "product created successfully ", result)

    } catch (error) {


        ResponseHook(res, false, "product failed to create")



    }

}
// get all product 

const getAllProduct = async (req: Request, res: Response) => {
    try {
        const result = await productServices.getAllProduct()

        ResponseHook(res, true, "Products fetched successfully!", result)

    } catch (error) {
        ResponseHook(res, false, "failed to fetch all product")

    }

}

// Retrieve a Specific Product by ID
const getProductById = async (req: Request, res: Response) => {
    try {
        const result = await productServices.getProductById(req.params.productId)
        ResponseHook(res, true, "Product fetched successfully!", result)
    } catch (error) {
        ResponseHook(res, false, "failed to fetch product")

    }
}
// update 
const updateProduct = async (req: Request, res: Response) => {
    try {
        const result = await productServices.updateProduct(req.params.productId, req.body)
        ResponseHook(res, true, "Product updated successfully!", result)
    } catch (error) {
        ResponseHook(res, false, "failed to update product")

    }
}

// delete a product form DB
const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params
        const result = await productServices.deleteProduct(productId)
        ResponseHook(res, true, "product deleted successfully ", result)
    } catch (error) {

        ResponseHook(res, false, "failed to delete product")

    }
}




// exporting all the controllers 
export const productControllers = {
    createProduct,
    getAllProduct,
    getProductById,
    updateProduct,
    deleteProduct
}