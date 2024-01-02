import React, { useState } from "react";

function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const[input, setinput] = useState("");

    function handleInputChange(event) {
        setinput(event.target.value);
    }

    function addTask() {

        if (input.trim()) {
            setTasks(t => [...t, input]);

            setinput("");
        }

    }

    function deleteTask(index) {
        const newTasks = tasks.filter((_, i) => i !== index)
        setTasks(newTasks);
    }

    function taskUp(index) {
        if (index > 0) {
            const newTasks = [...tasks];
            [newTasks[index], newTasks[index - 1]] = 
            [newTasks[index - 1], newTasks[index]];
            setTasks(newTasks);
        }
    }

    function taskDown(index) {
        if (index < tasks.length - 1) {
            const newTasks = [...tasks];
            [newTasks[index], newTasks[index + 1]] = 
            [newTasks[index + 1], newTasks[index]];
            setTasks(newTasks);
        }
    }

    return(
        <div className="to-do-list">
            <h1>TO-DO LIST</h1>
            <div className="add-list">
                <input type="text" 
                placeholder="Enter a task..."
                value={input}
                onChange={handleInputChange}
                />
                <button className="add-button" onClick={addTask}><i class="fa-solid fa-plus fa-lg"></i></button>
            </div>
            <ul>
                {tasks.map((t, i) => 
                <li key={i}>
                <span className="text">{t}</span>
                <button className="delete-button" onClick={() => deleteTask(i)}><i class="fa-solid fa-trash fa-lg"></i></button>
                <button className="up-button" onClick={() => taskUp(i)}><i class="fa-solid fa-arrow-up fa-lg"></i></button>
                <button className="down-button" onClick={() => taskDown(i)}><i class="fa-solid fa-arrow-down fa-lg"></i></button>
                </li>)}
            </ul>
        </div>
    );
}

export default ToDoList