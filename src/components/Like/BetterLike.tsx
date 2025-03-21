import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const BetterLike = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) return <AiFillHeart color="pink" size={20} onClick={toggle} />;
  else return <AiOutlineHeart size={20} onClick={toggle} />;
};

export default BetterLike;
