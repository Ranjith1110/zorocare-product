import type { FC } from 'react';

interface ToggleSwitchProps {
    defaultChecked?: boolean;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    theme?: 'purple' | 'orange' | 'emerald' | 'blue' | 'red' | 'teal' | 'pink';
    disabled?: boolean;
}

const ToggleSwitch: FC<ToggleSwitchProps> = ({
    defaultChecked,
    checked,
    onChange,
    theme = 'purple',
    disabled = false
}) => {
    const getThemeColor = () => {
        if (disabled) return 'peer-checked:bg-gray-400';

        switch (theme) {
            case 'orange': return 'peer-checked:bg-orange-500';
            case 'emerald': return 'peer-checked:bg-emerald-500';
            case 'blue': return 'peer-checked:bg-blue-600';
            case 'red': return 'peer-checked:bg-red-600';
            case 'teal': return 'peer-checked:bg-teal-500';
            case 'pink': return 'peer-checked:bg-pink-500';
            case 'purple':
            default: return 'peer-checked:bg-[#5301ab]';
        }
    };

    return (
        <label className={`relative inline-flex items-center ${disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}>
            <input
                type="checkbox"
                className="sr-only peer"
                checked={checked}
                defaultChecked={defaultChecked}
                disabled={disabled}
                onChange={(e) => onChange && onChange(e.target.checked)}
            />
            <div className={`w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all ${getThemeColor()}`}></div>
        </label>
    );
};

export default ToggleSwitch;