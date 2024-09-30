import React from 'react';

function Newtodo({ todo, index, deltodos }) {
  return (
    <div className='todos'>
      <p>{todo}</p>
      <div className='actions'>
        <input type="checkbox" />
        <button onClick={() => deltodos(index)}>DELETE</button>
      </div>
    </div>
  );
}

export default Newtodo;
