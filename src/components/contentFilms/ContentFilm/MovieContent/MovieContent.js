import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useAddCommentMutation, useGetCommFilmsQuery, useGetInfoFilmQuery,} from "../../../../store/filmsApi";
import {useSelector} from "react-redux";
import style from './MovieContent.module.css'

import heart from "../../../../image/heart.svg"
import activeHeart from "../../../../image/heart3.svg"
import {useAddFavoritesFilmsMutation, useDelFavoritesFilmsMutation} from "../../../../store/favoritesApi";


function MovieContent(props) {
    // получили id через url
    const id = useParams();

    // комментарии
    // // skip:isSkip  skip - можно заложить состояние
    const [isSkip, setisSkip] = useState(true);
    const commFilms = useGetCommFilmsQuery(id.id, {skip: isSkip});


    // add Comment
    const [inputValue, setInputValue] = useState('');

    const [addComment, {isErrorAddComment}] = useAddCommentMutation();
    const [AddFavoritesFilm, {isErrorFavoritesFilm}] = useAddFavoritesFilmsMutation();
    const [DelFavoritesFilm, {isErrorDelFavoritesFilm}] = useDelFavoritesFilmsMutation();

    // содержание фильма
    const infoFilm = useGetInfoFilmQuery(id.id);
    const isAuth = useSelector((state) => {
        return state.authData.isAuth
    })

    // console.log('infoFilmttt', infoFilm.data)

    const navigate = useNavigate(); //для перехода не из js
    async function sendCommentHandler(evt, idFilm) {
        evt.preventDefault();
        if (!isAuth) return navigate('/sing_in');// переход не из js
        isAuth && await addComment({textComment: inputValue, idFilm: idFilm}).unwrap()
        setInputValue('');
    }

    // добавление favorites
    async function add_favorites(idFilm, isFavorite) {
        if (!isAuth) return navigate('/sing_in');// переход не из js
        // ветлление если из фавори = тру(делайт) иначе дела (актив)
        console.log('isFavorite', isFavorite)
        if (isFavorite) {
            await DelFavoritesFilm({idFilm: idFilm})
        } else await AddFavoritesFilm({idFilm: idFilm})
    }


    return (
        <div>
            {
                !infoFilm.isLoading && infoFilm.data.selectFilm.map((item) =>
                    <div>
                        {
                            item.imgUrl.map((ur) => <img className={style.allImgUrl} src={ur}/>)
                        }

                        <h3>Год: {item.date}</h3>
                        <h3>Директор: {item.director_name}</h3>
                        <img onClick={() => add_favorites(id.id, item.isFavorite)} className={style.heart} src={
                            item.isFavorite ? activeHeart : heart
                        }/>

                        {
                            item.description.length > 0 ? <h5>Описание: {item.description}</h5> :
                                <h5>Описание: Описание нет</h5>
                        }


                    </div>
                )
            }

            <form onSubmit={(evt => sendCommentHandler(evt, id.id))}>
                <input onInput={(evt => setInputValue(evt.target.value))} placeholder={'comment'}/>
                <button>Отправить</button>
            </form>

            <button onClick={(() => {
                setisSkip(false)
            })}>Комментарии
            </button>


            {
                commFilms.data && commFilms.data.select_comments.map((it) =>
                    <div style={{display: "flex"}}>
                        <h3 style={{marginRight: 15}}>Комментарий: {it.text_comment} </h3>
                        <h3>Автор: {it.email.length > 0 ? it.email : "Аноним"} </h3>
                    </div>
                )
            }


        </div>
    );
}

export default MovieContent;