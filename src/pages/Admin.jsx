import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { SignIn } from "../components/Login/SignIn";
import { AdminAcc } from "../components/AdminAcc";

const Admin = () => {
    const [cookie, setCookie, removeCookie] = useCookies(["role"])

    const change = (temp) => {
        console.log(temp)
        setCookie("role", temp.role, { path: "/" });
        setCookie("jwt", temp.jwtToken, { path: "/" });
        setCookie("id", temp.id, { path: "/" });
    }

    return(
        <div className="main">
            {cookie.role == "admin" ? <AdminAcc role={"admin"} /> :
            cookie.role == "ringer" ? <AdminAcc role={"ringer"} /> :
            <SignIn onChange={change} infoRole={"admin"}/>}
        </div>
    )
}

export { Admin }