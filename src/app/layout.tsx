import { Press_Start_2P } from 'next/font/google';
import './globals.css'

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={`bg-gray-900 text-white font-mono ${pressStart.className}`}>
        <main className='min-h-screen flex flex-col justify-center'>
          {children}
        </main>
      </body>
    </html>
  );
}