import React from 'react';

function Element({element, delete_element , mark_element}) {

  return (
    <div className="todo_element">
    <li >{element.date} : {element.todo} = {element.state}
    <button id="delete" onClick={() => delete_element(element.id)}> delete</button>
    <button id="mark" onClick={() => mark_element(element.id)}> completed</button>
    </li>
    </div>
  );
}

export default Element;