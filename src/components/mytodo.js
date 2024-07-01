import React, { useState } from 'react';
import Element from './element';

function MyTodo({className}) {
    const [maListe , setListe]=useState([]);
    function delete_element(id){
        setListe(maListe.filter(element=> element.id !==id))
    }
    function mark_element (id){
        setListe(maListe.map(element => {
            if (element.id===id){
                element.state="completed"
                return element
            }else {
                return element ;
            }
        }
    ))
    }

    const todo_element=maListe.map( element =>{
        return <Element key={element.id} 
                        element={element} 
                        mark_element={mark_element}
                        delete_element={delete_element}></Element>
    })
    const [newtodo, setNewtodo]= useState({
        todo: "",
        date: null
    })

    function add_todo(todo1, date){
        let newid = 0;
        if (maListe.length > 0) {
        newid = maListe[maListe.length - 1].id + 1;
        }
        const newtodo_element= {
            id: newid,
            date: date,
            todo: todo1,
            state:" not completed"
            };
        return setListe([...maListe,newtodo_element])

    }

  return (
    <div className={className}>
        <ul>
            {todo_element}
        </ul>
        <div>
            <h3>Add new todo</h3>
            <input placeholder="new todo" type="text" value={newtodo.todo} onChange={e => setNewtodo(prevstate=>({...prevstate,todo: e.target.value}))} />
            <input placeholder="date" type="date" value={newtodo.date} onChange={e => setNewtodo(prevstate=>({...prevstate, date: e.target.value}))} />
            <button onClick={()=>add_todo(newtodo.todo,newtodo.date)}> add new todo </button>
        </div>
    </div>
  );
}

export default MyTodo;