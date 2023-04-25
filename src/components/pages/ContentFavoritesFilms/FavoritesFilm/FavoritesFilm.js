import React from 'react';
import {Link} from "react-router-dom";
import style from "../../../contentFilms/ContentFilm/Film.module.css";

function FavoritesFilm(props) {
    const {item, isLoading} = props
    return (
        <Link to={'/movie/' + item.film_id} className={style.container}>
            <div>
                <h2>Название фильма: {item.title}</h2>
                <h3>год выпуска : {item.date}</h3>
                <img className={style.img} src={item.imgUrl}/>
            </div>
        </Link>
    );
}

export default FavoritesFilm;