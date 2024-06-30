
import express, { Router } from "express"
import { productControllers } from "./product.controller";

const router: Router = express.Router()

router.get('/', productControllers.getAllProduct)
router.post('/', productControllers.createProduct)
router.get('/:productId', productControllers.getProductById)
router.put('/:productId', productControllers.updateProduct)
router.delete('/:productId', productControllers.deleteProduct)





// exporting product route 
export const productRouter = router;