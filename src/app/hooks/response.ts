import { Response } from "express"
export const response = (res: Response, success: boolean, message: string, data) => {

    return res.json({
        success: success,
        message: message,
        data: data
    })

}