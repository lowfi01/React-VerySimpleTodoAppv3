import React from 'react'

export default function TodoItem({index, todo, onDelete, onComplete}){

    
    return(
        <li>
            {todo}
            <span>    </span>
            <button onClick={() => onDelete(index)}>Delete</button>
            <span>     </span>
            <button onClick={() => onComplete(todo, index)}>Completed</button>
        </li>
    )
} 