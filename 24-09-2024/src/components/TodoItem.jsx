import React from 'react'

export function TodoItem({todo, toggleCompletado}) {
    const {id, tarea, completado} = todo;

    const handleCheckboxClick = () => {
        toggleCompletado(id);
    };

    return (
        <>
            <li className='list-group-item'>
                <div class="form-check">
                    <input 
                        class="form-check-input" 
                        type="checkbox" 
                        checked={completado}
                        onChange={handleCheckboxClick}/>
                    <label class="form-check-label" for="flexCheckDefault">
                        {tarea}
                    </label>
                </div>
            </li>
        </>
    )
}
