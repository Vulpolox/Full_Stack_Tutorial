// naming a prop 'children' ascribes it special properties by React
// allowing it to be written as JSX

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
