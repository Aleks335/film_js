import React from 'react';
import style from "../signIn/SignIn.module.css";
import {Link} from "react-router-dom";
import {useAddNewUserPasswordMutation} from "../../../../store/authApi";
import {useDispatch} from "react-redux";
import {popupRestorePassword} from "../../../../store/popupsSlice";


function SignRestoreUserPassword(props) {
    const [restoreUserPassword, {restoreErrorAddUser}] = useAddNewUserPasswordMutation();
    const dispatch =  useDispatch() // вызов метода для изменеие состояния в modalSlice

    async function restorePasswordFormSubmit(evt) {
        evt.preventDefault();
        await restoreUserPassword(new FormData(evt.target));
        dispatch(popupRestorePassword(true))
  }

    return (
        <div className={style.content}>
            <h2>Восстановить пароль</h2>
            <form className={style.form} onSubmit={((evt)=> restorePasswordFormSubmit(evt))}>
                <input name={"login"} placeholder={"логин"}/>
                <input name={"old_password"} placeholder={"Старый пароль"} type={"password"}/>
                <input name={"new_password"} placeholder={"Введите новый пароль"} type={"password"}/>
                <button>Восстановить пароль</button>
            </form>
            <Link to={'/sing_in'}><p>Войти</p></Link>
            <Link to={'/sing_un'}><p>Регистрация</p></Link>

        </div>
    );
}

export default SignRestoreUserPassword;