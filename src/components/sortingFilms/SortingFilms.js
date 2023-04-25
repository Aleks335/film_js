import React from 'react';

function SortingFilms(props) {
    const {submitYear, setyearInput, setStateSorting, stateSorting} = props
    return (
        <div style={{display: "flex", flexDirection: "column", marginTop: 20}}>
            <h2>Сортировка</h2>
            <div style={{display: "flex"}}>

                <form onSubmit={(evt) => submitYear(evt)} style={{margin: 5}}>
                    <p>после указанного года</p>
                    <input onInput={(evt) => setyearInput(evt.target.value)}/>
                    <button>сортировка</button>
                </form>

                <div style={{margin: 5}}>
                    <p>по названию фильма</p>
                    <button onClick={() => setStateSorting({...stateSorting, column: 'title', sorting: 'ASC'})}>от А, до
                        Я
                    </button>
                    <button onClick={() => setStateSorting({...stateSorting, column: 'title', sorting: 'DESC'})}>от Я,
                        до А.
                    </button>
                </div>
                <div style={{margin: 5}}>
                    <p>отсортировать фильмы по дате съемки</p>
                    <button onClick={() => setStateSorting({...stateSorting, column: 'date', sorting: 'ASC'})}>Старший
                    </button>
                    <button
                        onClick={() => setStateSorting({...stateSorting, column: 'date', sorting: 'DESC'})}>Младший
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SortingFilms;