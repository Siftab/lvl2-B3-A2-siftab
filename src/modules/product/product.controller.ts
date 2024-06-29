import { Request, Response } from "express"
import { productServices } from "./product.services"
import { response } from "../../app/hooks/response"



// creating product
const createProduct = async (req: Request, res: Response) => {

    try {

        const result = await productServices.createProduct(req.body)
        // res.json({
        //     success: true,
        //     message: "Product created successfully!",
        //     data: result
        // })
        response(res, true, "product created successfully ", result)

    } catch (error) {

        // res.json({
        //     success: false,
        //     message: "Product not created successfully!",
        //     data: error

        // })
        response(res, false, "product failed to create")



    }

}




// exporting all the controllers 
export const productControllers = {
    createProduct
}