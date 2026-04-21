'use client';

import { GoArrowRight } from "react-icons/go";
import styles from "./button.module.scss"; 


export default function Button() {

    let classes = [] 

    return (
        <div className={styles.container}>
            <button className={styles.mybutton}> 

                <GoArrowRight className={styles.myicon}/> 
                Add Task

            </button>
        </div>
    );

}


