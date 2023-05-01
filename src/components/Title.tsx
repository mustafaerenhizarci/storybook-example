import clsx from "clsx";

interface Title {
  size?: "sm" | "md" | "lg";
  label: string;
  bold?: boolean;
}

const sizes: any = {
  sm: "text-2xl",
  md: "text-4xl",
  lg: "text-6xl",
};

const Title = ({ label, size, bold }: Title) => {
  const sizeStyles = sizes[size || "md"];
  const fontWeight = bold ? "font-bold" : "";

  return <h1 className={clsx(sizeStyles, fontWeight)}>{label}</h1>;
};

export default Title;
