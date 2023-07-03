import "./../styles/globals.css";
import { Inter } from "next/font/google";
import WebsiteTemplate from "@/templates/website";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Livianos Chat",
  description: "Livianos | Home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <WebsiteTemplate>
            {children}
          </WebsiteTemplate>
        </div>
      </body>
    </html>
  );
}
