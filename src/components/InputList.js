import React from "react";

function InputList({ value, onChange, onSubmit }) {
  return (
    <div id="myDIV" className="header">
      <h2>My To Do List</h2>
      <form className="form" onSubmit={onSubmit}>
        <input
          className="input"
          type="text"
          id="myInput"
          value={value}
          onChange={onChange}
          placeholder="Title..."
        />
        <button className="addBtn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default InputList;
