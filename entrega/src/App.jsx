import React, { Fragment } from "react";
import { TodoList } from "./components/TodoList";
export function App() {

    return (
        <Fragment>
            <div className="container m-4">
                <TodoList/>
            </div>
        </Fragment>
    )
}