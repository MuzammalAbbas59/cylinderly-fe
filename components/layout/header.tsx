'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { href: '#', label: 'Explore Vendors', active: true },
  { href: '#', label: 'How It Works' },
  { href: '#', label: 'Track Order' },
  { href: '#', label: 'Market Overview' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl flex justify-between items-center px-6 py-3 border-b border-outline-variant/15 shadow-[0_4px_20px_rgba(76,215,246,0.04)]">
      <Link href="/" className="text-xl font-black tracking-tighter text-on-surface font-headline uppercase">
        Cylinderly
      </Link>

      <div className="hidden md:flex space-x-8">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={cn(
              "font-headline font-bold tracking-tight uppercase text-sm transition-colors pb-1",
              link.active 
                ? "text-primary border-b-2 border-primary" 
                : "text-outline hover:text-on-surface"
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        <span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary transition-colors">
          notifications
        </span>
        <span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary transition-colors">
          account_circle
        </span>
        <button className="machined-button px-4 py-1.5">
          Login
        </button>
      </div>
    </nav>
  );
}
