import React, { useState, useRef } from 'react'
import { TodoItem } from './TodoItem'
import { v4 as uuid } from 'uuid'

export function TodoList() {
    const [todos, setTodos] = useState([
        {id: 1, tarea: 'Tarea 1', completado: false},
        {id: 2, tarea: 'Tarea 2', completado: false},
        {id: 3, tarea: 'Tarea 3', completado: false},
        {id: 4, tarea: 'Tarea 4', completado: false},
        {id: 5, tarea: 'Tarea 5', completado: false}
    ]);
    const tareaRef = useRef();

    const agregarTarea = () => {
        const tareaInput = tareaRef.current.value;
        if (tareaInput === '') return;
        setTodos((prevTodos) => {
            const nuevaTarea ={
                id: uuid(),
                tarea: tareaInput,
                completado: false
            }
            tareaRef.current.value = '';
            return[...prevTodos, nuevaTarea];
        })
    }

    const toggleCompletado = (id) => {
        setTodos((prevTodos) =>
        prevTodos.map((todo) =>
            todo.id === id ? { ...todo, completado: !todo.completado } : todo
        )
        );
    };

    const tareasPendientes = todos.filter((todo) => !todo.completado).length;

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
                <TodoItem todo={todo} toggleCompletado={toggleCompletado}/>
            ))}
        </ul>
        <br/>
        <ul className='list-group'>
            <li className='list-group-item'>
                <label> Quedan {tareasPendientes} tareas pendientes</label>
            </li>
        </ul>
    </> 
    )
}
