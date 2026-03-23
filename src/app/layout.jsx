import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'CityCare - Admin Panel',
  description: 'Officer Onboarding System',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-500`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: '#0f766e',
              color: 'white',
              backdropFilter: 'blur(10px)',
            },
            error: {
              style: {
                background: '#dc2626',
              },
            },
            success: {
              style: {
                background: '#059669',
              },
            },
          }}
        />
      </body>
    </html>
  )
}
