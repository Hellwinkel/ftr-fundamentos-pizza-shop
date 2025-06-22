import { getManagedRestaurant } from '@/api/get-manage-restaurant'
import { getProfile } from '@/api/get-profile'
import { Building, ChevronDown, LogOut } from 'lucide-react'
import { useQuery } from 'react-query'
import { StoreDialogContent } from './store-profile-dialog'
import { Button } from './ui/button'
import { Dialog, DialogTrigger } from './ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Skeleton } from './ui/skeleton'

export function AccountMenu() {
  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
    staleTime: Infinity,
  })

  const { data: managedRestaurant, isLoading: isLoadingManagedRestaurant } =
    useQuery({
      queryKey: ['managed-restaurant'],
      queryFn: getManagedRestaurant,
      staleTime: Infinity,
    })

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='outline'
            className='flex items-center gap-2 select-none'
          >
            {isLoadingManagedRestaurant ? (
              <Skeleton className='w-40 h-4' />
            ) : (
              managedRestaurant?.name
            )}
            <ChevronDown className='w-4 h-4' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='w-56'>
          <DropdownMenuLabel className='flex flex-col'>
            {isLoadingProfile ? (
              <div className='space-y-1.5'>
                <Skeleton className='w-32 h-4' />
                <Skeleton className='w-24 h-3' />
              </div>
            ) : (
              <>
                <span>{profile?.name}</span>
                <span className='text-sm font-normal text-muted-foreground'>
                  {profile?.email}
                </span>
              </>
            )}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DialogTrigger asChild>
            <DropdownMenuItem>
              <Building className='w-4 h-4 mr-2' />
              <span>Perfil da loja</span>
            </DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuItem className='text-rose-500 dark:text-rose-400'>
            <LogOut className='w-4 h-4 mr-2 text-inherit' />
            <span>Sair</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <StoreDialogContent />
    </Dialog>
  )
}
