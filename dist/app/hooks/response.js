"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseHook = void 0;
const ResponseHook = (res, success, message, data = []) => {
    return res.json({
        success: success,
        message: message,
        data: data
    });
};
exports.ResponseHook = ResponseHook;
