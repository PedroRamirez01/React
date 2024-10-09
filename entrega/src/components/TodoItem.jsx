import React, { Fragment } from "react";

export function TodoItem({todo, toggleTarea}){
    const handleCheckboxClick = () => {
        toggleTarea(todo.id);
    };

    return(
        <Fragment>
            <li className="list-group-item d-flex align-items-center">
                <input
                    type="checkbox"
                    checked={todo.completada}
                    onChange={handleCheckboxClick}
                    className="form-check-input me-2"
                />
                {todo.tarea}
            </li>
        </Fragment>
    )
}