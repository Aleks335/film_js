import React, {useState} from 'react';
import {useAddCodeUserRecoveryMutation} from "../../store/authApi";
import {popupRestorePassword} from "../../store/popupsSlice";
import {useDispatch} from "react-redux";
import style from './PopupRestorePassword.module.css'
import close from '../../image/close.svg'

function PopupRestorePassword(props) {
    const dispatch =  useDispatch() // вызов метода для изменеие состояния в modalSlice
    const [restoreUserPassword, {restoreErrorAddUser}] = useAddCodeUserRecoveryMutation();


    async function codeRecovery(evt) {
      evt.preventDefault();
      await restoreUserPassword(new FormData(evt.target));
      dispatch(popupRestorePassword(false));
    }

    return (
        // evt.currentTarget === evt.target если облости совпадают значит клик в серую зону
        <div onClick={(evt)=> evt.currentTarget === evt.target && dispatch(popupRestorePassword(false))} className={style.background}>
            <form className={style.container} onSubmit={((evt)=>codeRecovery(evt))}>
                {/*evt.currentTarget === evt.target*/}
                <img onClick={()=> dispatch(popupRestorePassword(false))} className={style.close} src={close}/>
                <div className={style.content} >
                    <input name={"code"} placeholder={"в ведите код"}/>
                    <button>Отправить</button>
                </div>
            </form>
        </div>
    );
}

export default PopupRestorePassword;