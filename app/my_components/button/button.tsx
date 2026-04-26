'use client';

import { GoArrowRight } from "react-icons/go";
import styles from "./button.module.scss"; 

type buttonProps = {
    onClick: () => void;
    onKeyPress?: () => void;
}

export default function Button({onClick} : buttonProps) {

    let classes = [] 
  

    return (
        <div className={styles.container} onClick={onClick}>
            <button 
            // onKeyPress={onkeypress}
            > 
                <GoArrowRight className={styles.myicon}/> 
                Add Task

            </button>
        </div> 
    );

}


