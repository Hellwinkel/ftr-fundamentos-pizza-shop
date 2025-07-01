import { getDailyRevenueInPeriod } from '@/api/get-daily-revenue-in-period'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useMemo } from 'react'
import { useQuery } from 'react-query'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

export function RevenueChart() {
  const { data: dailyRevenueInPeriod } = useQuery({
    queryKey: ['metrics', 'daily-revenue-in-period'],
    queryFn: getDailyRevenueInPeriod,
  })

  const chartData = useMemo(() => {
    return dailyRevenueInPeriod?.map((chartItem) => {
      return {
        chartData: chartItem.date,
        receipt: chartItem.receipt / 100,
      }
    })
  }, [dailyRevenueInPeriod])

  return (
    <Card className='col-span-6'>
      <CardHeader className='flex flex-row items-center justify-between pb-8'>
        <div className='space-y-1'>
          <CardTitle className='text-base font-medium'>
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        {chartData && (
          <ResponsiveContainer width='100%' height={240}>
            <LineChart data={chartData} style={{ fontSize: 12 }}>
              <XAxis dataKey='date' axisLine={false} tickLine={false} dy={16} />
              <YAxis
                stroke='#888'
                axisLine={false}
                tickLine={false}
                width={80}
                tickFormatter={(value: number) =>
                  value.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })
                }
              />
              <CartesianGrid vertical={false} className='stroke-muted' />
              <Line
                type='linear'
                strokeWidth={2}
                dataKey='receipt'
                stroke={colors.violet['400']}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  )
}
