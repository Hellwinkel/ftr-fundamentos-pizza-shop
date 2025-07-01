import { getDayOrdersAmount } from '@/api/get-day-orders-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Utensils } from 'lucide-react'
import { useQuery } from 'react-query'
import { MetricCardSkeleton } from './metric-card-skeleton'

export function DayOrdersAmountCard() {
  const { data: dayOrdersAmount } = useQuery({
    queryFn: getDayOrdersAmount,
    queryKey: ['metrics', 'day-orders-amount'],
  })

  return (
    <Card className='gap-0'>
      <CardHeader className='flex flex-row items-center space-y-0 justify-between pb-2'>
        <CardTitle className='text-base font-semibold'>Pedidos (dia)</CardTitle>
        <Utensils className='h-4 w-4 text-muted-foreground' />
      </CardHeader>
      <CardContent className='space-y-1'>
        {dayOrdersAmount ? (
          <>
            <span className='text-2xl font-bold tracking-tight'>
              {dayOrdersAmount.amount.toLocaleString('pt-BR')}
            </span>
            <p className='text-xs text-muted-foreground mt-1'>
              {dayOrdersAmount.diffFromYesterday >= 0 ? (
                <>
                  <span className='text-emerald-500 dark:text-emerald-400'>
                    +{dayOrdersAmount.diffFromYesterday}%
                  </span>{' '}
                  em relação à ontem
                </>
              ) : (
                <>
                  <span className='text-rose-500 dark:text-rose-400'>
                    {dayOrdersAmount.diffFromYesterday}%
                  </span>{' '}
                  em relação à ontem
                </>
              )}
            </p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  )
}
