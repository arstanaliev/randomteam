import React, {useEffect} from 'react';
import {useAppSelector} from "../hooks/AppSelector";
import {useAppDispatch} from "../hooks/AppDispatch";
import {AppDispatch} from "../store/store";
import axios from "axios";
import {playersDate} from "../date/date";
import {fetchingCountry} from "../store/Reducer/slice";

const RandomCountry = () => {
    const {country} = useAppSelector(state => state.actorSlice)
    const dispatch = useAppDispatch()
    const fetchingCountries = async (dispatch: AppDispatch) => {
        const responsive = await axios.all(playersDate)
        dispatch(fetchingCountry((responsive)))
    }
    useEffect(() => {
        dispatch(fetchingCountries)
    }, [])
    const random1 = Math.round(Math.random() * 14 + 1)
    const random2 = Math.round(Math.random() * 14 + 1)
    return (
        <div className="teams">
            {
                country.map(el => (
                    <div>
                        <h1>{el.id === random1 ? el.country : ""}</h1>
                        <h1>{el.id === random2 ? el.country : ""}</h1>
                    </div>
                ))
            }
            <div className="teams-btn">
                <a href="">VS</a>
            </div>
        </div>
    );
};

export default RandomCountry;