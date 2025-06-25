import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'
import { ArrowRight, Search, X } from 'lucide-react'
import { OrderDetails } from './order-details'
import { OrderStatus } from './order-status'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useState } from 'react'

export type OrderTableRowProps = {
  order: {
    orderId: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }
}

export function OrderTableRow({ order }: OrderTableRowProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  return (
    <TableRow>
      <TableCell>
        <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <DialogTrigger asChild>
            <Button variant='outline' size='sm'>
              <Search className='h-3 w-3' />
              <span className='sr-only'>Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          <OrderDetails orderId={order.orderId} open={isDetailsOpen} />
        </Dialog>
      </TableCell>
      <TableCell className='font-mono text-sm font-medium'>
        {order.orderId}
      </TableCell>
      <TableCell className='text-muted-foreground'>
        {formatDistanceToNow(order.createdAt, {
          locale: ptBR,
          addSuffix: true,
        })}
      </TableCell>
      <TableCell>
        <OrderStatus status={order.status} />
      </TableCell>
      <TableCell className='font-medium'>{order.customerName}</TableCell>
      <TableCell className='font-medium'>
        {(order.total / 100).toLocaleString('pr-BR', {
          currency: 'BRL',
          style: 'currency',
        })}
      </TableCell>
      <TableCell>
        <Button variant='outline' size='sm'>
          <ArrowRight className='h-3 w-3 mr-2' />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant='ghost' size='sm'>
          <X className='h-3 w-3 mr-2' />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
