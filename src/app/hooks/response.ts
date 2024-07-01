import { Response } from "express"

export const ResponseHook = (res: Response, success: boolean, message: string, data: object | null | unknown = []) => {

    return res.json({
        success: success,
        message: message,
        data: data
    })

}