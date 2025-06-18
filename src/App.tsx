import { QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import { ThemeProvider } from './components/theme/theme-provider'
import './index.css'
import { queryClient } from './lib/react-query'
import { router } from './routes'

export function App() {
  return (
    <ThemeProvider storageKey='pizzashop-theme' defaultTheme='system'>
      <Toaster richColors />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}
