import { ButtonHTMLAttributes } from "react";

// export enum ButtonType {
//   PRIMARY = "blue",
//   SECONDARY = "gray",
//   SUCCESS = "green",
//   DANGER = "red"
//   // Add more types as needed
// }
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: 'primary' | 'secondary' | 'success' | 'danger';
  label: string;
  size?: 'small' | 'medium' | 'large'; // Added size property
}

export const Button = ({
  mode = 'primary',
  label,
  size = 'medium', // Default to medium size
  ...props
}: ButtonProps) => {
  const getColorClassName = (mode: string) => {
    switch (mode) {
      case 'primary':
        return "text-blue-400 border border-blue-400 hover:bg-blue-400 hover:text-white focus:bg-blue-700 focus:text-white";
      case 'secondary':
        return "text-gray-400 border border-gray-400 hover:bg-gray-400 hover:text-white focus:bg-gray-700 focus:text-white";
      case 'success':
        return "text-green-400 border border-green-400 hover:bg-green-400 hover:text-white focus:bg-green-700 focus:text-white";
      case 'danger':
        return "text-red-400 border border-red-400 hover:bg-red-400 hover:text-white focus:bg-red-700 focus:text-white";
      default:
        return "text-blue-400 border border-blue-400 hover:bg-blue-400 hover:text-white focus:bg-blue-700 focus:text-white";// Default to primary if mode is not recognized
    }
  };

  const colorClassName = getColorClassName(mode);
  return (
    <button
      type="button"
      className={`
        ${colorClassName}
        ${size === 'small' ? 'px-2 py-1 text-sm' : ''}
        ${size === 'medium' ? 'px-4 py-2 text-base' : ''}
        ${size === 'large' ? 'px-6 py-3 text-lg' : ''}
      `}
      {...props}
    >
      {label}
    </button>
  );
};