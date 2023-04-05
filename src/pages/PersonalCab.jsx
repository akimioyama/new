import React from "react";
import { useCookies } from "react-cookie";
import { SignInSingUp } from "../components/Login/SignInSingUp";
import { MainAcc } from "../components/MainAcc";

const PersonalCab = () => {
    const [cookie, setCookie, removeCookie] = useCookies(["role"])
    setCookie("role", "user", { path: "/" });

    return(
        <div className="main">
            {cookie.role == "user" ? <MainAcc /> : <SignInSingUp />}
        </div>
    )
}

export { PersonalCab }