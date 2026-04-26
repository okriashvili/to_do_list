"use client";

import styles from "./taskList.module.css";

type taskProps = {
    children : string[] | number[];
}


export default function TaskList(children : taskProps) {

    return (
        <ul className={styles.mylist}>
            {children.children.map((child, index) => (
                <li key={index}>{child}</li>
            ))}
        </ul>


    )


}