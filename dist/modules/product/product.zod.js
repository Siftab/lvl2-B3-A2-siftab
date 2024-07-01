"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zodProductSchema = void 0;
const zod_1 = require("zod");
// Define Zod schema for TVariant
const variantSchema = zod_1.z.object({
    type: zod_1.z.string(),
    value: zod_1.z.string()
});
// Define Zod schema for TInventory
const inventorySchema = zod_1.z.object({
    quantity: zod_1.z.number(),
    inStock: zod_1.z.boolean()
});
// Define Zod schema for TProduct
const zodProductSchema = zod_1.z.object({
    name: zod_1.z.string().min(4, { message: "name need atleast four charecters" }),
    description: zod_1.z.string().min(10, { message: "at least write 10 charecters for description " }),
    price: zod_1.z.number(),
    category: zod_1.z.string(),
    tags: zod_1.z.array(zod_1.z.string()),
    variants: zod_1.z.array(variantSchema),
    inventory: inventorySchema
});
exports.zodProductSchema = zodProductSchema;
