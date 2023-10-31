import type { Metadata } from 'next'
import { Inter, Roboto_Mono  } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GREEN BANK - Simulateur d\'emprunt de voiture',
  description: "La Green Bank, fondée en 2022, est une institution financière novatriceaxée sur la durabilitéet l'impact environnemental positif. Son objectif principal est de catalyser des investissements et des initiatives qui favorisent la transition vers une économie verte et durable.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <body className={inter.className}>
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
            </ThemeProvider>
        </body>
    </html>
  )
}
