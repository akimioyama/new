import React, { useState } from "react";
import { useCookies } from "react-cookie"
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

const SignInSingUp = () => {
    const [token, setToken] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies(["jwtToken", "role"]); 

    return(
        <div className="qwe">
            <SignIn />
            <SignUp />
        </div>
    )
}

export { SignInSingUp }