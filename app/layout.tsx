import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SPA Booking Wireframes',
  description: 'Spa booking application wireframes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
