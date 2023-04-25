import React from 'react';

import {Link, Route, Routes} from "react-router-dom";
import InfoPage from "./components/pages/infoPage/InfoPage";
import SettingsFilms from "./components/pages/settingsFilms/SettingsFilms";
import MovieContent from "./components/contentFilms/ContentFilm/MovieContent/MovieContent";
import SignIn from "./components/pages/sign/signIn/SignIn";
import SignUn from "./components/pages/sign/singUp/SignUn";
import ContentFavoritesFilms from "./components/pages/ContentFavoritesFilms/ContentFavoritesFilms";
import {useSelector} from "react-redux";
import SignRestoreUserPassword from "./components/pages/sign/signRestoreUserPassword/SignRestoreUserPassword";
import PopupRestorePassword from "./components/popup/PopupRestorePassword";

function App() {
    const isAuth = useSelector((state) => {
        return state.authData.isAuth
    })
    const isRestorePasswordOpen = useSelector((state)=>{return state.popupsSlice.isRestorePasswordOpen})

    return (
        <div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: 'space-between', color: "red"}}>
                <ul style={{display: "flex"}}>
                    <li style={{marginRight: 25}}>
                        <Link to={'/'}>
                            <p>Home</p>
                        </Link>
                    </li>
                    <li style={{marginRight: 25}}>
                        <Link to={'/favorites'}>
                            <p>Favorites</p>
                        </Link>
                    </li>
                    <li style={{marginRight: 25}}>
                        <Link to={'/orders'}>
                            <p>Settings</p>
                        </Link>
                    </li>
                    <li style={{marginRight: 25}}>
                        <Link to={'/sing_in'}>
                            <p>Sing in</p>
                        </Link>
                    </li>
                </ul>

                {/*// сделать как гкомпанент */}
                <h4 style={{margin: 30}}>
                    {
                        isAuth ? 'вы авторизованы' : 'вы не авторизованы'
                    }
                </h4>

            </div>

            <Routes>
                {/*создание страниц*/}
                <Route path={'/'} element={<InfoPage/>}></Route>
                <Route path={'/orders'} element={<SettingsFilms/>}></Route>
                <Route path={'/favorites'} element={<ContentFavoritesFilms/>}></Route>
                {/*/:id - ждет в урле параметр  <Link to={'/movie/' + item._id}></Link> -передали,
                     const param =useParams() - приняли*/}
                <Route path={'/movie/:id'} element={<MovieContent/>}></Route>
                <Route path={'/sing_in'} element={<SignIn/>}></Route>
                <Route path={'/sing_un'} element={<SignUn/>}></Route>
                <Route path={'/restore_password'} element={<SignRestoreUserPassword/>}></Route>
            </Routes>
            {
                isRestorePasswordOpen && <PopupRestorePassword/>
            }



        </div>
    );
}

export default App;
