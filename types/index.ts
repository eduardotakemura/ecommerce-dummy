import { carts, products } from '@/db/schema'
import { InferSelectModel } from 'drizzle-orm'
import { z } from 'zod'
import { cartItemSchema, shippingAddressSchema } from '@/lib/validator'

// PRODUCTS
export type Product = InferSelectModel<typeof products>

// CART
export type Cart = InferSelectModel<typeof carts>
export type CartItem = z.infer<typeof cartItemSchema>
export type ShippingAddress = z.infer<typeof shippingAddressSchema>
