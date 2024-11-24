import { getMyCart } from '@/lib/actions/cart.actions'
import CartForm from './cart-form'

export const metadata = {
  title: `Shopping Cart - ${process.env.NEXT_PUBLIC_APP_NAME}`,
}

export default async function CartPage() {
  const cart = await getMyCart()
  return <CartForm cart={cart} />
}
