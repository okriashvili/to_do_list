'use client';


import {useState} from "react";
import styles from "./input.module.scss";
import Button from "../button/button";
import { NodeNextRequest } from "next/dist/server/base-http/node";


export default function Input() {




    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState(["krk","20 axali sityva", "250", "notoM","20 axali sityva", "250", "notoM"]);


    const onChange = (e : any) => {
        setTask(e.target.value);

    }


    const addTasks = () => {
        setTasks([...tasks, task]);
        setTask("");

    }

    console.log(`tasks are ${tasks}`)
    console.log(`task is ${task}`)




    return (
        <div className={styles.container}>
            <h1 className={styles.Title}>ToDo App</h1>

            <input type="text" 
            className={styles.myInput}
            placeholder="add Task"
            />
            <Button />
 
            <ul>
                {
                tasks.map(v => 
                    <li className={styles.mylist}>
                        {v}
                        
                    </li> )
                    
                }

            </ul>

        </div>
    )
}



