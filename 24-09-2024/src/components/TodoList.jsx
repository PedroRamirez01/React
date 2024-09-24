import React, { useState, useRef } from 'react'
import { TodoItem } from './TodoItem'
import { v4 as uuid } from 'uuid'

export function TodoList() {
    const [todos, setTodos] = useState([
        {id: 1, tarea: 'Tarea 1'},
        {id: 2, tarea: 'Tarea 2'},
        {id: 3, tarea: 'Tarea 3'},
        {id: 4, tarea: 'Tarea 4'},
        {id: 5, tarea: 'Tarea 5'}
    ]);
    const tareaRef = useRef();

    const agregarTarea = () => {
        const tareaInput = tareaRef.current.value;
        if (tareaInput === '') return;
        setTodos((prevTodos) => {
            const nuevaTarea ={
                id: uuid(),
                tarea: tareaInput
            }
            tareaRef.current.value = '';
            return[...prevTodos, nuevaTarea];
        })
    }

  return (
    <>
        <h1>Lista de Tareas</h1>

        <div style={{display:"flex"}}>
            <input ref={tareaRef} placeholder='Ingrese una tarea' className='form-control'/>
            <button className='btn btn-success' onClick={agregarTarea}>+</button>
        </div>
        <br/>
        <ul className='list-group'>
            {todos.map((todo) => (
                <TodoItem todo={todo}/>
            ))}
        </ul>
    </> 
    )
}
