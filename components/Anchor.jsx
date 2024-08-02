'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Anchor({href,children}) {
    const pathname = usePathname()
    console.log(href);
  return (
    <Link className={pathname === href ? 'text-green-600':""} href={href}>{children}</Link>
  )
}
