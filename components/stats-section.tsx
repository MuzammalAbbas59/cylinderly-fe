const stats = [
  { number: '500+', label: 'Vendors Listed', icon: '🏪' },
  { number: '20+', label: 'Cities in Pakistan', icon: '🌍' },
  { number: 'Free', label: 'Always Free for Users', icon: '✅' },
  { number: '100%', label: 'Verified Sellers', icon: '🔒' },
];

export function StatsSection() {
  return (
    <section className="bg-white border-b border-slate-100 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(({ number, label, icon }, i) => (
          <div
            key={label}
            className={`text-center py-6 px-4 ${i < stats.length - 1 ? 'lg:border-r border-slate-100' : ''}`}
          >
            <div className="text-2xl mb-1">{icon}</div>
            <div
              className="text-3xl font-extrabold tracking-tight mb-1"
              style={{
                background: 'linear-gradient(135deg, #3C7DD9, #5AB8FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'var(--font-poppins)',
              }}
            >
              {number}
            </div>
            <p className="text-slate-500 text-sm font-semibold">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
