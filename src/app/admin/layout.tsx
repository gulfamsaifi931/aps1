import NextAuthSessionProvider from '@/app/components/SessionProvider';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>

      <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
      </body>
    </html>
  )
}