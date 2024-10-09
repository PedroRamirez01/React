import React, { Fragment, useRef, useState } from "react";
import { v4 as uuid } from 'uuid';

export function TodoList() {
    const [todos, setTodos] = useState([]);
    const tituloRef = useRef();
    const tareaRef = useRef();
    const [editMode, setEditMode] = useState(null);
    const [newTask, setNewTask] = useState("");
    const importanteRef = useRef();

    const agregarTarea = () => {
        const tituloInput = tituloRef.current.value;
        const tareaInput = tareaRef.current.value;
        const importantCheck = importanteRef.current.checked;
        console.log("importantCheck: ",importantCheck);

        if (tituloInput === '' || tareaInput === '') return;

        const nuevaTarea = {
            id: uuid(),
            titulo: tituloInput,
            tarea: tareaInput,
            completada: false,
            important: importantCheck,
        };

        setTodos((prevTodos) => [...prevTodos, nuevaTarea]);
        tituloRef.current.value = '';
        tareaRef.current.value = '';
        importanteRef.current.value = false;
    };

    const toggleTarea = (id) => {
        const nuevasTareas = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completada: !todo.completada };
            }
            return todo;
        });
        setTodos(nuevasTareas);
    };

    const tareasPendientes = todos.filter((todo) => !todo.completada).length;

    const activarEdicion = (id, tareaActual) => {
        setEditMode(id);
        setNewTask(tareaActual);
    };

    const guardarEdicion = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, tarea: newTask } : todo
            )
        );
        setEditMode(null);
    };

    const eliminarTarea = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    return (
        <Fragment>
            <h1 className="text-center my-4">Lista de Tareas</h1>

            <div className="input-group mb-3">
                <input ref={tituloRef} placeholder="Título de la Tarea" className="form-control" />
                <input ref={tareaRef} placeholder="Descripción" className="form-control ms-2" />
                <div className="form-check ms-5 me-5 my-3">
                    <input ref={importanteRef} className="form-check-input" type="checkbox" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Importante
                    </label>
                </div>
                <button onClick={agregarTarea} className="btn btn-success ms-2">
                    <i className="bi bi-plus-lg"></i>
                </button>
            </div>

            <ul className="list-group">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className={`list-group-item d-flex justify-content-between align-items-center 
                        ${todo.important ? 'bg-danger-subtle' : 'bg-warning-subtle'}`}
                    >
                        <div>
                            <strong>{todo.titulo}</strong>
                            <div className="text-muted">
                                {editMode === todo.id ? (
                                    <input
                                        value={newTask}
                                        onChange={(e) => setNewTask(e.target.value)}
                                        className="form-control"

                                    />
                                ) : (
                                    <span>{todo.tarea}</span>
                                )}
                            </div>
                        </div>
                        <div>
                            {editMode === todo.id ? (
                                <button onClick={() => guardarEdicion(todo.id)} className="btn btn-outline-primary ms-2">
                                    <i className="bi bi-check-lg"></i> Guardar
                                </button>
                            ) : (
                                <button onClick={() => activarEdicion(todo.id, todo.tarea)} className="btn btn-outline-warning ms-2">
                                    <i className="bi bi-pencil-fill"></i> Editar
                                </button>
                            )}
                            <button onClick={() => eliminarTarea(todo.id)} className="btn btn-outline-danger ms-2">
                                <i className="bi bi-trash-fill"></i>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="alert alert-info mt-4 text-center">
                <i className="bi bi-exclamation-circle-fill"></i> Tareas pendientes: {tareasPendientes}
            </div>
        </Fragment>
    );

}
