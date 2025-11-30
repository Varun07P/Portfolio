import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Card = ({ className, children, ...props }) => {
    return (
        <div
            className={twMerge(
                'bg-dark-card/50 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-colors duration-300',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};
