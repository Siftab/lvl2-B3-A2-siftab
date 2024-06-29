import express, { Application, Request, Response } from "express"
export const app: Application = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World! server hitted')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})