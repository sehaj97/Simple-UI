
interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  danger?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
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
