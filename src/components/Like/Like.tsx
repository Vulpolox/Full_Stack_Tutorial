import { ReactNode } from "react";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

// properties
interface Props {
  selectedColor?: "pink" | "red" | "blue";
  className?: string;
  size?: "10" | "20" | "30";
}

// return logic
function Like({ selectedColor = "pink", className, size = "20" }: Props) {
  // useState for managing the color state of the like
  const [isClicked, setIsClicked] = useState(false);

  // function for handling click events
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  // function for getting color
  const getColor = () => {
    return isClicked ? selectedColor : "black";
  };

  // return JSX object
  return (
    <>
      <FaHeart
        size={size}
        className={className}
        onClick={handleClick}
        color={getColor()}
      />
    </>
  );
}

export default Like;
