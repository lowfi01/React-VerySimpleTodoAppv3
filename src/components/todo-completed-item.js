
import React from 'react';

export default function CompletedItem({todo, onUndo, index, onDelete}) {
    return(
        <li>
            {todo}
            <button onClick={() => {onUndo(todo, index)}}>Undo</button>
            <button onClick={() => {onDelete(index)}}>Delete</button>
        </li>
    )
} 