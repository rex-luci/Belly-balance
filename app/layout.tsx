import type { Metadata } from 'next';

import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contract Wise',
  description: 'Create contract with AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
      <script async src="https://static.wdgtsrc.com/assets/loader.js" data-chats-widget-id="1709ad76-b3e2-46f9-b608-b161fb13a189"></script>
    </html>
  )
}
