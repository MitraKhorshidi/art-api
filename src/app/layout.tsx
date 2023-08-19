import '@/app/styles/globals.css';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
 
const roboto = Roboto({
  weight: ['500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Api Art',
  description: 'Api Art Museum Online Catalogue',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
