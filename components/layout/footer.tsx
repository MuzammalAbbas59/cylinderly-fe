import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/10 py-16 px-6">
      <div className="container mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="text-2xl font-black tracking-tighter text-on-surface font-headline uppercase mb-6">
            Cylinderly
          </div>
          <p className="text-outline text-sm leading-relaxed mb-6">
            Digitizing Pakistan's LPG marketplace through verification, transparency, and advanced logistics.
          </p>
          <div className="flex space-x-4 text-outline">
            <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">hub</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">monitoring</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">language</span>
          </div>
        </div>

        <div>
          <h6 className="font-headline text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-6">Marketplace</h6>
          <ul className="space-y-4 text-sm text-outline font-label">
            <li><Link href="#" className="hover:text-primary transition-colors">Vendor Directory</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Price Index</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Logistics Network</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Cylinder Standards</Link></li>
          </ul>
        </div>

        <div>
          <h6 className="font-headline text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-6">Platform</h6>
          <ul className="space-y-4 text-sm text-outline font-label">
            <li><Link href="#" className="hover:text-primary transition-colors">How It Works</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Vendor Dashboard</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">API for Enterprise</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Support Center</Link></li>
          </ul>
        </div>

        <div>
          <h6 className="font-headline text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-6">Compliance</h6>
          <ul className="space-y-4 text-sm text-outline font-label">
            <li><Link href="#" className="hover:text-primary transition-colors">OGRA Regulations</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Safety Protocols</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-16 pt-8 border-t border-outline-variant/10 text-center">
        <p className="text-xs font-bold tracking-widest text-outline-variant uppercase">
          © 2024 CYLINDERLY INFRASTRUCTURE SYSTEMS. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
