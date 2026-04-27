
import { MdModeEdit } from "react-icons/md";
import style from "./edit.module.scss";


export type iconProps = {
    onClick: () => void;
}

export default function Edit({onClick} : iconProps) {

    return (

        <>
            <MdModeEdit className={style.taskIcons + " " + style.editIcon} onClick={onClick}/> 
        </>
        
    )



}

