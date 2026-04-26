'use client';


import {useState} from "react";
import styles from "./input.module.scss";
import classes from "../button/button.module.scss";
import Button from "../button/button";


export default function Input() {

    type tasksType = {
        task : string;
        tasks : string[]};



    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState<tasksType["tasks"]>([]);



    const onChange = (e : any) => {
        setTask(e.target.value);

    }


    const addTasks = () => {
        setTasks([...tasks, task]);
        setTask("");

    }

                

    



    return (
        <div className={styles.container}>
            <h1 className={styles.Title}>ToDo App</h1>

            <input type="text" 
            className={styles.myInput}
            placeholder="add Task"
            value={task}
            onChange={onChange}
            />
            <Button onClick={addTasks}
            // onKeyPress={(e) => e.key === 'Enter' && addTasks()}
            />
 
            <ul>
                {
                tasks.map((v, i) =>  
                    <li key={i} className={styles.mylist}>
                        {v}
                        
                    </li> )  
                }

            </ul>

        </div>
    )
}



