'use client';

export function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 px-4 border-t border-outline-variant/15 bg-surface/95 backdrop-blur-md shadow-[0_-4px_16px_rgba(0,0,0,0.5)]">
      <div className="flex flex-col items-center justify-center text-primary bg-primary/10 rounded-md py-1 px-3">
        <span className="material-symbols-outlined">search</span>
        <span className="font-body text-[10px] font-bold uppercase tracking-widest">Search</span>
      </div>
      <div className="flex flex-col items-center justify-center text-outline">
        <span className="material-symbols-outlined">package</span>
        <span className="font-body text-[10px] font-bold uppercase tracking-widest">Orders</span>
      </div>
      <div className="flex flex-col items-center justify-center text-outline">
        <span className="material-symbols-outlined">notifications</span>
        <span className="font-body text-[10px] font-bold uppercase tracking-widest">Alerts</span>
      </div>
      <div className="flex flex-col items-center justify-center text-outline">
        <span className="material-symbols-outlined">person</span>
        <span className="font-body text-[10px] font-bold uppercase tracking-widest">Profile</span>
      </div>
    </nav>
  );
}
