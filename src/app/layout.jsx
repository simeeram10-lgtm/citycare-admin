import { Inter } from 'next/font/google'
import './globals.css'

import { Toaster } from 'react-hot-toast'
import './theme.css'

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'CityCare - Admin Panel',
  description: 'Officer Onboarding System',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
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
                background: '#059669',
              },
            },
          }}
        />
      </body>
    </html>
  )
}
