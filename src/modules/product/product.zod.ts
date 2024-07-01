import { z } from 'zod';

// Define Zod schema for TVariant
const variantSchema = z.object({
    type: z.string(),
    value: z.string()
});

// Define Zod schema for TInventory
const inventorySchema = z.object({
    quantity: z.number(),
    inStock: z.boolean()
});

// Define Zod schema for TProduct
const zodProductSchema = z.object({
    name: z.string().min(4, { message: "name need atleast four charecters" }),
    description: z.string().min(10, { message: "at least write 10 charecters for description " }),
    price: z.number(),
    category: z.string(),
    tags: z.array(z.string()),
    variants: z.array(variantSchema),
    inventory: inventorySchema
});

// Export the product schema
export { zodProductSchema };
