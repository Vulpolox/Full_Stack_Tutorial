import React from "react";

import { FormEvent, useRef, useState } from "react";

const Form = () => {
  // useRef can store values that persist between renders but don't
  // trigger a re-render when updated
  // <> -> denotes the type of value that the useRef will hold (for Typescript)
  // (null) -> initializes the useRef to null (this is necessary in all use cases)

  // useRef lesson code
  // ------------------
  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const ageRef = useRef<HTMLInputElement>(null);

  // person object literal
  //   const person = { name: "", age: 0 };

  const [person, setPerson] = useState({
    name: "",
    age: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // prevents page reload upon sumission
    console.log(person); // log the person object to the console
    // useRef lesson code
    // ------------------
    // if (nameRef.current !== null) {
    //   person.name = nameRef.current.value;
    // }
    // if (ageRef.current !== null) {
    //   person.age = parseInt(ageRef.current.value);
    // }
    // console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Enter Your Name
        </label>
        <input
          /*ref={nameRef}*/
          id="name"
          type="text"
          className="form-control"
          value={
            person.name
          } /*transfers control from DOM to React for data in the field; Ensures sync*/
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
        />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Enter Your Age
        </label>
        <input
          /*ref={ageRef}*/
          id="age"
          type="number"
          className="form-control"
          value={
            person.age
          } /*transfers control from DOM to React for data in the field; Ensures sync*/
          onChange={(event) =>
            setPerson({ ...person, age: event.target.value })
          }
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
