import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kampus Land EHR',
  description: 'Behavioral health EHR starter'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
