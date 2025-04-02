import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";

// USING REACT HOOK FORM LIBRARY TO SIMPLIFY FORM
// ----------------------------------------------
// npm install react-hook-form@7.43

const ReactHookFormEX = () => {
  // destructuring the useForm, you can extract some useful member variables
  // register: creates binding between input field and RHF's internal state
  // handleSubmit: takes a function, does validation, and calls the passed function, passing to it FieldData
  // as the first argument
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          First Name
        </label>
        <input
          id="name"
          type="text"
          className="form-control"
          {...register("name")}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          type="number"
          className="form-control"
          {...register("age")}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ReactHookFormEX;
