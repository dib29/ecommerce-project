
import React from 'react'
export default function TodoItems({todo, onDelete}) {

    return (
        <div>
            <h4 className="">{todo.title}</h4>
            <p>{todo.id}</p>
            <button className="btn-danger" onClick={()=>onDelete(todo)}>Delete</button>
        </div>
    )
}
