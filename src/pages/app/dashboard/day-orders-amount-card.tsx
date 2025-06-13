import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Utensils } from 'lucide-react'

export function DayOrdersAmountCard() {
    return (
        <Card className='gap-0'>
            <CardHeader className='flex flex-row items-center space-y-0 justify-between pb-2'>
                <CardTitle className='text-base font-semibold'>
                    Pedidos (dia)
                </CardTitle>
                <Utensils className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent className='space-y-1'>
                <span className='text-2xl font-bold tracking-tight'>12</span>
                <p className='text-xs text-muted-foreground mt-1'>
                    <span className='text-rose-500 dark:text-rose-400'>
                        -4%
                    </span>{' '}
                    em relação à ontem
                </p>
            </CardContent>
        </Card>
    )
}
