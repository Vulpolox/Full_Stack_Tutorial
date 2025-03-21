// some useful libraries:
// npm install react-icons -> provides a ton of icons to use in your project
import { BsFillCalendarFill } from "react-icons/bs";

import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import DismissibleAlert from "./components/DismissibleAlert";
import Button from "./components/Button";
import { Like, BetterLike } from "./components/Like";

import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <DismissibleAlert onClose={() => setAlertVisibility(false)}>
          <strong>Your Computer Have Virus!</strong>
        </DismissibleAlert>
      )}

      <BsFillCalendarFill className="fs-5 me-3 ms-1" color="blue" size="40" />

      <Like className="me-3 ms-3" selectedColor="red" />

      <BetterLike
        onClick={() => {
          console.log("Like Clicked!");
        }}
      />

      <Button
        className="mt-3 ms-3"
        color="primary"
        onClick={() => setAlertVisibility(true)}
      >
        Click Me Or Else
      </Button>

      <ListGroup
        items={["hello", "world", "this", "is", "list"]}
        heading="Some List"
        onSelectItem={() => {}}
      ></ListGroup>
    </div>
  );
}

export default App;
