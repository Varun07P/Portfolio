import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Badge = ({ className, variant = 'default', children, ...props }) => {
    const variants = {
        default: 'bg-white/5 text-gray-300 border-white/10',
        primary: 'bg-primary-500/10 text-primary-400 border-primary-500/20',
        secondary: 'bg-secondary-500/10 text-secondary-400 border-secondary-500/20',
    };

    return (
        <span
            className={twMerge(
                'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-colors',
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
};
