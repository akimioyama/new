import React from "react";
import { useCookies } from "react-cookie";
import { SignInSingUp } from "../components/Login/SignInSingUp";

const PersonalCab = () => {
    const [cookie, setCookie, removeCookie] = useCookies(["role"])
    // setCookie("role", "user", { path: "/" });

    return(
        <div className="lk">
            {cookie.role == "user" ? "" : <SignInSingUp />}
        </div>
    )
}

export { PersonalCab }