import { Request, Response } from "express"
import { productServices } from "./product.services"



// creating product
const createProduct = async (req: Request, res: Response) => {

    try {

        const result = await productServices.createProduct(req.body)
        res.json({
            success: true,
            message: "Product created successfully!",
            data: result
        })

    } catch (error) {

        res.json({
            success: false,
            message: "Product not created successfully!",
            data: error

        })



    }

}




// exporting all the controllers 
export const productControllers = {
    createProduct
}