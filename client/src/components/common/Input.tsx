import { useState } from 'react';
import type { FC, InputHTMLAttributes, ReactNode } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
    label?: string;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    prefix?: ReactNode;
    theme?: 'purple' | 'pink' | 'emerald' | 'blue' | 'red' | 'teal' | 'orange';
}

const Input: FC<InputProps> = ({
    label,
    type = 'text',
    name,
    placeholder,
    value,
    defaultValue,
    onChange,
    required = false,
    iconLeft,
    iconRight,
    prefix,
    theme = 'purple',
    className = '',
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';
    const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

    const themeRings: Record<string, string> = {
        purple: 'focus:ring-[#5301ab]/20 focus:border-[#5301ab]',
        pink: 'focus:ring-pink-500/20 focus:border-pink-500',
        emerald: 'focus:ring-emerald-500/20 focus:border-emerald-500',
        blue: 'focus:ring-blue-600/20 focus:border-blue-600',
        red: 'focus:ring-red-500/20 focus:border-red-500',
        teal: 'focus:ring-teal-500/20 focus:border-teal-500',
        orange: 'focus:ring-orange-500/20 focus:border-orange-500',
    };

    const baseInputStyles = `w-full bg-transparent text-gray-900 text-[13px] outline-none transition-all placeholder-gray-400 ${prefix ? 'px-3 py-2.5' : 'px-4 py-2.5'}`;
    const focusStyles = themeRings[theme] || themeRings.purple;

    return (
        <div className={`space-y-1.5 w-full ${className}`}>
            {label && (
                <label className="text-[12px] font-bold text-gray-700 block">
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}

            <div className={`relative flex rounded-xl overflow-hidden border border-gray-200 bg-gray-50 focus-within:bg-white focus-within:ring-2 ${focusStyles} transition-all`}>
                
                {prefix && (
                    <div className="flex items-center gap-1.5 px-3 bg-gray-100 border-r border-gray-200 shrink-0">
                        {prefix}
                    </div>
                )}

                {iconLeft && (
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                        {iconLeft}
                    </div>
                )}

                <input
                    type={inputType}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    defaultValue={defaultValue}
                    onChange={onChange}
                    required={required}
                    className={`${baseInputStyles} ${iconLeft ? 'pl-10' : ''} ${iconRight || isPassword ? 'pr-10' : ''}`}
                    {...props}
                />

                {(iconRight || isPassword) && (
                    <div
                        className={`absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 ${isPassword ? 'cursor-pointer hover:text-gray-600' : 'pointer-events-none'}`}
                        onClick={isPassword ? () => setShowPassword(!showPassword) : undefined}
                    >
                        {isPassword ? (showPassword ? <FiEyeOff className="w-4 h-4" /> : <FiEye className="w-4 h-4" />) : iconRight}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Input;