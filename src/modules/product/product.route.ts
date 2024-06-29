
import express from "express"

const router = express.Router()

router.get('/', (req, res) => {
    res.send("hitted product routes")
})





// exporting product route 
export const productRouter = router;