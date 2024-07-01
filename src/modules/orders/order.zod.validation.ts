import { z } from 'zod';

const zodOrderSchema = z.object({
    email: z.string().email({ message: "invalid email address,proper email is required" }),
    productId: z.string(),
    price: z.number({ message: "price can't be string " }),
    quantity: z.number()
});


export { zodOrderSchema };