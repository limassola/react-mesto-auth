import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";


function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleChangeEmail(event) {
        setEmail(event.target.value)
    }

    function handleChangePassword(event) {
        setPassword(event.target.value)
    }
    return(
        <>
            <Header>
                <Link className="header__link" to="/sign-up">Регистрация</Link>
            </Header>
            <form className="form form_type_login">
                <h2 className="form__title form__title_type_login">Вход</h2>
                <input 
                className="form__item form__item_type_email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleChangeEmail}
                />
                <input
                className="form__item form__item_type_password"
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={handleChangePassword}
                />
                <button type="submit" className="form__button form__button_type_login">Войти</button>
            </form>
        </>
    )
}

export default Login