import lwsLogo from "@/assets/lws-logo-black.svg";
import avatar from "@/assets/svg/avatar.svg";
import menuSvg from "@/assets/svg/menu.svg";
import soppingCart from "@/assets/svg/shopping-Cart.svg";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Glossary App",
  description: "This is an practice project...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
          <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
            <div className="flex items-center gap-2">
              <Image
                src={menuSvg}
                className="lg:hidden w-5 h-5"
                alt="menu-icon"
              />
              <a href="./index.html">
              <Image
                src={lwsLogo}
                className="w-44"
                alt="logo"
              />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
            <Image
              src={avatar}
              className="hidden lg:block w-[18px] h-[18px]"
              alt="login acount avatar"
            />
            <Image
              src={soppingCart}
              className="block w-5 h-5"
              alt="shopping cart icon"
            />
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
