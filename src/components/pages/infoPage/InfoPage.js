import React, {useState} from 'react';
import {useGetAllFilmsQuery} from "../../../store/filmsApi";
import ContentFilms from "../../contentFilms/ContentFilms";
import SortingFilms from "../../sortingFilms/SortingFilms";


function InfoPage(props) {
    const [stateSorting, setStateSorting] = useState({sorting: 'ASC', column: 'title', year: ''});
    const [yearInput, setyearInput] = useState('');
    const {data, isLoading} = useGetAllFilmsQuery(stateSorting);


    function submitYear(evt) {
        evt.preventDefault();
        setStateSorting({...stateSorting, year: yearInput})
    }


    return (
        <div>
            <SortingFilms submitYear={submitYear} setyearInput={setyearInput} setStateSorting={setStateSorting}
                          stateSorting={stateSorting}></SortingFilms>
            <ContentFilms data={data} isLoading={isLoading}></ContentFilms>
        </div>
    );
}

export default InfoPage;



