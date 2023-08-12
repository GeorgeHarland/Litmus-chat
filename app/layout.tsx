import './../styles/globals.css';
import { Inter } from 'next/font/google';
import WebsiteTemplate from '@/templates/website';
import { WebSocketProvider } from '@/context/WebsocketContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Livianos Chat',
  description: 'Livianos | Home',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <WebSocketProvider>
        <body className={inter.className}>
          <div className="flex">
            <WebsiteTemplate>{children}</WebsiteTemplate>
          </div>
        </body>
      </WebSocketProvider>
    </html>
  );
}
