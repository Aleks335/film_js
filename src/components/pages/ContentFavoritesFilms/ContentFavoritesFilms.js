import React from 'react';
import {useGetFavoritesFilmsQuery} from "../../../store/favoritesApi";
import style from "../../contentFilms/ContentFilms.module.css";
import FavoritesFilm from "./FavoritesFilm/FavoritesFilm";
import {useSelector} from "react-redux";

function ContentFavoritesFilms(props) {
    const {data, isLoading} = useGetFavoritesFilmsQuery()
    !isLoading && console.log('data', data)
    const isAuth = useSelector((state) => state.authData.isAuth)
    return (
        <div className={style.gridCont}>
            {!isAuth && <p>вы не вошли</p>}
            {
                (data && !isLoading) && data.favoritesFilm.map((item) => <FavoritesFilm item={item}
                                                                                        isLoading={isLoading}></FavoritesFilm>)
            }
        </div>
    );
}

export default ContentFavoritesFilms;