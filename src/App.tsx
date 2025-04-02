// some useful libraries:
// npm install react-icons -> provides a ton of icons to use in your project
import { BsFillCalendarFill } from "react-icons/bs";

import ListGroup from "./components/ListGroup";
import { Alert, DismissibleAlert } from "./components/Alert";
import Button from "./components/Button";
import { Like, BetterLike } from "./components/Like";
import { Cart, NavBar } from "./components/SharedStateEx";
import ExpandableText from "./components/ExpandableText";
import { Form, ReactHookFormEX } from "./components/Form";

import { produce } from "immer";

import React, { useState } from "react";

var section = "4";

function App() {
  // Section #1 Variables
  const [alertVisible, setAlertVisibility] = useState(false);

  // Section #2 Variables
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  // Section #2 Exam || Variables / Functions

  // Section #2 Exam Exercise 2
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const changePlayer = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
  };

  // Section #1 Page
  if (section === "1")
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
  // Section #2 Page
  else if (section === "2")
    return (
      <>
        <div>
          <NavBar cartItemsCount={cartItems.length}></NavBar>
          <Cart
            cartItems={cartItems}
            onClear={() => {
              setCartItems([]);
            }}
          />
        </div>
        <div>
          <h1>PlayerID: {game.id}</h1>
          <h1>PlayerName: {game.player.name}</h1>
          <button className="btn btn-secondary" onClick={changePlayer}>
            Update Name
          </button>
        </div>
      </>
    );
  // Section #3 Page
  else if (section === "3")
    return (
      <>
        <ExpandableText maxChars={5}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, quos, reprehenderit, libero quas dolores rem modi
          inventore maiores tenetur ipsum ipsa cum. At, magni sint tenetur
          corrupti quisquam et quos ipsum. Similique neque veritatis quisquam
          totam ullam sint, commodi obcaecati porro adipisci accusamus
          inventore, distinctio consequatur fuga nemo, tenetur dicta ut nulla ad
          expedita consectetur nobis dolor explicabo! Nihil, quis similique
          numquam reprehenderit sequi eaque ea sunt itaque quisquam quod,
          consectetur natus officiis sint nulla. Esse fugit omnis facere quos ad
          deserunt distinctio minus, repellat accusamus quae error repellendus,
          quam veniam rerum mollitia vel ipsa sit! Nisi voluptates dolore
          dolores.
        </ExpandableText>
        <ExpandableText maxChars={100}>
          Expandable Text Element w/ maxChars=100; Button Shouldn't Be Visible
        </ExpandableText>
      </>
    );
  else if (section === "4")
    return (
      <div>
        <p>My Form</p>
        <ReactHookFormEX></ReactHookFormEX>
      </div>
    );
}

export default App;
