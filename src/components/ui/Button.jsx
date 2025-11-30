import { forwardRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Button = forwardRef(({
    className,
    variant = 'primary',
    size = 'md',
    children,
    ...props
}, ref) => {
    const variants = {
        primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-500/20',
        secondary: 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/10',
        ghost: 'bg-transparent text-gray-400 hover:text-white hover:bg-white/5',
        outline: 'bg-transparent border border-white/20 text-white hover:bg-white/5'
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    return (
        <button
            ref={ref}
            className={twMerge(
                'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';
