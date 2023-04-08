import React, { useState } from "react";
import { useCookies } from "react-cookie"
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

const SignInSingUp = ({onChange}) => {
    const [token, setToken] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies(["jwtToken", "role"]); 

    const change = (temp) => {
        onChange(temp)
    }

    return(
        <div className="qwe">
            <SignIn onChange={change}/>
            <SignUp />
        </div>
    )
}

export { SignInSingUp }