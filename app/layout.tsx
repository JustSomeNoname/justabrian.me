import '@/app/globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "ブライアン • Brian",
  description: '',
  openGraph: {
    title: "ブライアン • Brian",
    description: '',
    url: 'https://justabrian.me',
    siteName: "ブライアン • Brian",
    images: [
      {
        url: 'https://cdn.discordapp.com/banners/515404778021322773/a_11d91bf79ad8463f1cf6109dad44856f.gif?size=512',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "justabrian~",
    description: '',
    images: ['https://cdn.discordapp.com/banners/515404778021322773/a_11d91bf79ad8463f1cf6109dad44856f.gif?size=512'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

