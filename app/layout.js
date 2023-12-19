import './globals.css'

export const metadata = {
  title: 'Ishak Benfredj',
  description: 'Ishak Benfredj Portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}