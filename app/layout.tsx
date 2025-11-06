import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Theme Store - Premium Themes & Templates',
  description: 'Browse and purchase premium themes and templates for your projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
