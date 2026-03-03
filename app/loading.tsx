export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0A1628] flex flex-col">
      {/* Header skeleton */}
      <div className="h-[72px] bg-white/5 border-b border-white/10 animate-pulse" />

      {/* Hero skeleton */}
      <div className="flex-1 pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-5">
            <div className="h-4 w-40 bg-white/10 rounded-full animate-pulse" />
            <div className="space-y-2">
              <div className="h-14 w-3/4 bg-white/10 rounded-xl animate-pulse" />
              <div className="h-14 w-1/2 bg-white/10 rounded-xl animate-pulse" />
            </div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-white/10 rounded animate-pulse" />
              <div className="h-4 w-4/5 bg-white/10 rounded animate-pulse" />
            </div>
            <div className="h-14 w-full max-w-md bg-white/10 rounded-2xl animate-pulse" />
          </div>
          <div className="h-[420px] bg-white/10 rounded-2xl animate-pulse" />
        </div>
      </div>
    </div>
  );
}
