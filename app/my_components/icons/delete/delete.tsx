"use client";

import { RiDeleteBin6Line } from "react-icons/ri";
import style from "./delete.module.scss";



export default function Delete() {

    return (
        <>
            <RiDeleteBin6Line className={`${style.taskIcons} ${style.deleteIcon}`}/>
        </>
    )
}

