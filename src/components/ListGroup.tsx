// surround jsx code with <> </> to automatically use a fragment to encapsulate multiple elements
// in this case the header1 and the unordered list

import { useState } from "react";

// properties interface; allows for dynamic list names and items
interface Props {
  items: string[];
  heading: string;

  // (item: string) -> void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // this is a state hook ; selectedIndex is state var, setSelectedIndex is updater func ; -1 is init value of state var
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // retruns a unique message if there aren't any items in the list
  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
