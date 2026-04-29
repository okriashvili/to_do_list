"use client";

import { MdDone } from "react-icons/md";
import style from "./done.module.scss";
import { iconProps } from "../edit/edit";



export default function Done({onClick} : iconProps) {

    return (
        <>
            <MdDone
                className={`${style.taskIcons} ${style.doneIcon}`}
                onClick={onClick}
            />
        </>
    )
}

