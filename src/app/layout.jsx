export const metadata = {
  title: 'Gallery - Ashures',
  description: 'Gallery made by Ashures',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
