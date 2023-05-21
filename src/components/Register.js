import React from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "./Auth";
import '../index.css';
import InfoTooltip from './InfoTooltip'


function Register() {
    const [formValue, setFormValue] = React.useState({
        password: '',
        email: ''
    })
    const navigate = useNavigate();
    const [isSuccess, setSuccess] = React.useState(false);
    const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target;
    
        setFormValue({
          ...formValue,
          [name]: value
        });
      }

    function handleSubmit(event) {
        event.preventDefault()
        const {password, email} = formValue;
        signup(password, email)
        .then(() => {
            setSuccess(true)
            setInfoTooltipOpen(true)
        })
        .catch(err => console.log(err))
    }

    function handleClosePopup() {
        setInfoTooltipOpen(false)
        setSuccess(false)
        navigate('/sign-in')
    }
    return(
        <>
            <Header>
                <Link className="header__link" to="/sign-in">Войти</Link>
            </Header>
            <form className="form form_type_login" onSubmit={handleSubmit}>
                <h2 className="form__title form__title_type_login">Регистрация</h2>
                <input 
                className="form__item form__item_type_email"
                type="email"
                placeholder="Email"
                value={formValue.email}
                name="email"
                onChange={handleChange}
                required
                />
                <input
                className="form__item form__item_type_password"
                type="password"
                placeholder="Пароль"
                value={formValue.password}
                name="password"
                onChange={handleChange}
                required
                />
                <button type="submit"  className="form__button form__button_type_login">Зарегистрироваться</button>
                <Link className="form__link" to="/sign-in">Уже зарегистрированы? Войти</Link>
            </form>
            <InfoTooltip isSuccess={isSuccess} isOpen={isInfoTooltipOpen} onClose={handleClosePopup}/>
        </>
    )
}

export default Register