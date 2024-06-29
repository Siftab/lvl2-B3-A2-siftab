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




// exporting all the controllers 
export const productControllers = {
    createProduct,
    getAllProduct
}