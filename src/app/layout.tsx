export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-900 text-white font-mono">
        <main className="min-h-screen p-4">{children}</main>
      </body>
    </html>
  );
}