import React from 'react';
import Newtodo from './Newtodo';

function Todo({ todos , deltodos}) {
  return (
    <div className='container'>
      {todos.map((todo, index) => (
        <Newtodo  index={index} deltodos={deltodos} todo={todo} />
      ))}
    </div>
  );
}

export default Todo;
