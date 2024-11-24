import { APP_NAME } from '@/lib/constants'
import { getMyCart } from '@/lib/actions/cart.actions'
import { getUserById } from '@/lib/actions/user.actions'
import { auth } from '@/auth'
import { Metadata } from 'next'
import ShippingAddressForm from './shipping-address-form'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: `Shipping Address - ${APP_NAME}`,
}

export default async function ShippingPage() {
  const cart = await getMyCart()
  if (!cart || cart.items.length === 0) redirect('/cart')

  const session = await auth()
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
  const user = await getUserById(session?.user.id!)

  return <ShippingAddressForm address={user.address} />
}
