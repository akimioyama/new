import React from "react";
import cl from "./MyButton.module.css"

const MyButton = ({children, ...props}) => {
    return(
        <button className={cl.number}>{children}</button>
    )
}

export {MyButton}