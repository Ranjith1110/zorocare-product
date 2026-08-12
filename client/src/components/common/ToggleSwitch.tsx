import type { FC, InputHTMLAttributes } from 'react';

interface ToggleSwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    theme?: 'purple' | 'pink' | 'emerald' | 'blue' | 'red' | 'teal' | 'orange';
}

const ToggleSwitch: FC<ToggleSwitchProps> = ({
    checked,
    defaultChecked = false,
    onChange,
    name,
    theme = 'purple',
    disabled = false,
    ...props
}) => {
    const themeColors: Record<string, string> = {
        purple: 'peer-checked:bg-[#5301ab]',
        pink: 'peer-checked:bg-pink-500',
        emerald: 'peer-checked:bg-emerald-500',
        blue: 'peer-checked:bg-blue-600',
        red: 'peer-checked:bg-red-500',
        teal: 'peer-checked:bg-teal-500',
        orange: 'peer-checked:bg-orange-500',
    };

    const activeColor = themeColors[theme] || themeColors.purple;

    return (
        <label className={`relative inline-flex items-center ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}>
            <input
                type="checkbox"
                name={name}
                className="sr-only peer"
                defaultChecked={defaultChecked}
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                {...props}
            />
            <div className={`w-8 h-4.5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all ${activeColor}`}></div>
        </label>
    );
};

export default ToggleSwitch;