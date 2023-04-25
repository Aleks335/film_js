import React from 'react';
import style from './Film.module.css';
import {Link} from "react-router-dom";

function Film(props) {
    const {item} = props
    return (
        <Link to={'/movie/' + item._id} className={style.container}>
            <div>
                <h2>Название фильма: {item.title}</h2>
                <h3>год выпуска : {item.date}</h3>
                <img className={style.img} src={item.imgUrl}/>
            </div>
        </Link>
    );
}

export default Film;