import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import { ThemeProvider } from './components/theme/theme-provider'
import './index.css'
import { router } from './routes'

export function App() {
    return (
        <ThemeProvider storageKey='pizzashop-theme' defaultTheme='system'>
            <Toaster richColors />
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}
