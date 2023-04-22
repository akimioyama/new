import React, { useState } from "react";
import { Ringer } from "./Ringer";
import { AdminMain } from "./AdminMain";

const AdminAcc = ({role}) => {

    return(
        <div className="main">
            {role == "ringer" ? ( <Ringer />) :
             role == "admin" ? ( <AdminMain />) : 
             ""}
        </div>
    )
}

export { AdminAcc }