import React from "react";

const Input = (props) => (
  <input
    placeholder={props.placeholder}
    name={props.name}
    type={props.type}
    onChange={(e) => props.handleChange(e)}
    step="0.0001"
    value={props.value}
    className="inputField"
  ></input>
);

export default Input;
