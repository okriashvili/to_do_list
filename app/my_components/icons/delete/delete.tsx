"use client";

import { RiDeleteBin6Line } from "react-icons/ri";
import style from "./delete.module.scss";
import { iconProps } from "../edit/edit";



export default function Delete({onClick} : iconProps) {

    return (
        <>
            <RiDeleteBin6Line 
                className={`${style.taskIcons} ${style.deleteIcon}`}
                onClick={onClick}
            />
        </>
    )
}

