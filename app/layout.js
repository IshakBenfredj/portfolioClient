import { Providers } from "./providers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./globals.css";

export const metadata = {
  title: "Ishak Benfredj",
  description: "Ishak Benfredj Portfolio website",
  icons : {
    icon: "/logo/logo_res_dark.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
