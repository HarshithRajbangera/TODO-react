import React, { useState } from "react";
import './ToDoApp.css';

const ToDoApp = () => {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (newTask.trim() === "")
            return;
        setTasks([...tasks,
        {
            id: Date.now(),
            text: newTask
        }]);
        setNewTasks("");
    };

    const editTask = (id) => {
        const updatedText = prompt("Edit Task:", tasks.find(task => task.id === id).text);

        if (updatedText !== null) {
            setTasks(tasks.map(task => (task.id === id ? { ...task, text: updatedText } : task)))
        }
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }



    return (
        <>

            <div className="main">
                <div className="ToDo-main">

                    <h1>TO-DO LIST</h1>
                    <div className="todo-input">

                        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                    </div>

                    <button onClick={addTask}>Add Task</button>

                    <ul>
                        {tasks.map((task) => (
                            <li key={task.id}>
                                <p>{task.text}</p>
                                <button onClick={(e) => editTask(task.id)}>Edit Task</button>
                                <button onClick={(e) => deleteTask(task.id)}> Delete Task</button>
                            </li>
                        ))}
                    </ul>
                </div>


            </div>


        </>
    )
}

export default ToDoApp