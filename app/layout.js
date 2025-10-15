// app/layout.js
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'YourZerosAndOnes - IT Company',
  description: 'Innovative IT solutions for your business',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white text-black">
        {children}
      </body>
    </html>
  )
}