import React from "react";
import "./search.styles.css";

export const Search = ({placeholder, onChangeHandler}) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    ></input>
  );
};
