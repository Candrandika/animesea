import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AnimeSea',
  description: 'Find the best anime',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.className} bg-color-dark`}>
        <Navbar />
        <main className="my-5 container mx-auto px-3">
          {children}
        </main>
      </body>
    </html>
  )
}
