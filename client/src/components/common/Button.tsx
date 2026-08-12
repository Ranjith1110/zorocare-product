import type { FC, ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'danger' | 'neutral';
    icon?: ReactNode;
}

const Button: FC<ButtonProps> = ({
    children,
    variant = 'primary',
    icon,
    className = '',
    onClick,
    type = 'button',
    disabled = false,
    ...props
}) => {
    const baseStyles = "flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl text-[13px] font-bold transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-[#5301ab] hover:bg-[#43008a] text-white border border-transparent",
        secondary: "bg-white border border-gray-200 text-[#5301ab] hover:bg-gray-50",
        danger: "bg-red-50/50 border border-red-100 text-red-600 hover:bg-red-50",
        neutral: "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {icon && <span className="shrink-0">{icon}</span>}
            {children}
        </button>
    );
};

export default Button;