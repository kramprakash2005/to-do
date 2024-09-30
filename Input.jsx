import React from "react";

function Input({inputval , writetodo, addtodo}) {
  return (
    <div className="input-container">
      <input type="text" value={inputval} onChange={writetodo}></input>
      <button onClick={addtodo}>+</button>
    </div>
  );
}

export default Input;
