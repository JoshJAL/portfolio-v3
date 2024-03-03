'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  href: string;
  children: React.ReactNode;
  additionalClasses?: string;
}

export default function HeaderLink({ href, children, additionalClasses }: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`${href === pathname ? 'scale-110' : 'hover:scale-110'}  group transition-all duration-200 ease-in-out w-fit ${additionalClasses}`}
    >
      {children}
    </Link>
  );
}
