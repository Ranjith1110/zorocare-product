import type { FC, SelectHTMLAttributes } from 'react';
import { BiChevronDown } from 'react-icons/bi';

type Option = string | { label: string; value: string | number };

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    options?: Option[];
    placeholder?: string; // Explicitly add placeholder typing here
    theme?: 'purple' | 'pink' | 'emerald' | 'blue' | 'red' | 'teal' | 'orange';
}

const Select: FC<SelectProps> = ({
    label,
    name,
    options = [],
    value,
    defaultValue,
    onChange,
    required = false,
    placeholder = "Select an option",
    theme = 'purple',
    className = '',
    ...props
}) => {
    const themeRings: Record<string, string> = {
        purple: 'focus:ring-[#5301ab]/20 focus:border-[#5301ab]',
        pink: 'focus:ring-pink-500/20 focus:border-pink-500',
        emerald: 'focus:ring-emerald-500/20 focus:border-emerald-500',
        blue: 'focus:ring-blue-600/20 focus:border-blue-600',
        red: 'focus:ring-red-500/20 focus:border-red-500',
        teal: 'focus:ring-teal-500/20 focus:border-teal-500',
        orange: 'focus:ring-orange-500/20 focus:border-orange-500',
    };

    const focusStyles = themeRings[theme] || themeRings.purple;

    return (
        <div className={`space-y-1.5 w-full ${className}`}>
            {label && (
                <label className="text-[12px] font-bold text-gray-700 block">
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <div className="relative">
                <select
                    name={name}
                    value={value}
                    defaultValue={defaultValue}
                    onChange={onChange}
                    required={required}
                    className={`w-full bg-gray-50 border border-gray-200 text-gray-900 text-[13px] rounded-xl px-4 py-2.5 focus:bg-white focus:ring-2 ${focusStyles} outline-none transition-all appearance-none cursor-pointer pr-10`}
                    {...props}
                >
                    {placeholder && (
                        <option value="" disabled hidden>{placeholder}</option>
                    )}
                    {options.map((opt, idx) => (
                        <option key={idx} value={typeof opt === 'string' ? opt : opt.value}>
                            {typeof opt === 'string' ? opt : opt.label}
                        </option>
                    ))}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <BiChevronDown className="w-4 h-4" />
                </div>
            </div>
        </div>
    );
};

export default Select;