import React, { useState } from "react";
import { Ringer } from "./Ringer";

const AdminAcc = ({role}) => {

    return(
        <div className="main">
            {role == "ringer" ? ( <Ringer />) :
             role == "admin" ? ("admin") : 
             ""}
        </div>
    )
}

export { AdminAcc }