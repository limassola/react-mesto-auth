import React from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import '../index.css';
import { signin } from "./Auth";
import InfoTooltip from './InfoTooltip'


function Login({handleLogin}) {
    const [formValue, setFormValue] = React.useState({
        password: '',
        email: ''
    })

    const navigate = useNavigate();
    const [isSuccess, setSuccess] = React.useState(false);
    const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false)

    function handleClosePopup() {
        setInfoTooltipOpen(false)
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
    
        setFormValue({
          ...formValue,
          [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const {email, password} = formValue;
        signin(password, email)
        .then((data) => {
            if(data.token) {
                localStorage.setItem('jwt', data.token)
                handleLogin()
                navigate('/')
            }
        })
        .catch((err) => {
            console.log(err)
            setSuccess(false)
            setInfoTooltipOpen(true)
        })
    }

    return(
        <>
            <Header>
                <Link className="header__link" to="/sign-up">Регистрация</Link>
            </Header>
            <form className="form form_type_login" onSubmit={handleSubmit}>
                <h2 className="form__title form__title_type_login">Вход</h2>
                <input 
                className="form__item form__item_type_email"
                type="email"
                placeholder="Email"
                value={formValue.email}
                name="email"
                required
                onChange={handleChange}
                />
                <input
                className="form__item form__item_type_password"
                type="password"
                placeholder="Пароль"
                value={formValue.password}
                name="password"
                required
                onChange={handleChange}
                />
                <button type="submit" className="form__button form__button_type_login">Войти</button>
            </form>
            <InfoTooltip isSuccess={isSuccess} isOpen={isInfoTooltipOpen} onClose={handleClosePopup}/>
        </>
    )
}

export default Login