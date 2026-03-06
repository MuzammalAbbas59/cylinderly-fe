import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div className="relative group">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-primary transition-colors">
            {icon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            'flex h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white shadow-sm transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 hover:border-white/20 hover:bg-white/10 focus-visible:outline-none focus-visible:border-brand-primary/50 focus-visible:ring-4 focus-visible:ring-brand-primary/10 disabled:cursor-not-allowed disabled:opacity-50',
            icon && 'pl-10',
            className
          )}
          ref={ref}
          {...props}
        />
        {/* Subtle glow effect behind input when focused */}
        <div className="absolute inset-0 -z-10 rounded-xl bg-brand-primary/0 opacity-0 blur-md transition-all duration-300 group-focus-within:bg-brand-primary/20 group-focus-within:opacity-100" aria-hidden="true" />
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
