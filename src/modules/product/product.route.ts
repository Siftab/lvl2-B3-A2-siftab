
import express, { Router } from "express"
import { productControllers } from "./product.controller";

const router: Router = express.Router()

router.get('/', productControllers.getAllProduct)
router.post('/', productControllers.createProduct)
router.get('/:productId', productControllers.getProductById)





// exporting product route 
export const productRouter = router;