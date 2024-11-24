import { getOrderById } from '@/lib/actions/order.actions'
import { notFound } from 'next/navigation'
//import { auth } from '@/auth'
import OrderDetailsForm from './order-details-form'
import { APP_NAME } from '@/lib/constants'

export const metadata = {
  title: `Order Details - ${APP_NAME}`,
}

const OrderDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params
  const order = await getOrderById(id)
  if (!order) notFound()

  //const session = await auth()
  return <OrderDetailsForm order={order} />
}

export default OrderDetailsPage
