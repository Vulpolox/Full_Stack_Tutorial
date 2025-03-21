import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
  className?: string;
}

function Button({ children, onClick, className, color = "primary" }: Props) {
  return (
    <button
      type="button"
      className={"btn btn-" + color + " " + className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
