// import lwsLogo from "@/assets/lws-logo-black.svg";
import lwsLogo from "@/public/assets/lws-logo-black.svg";
import avatar from "@/public/assets/svg/avatar.svg";
import menuSvg from "@/public/assets/svg/menu.svg";
import soppingCart from "@/public/assets/svg/shopping-Cart.svg";
import Image from 'next/image';
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
    <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
      <div className="flex items-center gap-2">
        <Image
          src={menuSvg}
          className="lg:hidden w-5 h-5"
          alt="menu-icon"
        />
        <Link href="/">
        <Image
          src={lwsLogo}
          class="h-10"
          alt="logo"
        />
        </Link>
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
  )
}
