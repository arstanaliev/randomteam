import React, {useEffect} from 'react';
import {useAppSelector} from "../hooks/AppSelector";
import {useAppDispatch} from "../hooks/AppDispatch";
import {AppDispatch} from "../store/store";
import axios from "axios";
import {playersDate} from "../date/date";
import {fetchingClub} from "../store/Reducer/slice";

const RandomClub = () => {
    const {club} = useAppSelector(state => state.actorSlice)
    const dispatch = useAppDispatch()
    const fetchingClubs = async (dispatch: AppDispatch) => {
        const responsive = await axios.all(playersDate)
        dispatch(fetchingClub((responsive)))
    }
    useEffect(() => {
        dispatch(fetchingClubs)
    }, [])
    const random1 = Math.round(Math.random() * 14 + 1)
    const random2 = Math.round(Math.random() * 14 + 1)
    return (
        <div className="teams">
            {
                club.map(el => (
                    <div>
                        <h1>{el.id === random1 ? el.club : ""}</h1>
                        <h1>{el.id === random2 ? el.club : ""}</h1>
                    </div>
                ))
            }
            <div className="teams-btn">
                <a href="">VS</a>
            </div>
        </div>
    );
};

export default RandomClub;