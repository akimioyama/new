import React from "react";
import { MyButton } from "../components/UI/MyButton/MyButton"

const Login = () => {

    return(
        <div>
            <h1>Страница для входа</h1>
            <form>
                <input type="text" placeholder="Введите логин"/>
                <input type="password" placeholder="Введите пароль"/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    )
};

export { Login }