import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
}

export function StarRating({ rating, reviewCount }: StarRatingProps) {
  return (
    <div className="flex items-center gap-1" aria-label={`Rated ${rating} out of 5`}>
      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
      <span className="text-xs font-bold text-slate-700">{rating}</span>
      {reviewCount !== undefined && (
        <span className="text-xs text-slate-400">({reviewCount})</span>
      )}
    </div>
  );
}
