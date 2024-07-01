"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zodOrderSchema = void 0;
const zod_1 = require("zod");
const zodOrderSchema = zod_1.z.object({
    email: zod_1.z.string().email({ message: "invalid email address,proper email is required" }),
    productId: zod_1.z.string(),
    price: zod_1.z.number({ message: "price can't be string " }),
    quantity: zod_1.z.number()
});
exports.zodOrderSchema = zodOrderSchema;
