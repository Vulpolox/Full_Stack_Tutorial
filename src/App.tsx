import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import DismissibleAlert from "./components/DismissibleAlert";
import Button from "./components/Button";

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
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
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
