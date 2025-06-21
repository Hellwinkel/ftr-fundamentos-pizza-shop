import { api } from '@/lib/axios'

export type GetManagedRestaurantResponse = {
  id: string
  name: string
  email: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getManagedRestaurant(): Promise<GetManagedRestaurantResponse> {
  const response = await api.get('/managed-restaurant')

  return response.data
}
