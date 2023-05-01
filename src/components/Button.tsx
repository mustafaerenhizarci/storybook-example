import clsx from "clsx";

interface Button {
  variant?: "default" | "primary" | "secondary";
  size?: "sm" | "lg";
  label: string;
}

const variants: any = {
  default: "hover:bg-gray-100 border",
  primary: "bg-blue-500 hover:bg-blue-600 text-white",
  secondary: "bg-amber-200 hover:bg-amber-300",
};

const sizes: any = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2",
  lg: "px-5 py-2 text-lg",
};

const Button = ({ label, variant, size }: Button) => {
  const variantStyles = variants[variant || "default"];
  const sizeStyles = sizes[size || "md"];

  return (
    <button
      className={clsx(
        "rounded-md duration-150 h-min",
        sizeStyles,
        variantStyles
      )}
    >
      {label}
    </button>
  );
};

Button.variant = variants;

export default Button;
