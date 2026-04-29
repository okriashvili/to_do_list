"use client";

import styles from "./taskList.module.scss";
import { ReactNode } from "react";

type taskProps = {
    task: string;
    children?: ReactNode;
    done?: boolean;
}

export default function TaskList(props : taskProps) {
    const classes = [styles.mylist];

    if (props.done) {
        classes.push(styles.taskDone);
    }

    return (
        <li className={classes.join(" ").trim()}>
            <span className={styles.taskText}>{props.task}</span>
            {props.children}
        </li>
    )
}