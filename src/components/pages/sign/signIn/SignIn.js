import React from 'react';
import style from './SignIn.module.css'
import {useUserAuthorizationMutation} from "../../../../store/authApi";
import {Link, useNavigate} from "react-router-dom";

function SignIn(props) {
    const [userAuthorization, {isErrorUserAuthorization}] = useUserAuthorizationMutation();
    const navigate = useNavigate(); //для перехода не из js

    async function singInFormSubmit(evt) {
        evt.preventDefault();
        const accessToken = await userAuthorization(new FormData(evt.target));
        ///        // проверка на авторизацию пользователя
        if (accessToken.error) {
            if (accessToken.error.originalStatus === 401) {
                alert('Ввели неправильный логин или пароль');
            }else alert('Ошибка')
        }else {
            alert('Вы авторизованны');
            navigate('/');
        }
    }

// авторизация

    return (
        <div className={style.content}>
            <h2>Войти</h2>
            <form onSubmit={(evt) => singInFormSubmit(evt)} className={style.form}>
                <input name={"login"} placeholder={"Логин"}/>
                <input name={"pass"} placeholder={"Пароль"} type={"password"}/>
                <button>Войти</button>
            </form>
            <Link to={'/sing_un'}><p>Регистрация</p></Link>
            <Link to={'/restore_password'}><p>Восстановить пароль</p></Link>
        </div>
    );
}

export default SignIn;