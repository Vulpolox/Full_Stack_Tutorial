import { MouseEvent } from "react";

// surround jsx code with <> </> to automatically use a fragment to encapsulate multiple elements
// in this case the header1 and the unordered list
function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // this is called an event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  // retruns a unique message if there aren't any items in the list
  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  return (
    <>
      <h1>LIST</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" onClick={handleClick} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
