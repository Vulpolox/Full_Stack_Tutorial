import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

function Button({ children, onClick, color = "primary" }: Props) {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
