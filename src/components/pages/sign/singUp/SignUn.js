import React from 'react';
import style from "../signIn/SignIn.module.css";
import {useAddNewUserMutation} from "../../../../store/authApi";
import {Link, useNavigate} from "react-router-dom";

// signUp  поправить

function SignUn(props) {
    // регистрация
    const [addUser, {isErrorAddUser}] = useAddNewUserMutation();
    const navigate = useNavigate(); //для перехода не из js


    async function singUpFormSubmit(evt) {
        evt.preventDefault();
        // .unwrap() - если ответа от сервера нет то лучше без него
        await addUser(new FormData(evt.target));
        alert("Вы зарегистрированы авторизуйтесь");
        navigate('/sing_in');
    }


    return (
        <div className={style.content}>
            <h2>Зарегистрироваться</h2>
            <form onSubmit={(evt) => singUpFormSubmit(evt)} className={style.form}>
                <input name={"login"} placeholder={"Логин"}/>
                <input name={"pass"} placeholder={"Пароль"} type={"password"}/>
                <input name={"pass2"} placeholder={"Подтверждение пароля"} type={"password"}/>
                <input name={"email"} placeholder={"email"} type={"email"}/>
                <button>Зарегистрироваться</button>
            </form>
            <Link to={'/sing_in'}><p>Войти</p></Link>
            <Link to={'/restore_password'}><p>Восстановить пароль</p></Link>
        </div>

    );
}

export default SignUn;