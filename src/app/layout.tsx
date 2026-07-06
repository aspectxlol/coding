import { Press_Start_2P } from 'next/font/google';
import './globals.css'
import Navbar from '@/components/navbar';
import { Analytics } from '@vercel/analytics/next';

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
})

export const metadata = {
  title: "Coding",
  description: "Tempat mengubah imajinasi menjadi kenyataan"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head />
      <body className={`bg-gray-900 font-mono ${pressStart.className}`}>
        <Navbar />
        <main className='min-h-screen flex flex-col justify-center'>
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}