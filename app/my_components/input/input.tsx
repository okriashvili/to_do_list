'use client';


import {useState} from "react";
import styles from "./input.module.scss";
import Button from "../button/button";

import TaskList from "../task_list/taskList";

// icons
import Edit from "../icons/edit/edit";
import Delete from "../icons/delete/delete";
import Done from "../icons/done/done";


export default function Input() {

    type tasksType = {
        task : string;
        tasks : string[];
        id: string;
        taskToRemove: string;
    };

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState<tasksType["tasks"]>([]);



    const editTask = (index: number) => {
        const newTask = prompt("Edit Task", tasks[index]);
        if (newTask !== null) {
            const updatedTasks = [...tasks];
            updatedTasks[index] = newTask;
            setTasks(updatedTasks);
        }
    };

    // receive the value from the input field
    const onChange = (e : any) => {
        setTask(e.target.value);
    }

    // add the value to tasks array and clear the input field
    const addTasks = () => {
        setTasks(prev => [...prev, task]);
        setTask("");
    }

    // adds task to the list when the user presses the enter key
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTasks();
        }
    };


    // removes the task from list
    const removeTask = (index: number) => {
        setTasks(prev => prev.filter((_, idx) => idx !== index));
    };


    return (
        <div className={styles.container}>
            <h1 className={styles.Title}>ToDo App</h1>

            <input type="text" 
            className={styles.myInput}
            placeholder="add Task"
            value={task}
            onChange={onChange}
            onKeyDown={handleKeyPress} 
            />
            <Button onClick={addTasks}
            // onKeyPress={(e) => e.key === 'Enter' && addTasks()}
            />

            {/*  
            <ul>
                {
                tasks.map((v, i) =>  
                    <li key={i} 
                        className={`${styles.mylist} ${styles.ulContainer}`}>
                        {v} 
                        < Edit onClick={() => {}} />  
                        < Delete onClick={() => removeTask(i)} />                        < Delete onClick={() => removeTask(i)} />
                       
                    </li> )  
                }
            </ul> */}

            <ul>
                {
                tasks.map((v, i) =>  
                    <li key={i} 
                        className={`${styles.mylist} ${styles.ulContainer}`}>
                        {v} 
                        < Edit onClick={() => editTask(i)} />  
                        < Delete onClick={() => removeTask(i)} />
                        < Done onClick={() => {}} />                  
                       
                    </li> )  
                }
            </ul>
        </div>
    )
}



