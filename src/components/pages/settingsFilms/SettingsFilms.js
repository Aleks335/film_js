import React from 'react';
import {useAddFilmsMutation} from "../../../store/filmsApi";

function SettingsFilms(props) {
    const [addFilms, {isError}] = useAddFilmsMutation();

    async function submitAddFilms(evt) {
        evt.preventDefault();
        await addFilms(new FormData(evt.target)).unwrap();
    }


    // const {submitAddFilms}=props

    return (
        <div>
            <form onSubmit={(evt) => submitAddFilms(evt)} style={{margin: 5}}>
                <h2>Добавить фильм</h2>
                <input style={{margin: 5}} name={'title'} placeholder={'Название'}/>
                <input style={{margin: 5}} name={'directorName'} placeholder={'Директор'}/>
                <input style={{margin: 5}} name={'date'} placeholder={'Год год выпуска'}/>
                <input style={{margin: 5, width: 400, height: 80}} name={'description'}
                       placeholder={'Описание фильма'}/>
                <input style={{margin: 5}} multiple={true} name={'files'} type={'file'} placeholder={'d'}/>
                <button>Добавить</button>
            </form>
            <form style={{margin: 5}}>
                <h2>Добавить доступ</h2>
                <input style={{margin: 5}} name={'login'} placeholder={'Логин'}/>
                <input style={{margin: 5}} name={'pass'} placeholder={'Прароль'}/>
                <input style={{margin: 5}} name={'email'} placeholder={'email'}/>
                <button>Добавить</button>
            </form>


        </div>
    );
}

export default SettingsFilms;


// <ul className={style.menu}>
//                         <li>
//                             <Link to={'/'}></Link>
//                         </li>
//                         <li>
//                             <Link to={'/orders'}}></Link>
//                         </li>
//                     </ul>

