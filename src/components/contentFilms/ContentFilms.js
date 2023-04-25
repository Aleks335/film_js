import React from 'react';
import Film from "./ContentFilm/Film";
import style from './ContentFilms.module.css'

function ContentFilms(props) {
    const {data, isLoading} = props;

    return (
        <div className={style.gridCont}>
            {
                !isLoading && data.masBD.map((item) => <Film item={item}></Film>)
            }
        </div>
    );
}

export default ContentFilms;

