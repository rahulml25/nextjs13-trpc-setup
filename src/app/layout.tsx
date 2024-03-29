import './globals.css';
import roboto from '@/fonts/roboto';

// components
import { TrpcProvider } from '@/utils/trpc/Provider';
import Header from '@/components/Header';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <TrpcProvider>
        <body className={roboto.className}>
          <div className="h-[100dvh] overflow-hidden backdrop-blur">
            <Header />
            <>{children}</>
          </div>
        </body>
      </TrpcProvider>
    </html>
  );
}
