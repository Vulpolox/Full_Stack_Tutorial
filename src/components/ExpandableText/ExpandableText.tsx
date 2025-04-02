import { ReactNode } from "react";
import { useState } from "react";
import Button from "../Button";

interface Props {
  maxChars: number;
  children: string;
}

const ExpandableText = ({ maxChars, children }: Props) => {
  // handle button clicks
  const handleClick = () => {
    var newState: boolean = !isCollapsed;
    toggleCollapsed(newState);
    setText(manipulateText(children, maxChars, newState));
  };

  // text manuipulation function
  // signature: (string) -> string
  const manipulateText = (
    originalText: string,
    maxChars: number,
    isCollapsed: boolean
  ) => {
    if (isCollapsed && originalText.length <= maxChars) {
      return originalText;
    } else if (isCollapsed && originalText.length > maxChars) {
      return originalText.slice(0, maxChars) + "...";
    } else {
      return originalText;
    }
  };

  // state variables
  const [isCollapsed, toggleCollapsed] = useState(true);
  const [currentText, setText] = useState(
    manipulateText(children, maxChars, isCollapsed)
  );

  // if there are less than the maximum allowed chars, return
  // the text without the button
  if (children.length <= maxChars) {
    return (
      <>
        <p>{children}</p>
      </>
    );
  }

  return (
    <>
      <p>
        {currentText}
        <Button onClick={handleClick}>{isCollapsed ? "More" : "Less"}</Button>
      </p>
    </>
  );
};

export default ExpandableText;
