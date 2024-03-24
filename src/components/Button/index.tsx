
interface ButtonProps {
  danger?: boolean;
  backgroundColor?: string;
  label: string;
  onClick?: () => void;
}
export const Button = ({
  danger = false,
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = danger ? 'text-red-400' : 'text-blue-400';
  return (
    <button
      type="button"
      className={[backgroundColor, mode].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
