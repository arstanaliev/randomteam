import React, {useEffect} from 'react';
import {useAppSelector} from "../hooks/AppSelector";
import {useAppDispatch} from "../hooks/AppDispatch";
import {AppDispatch} from "../store/store";
import axios from "axios";
import {playersDate} from "../date/date";
import {fetchingPlayers} from "../store/Reducer/slice";

const RandomTeams = () => {
    const {teams} = useAppSelector(state => state.actorSlice)
    const dispatch = useAppDispatch()
    const fetchingPlayer = async (dispatch: AppDispatch) => {
        const responsive = await axios.all(playersDate)
        dispatch(fetchingPlayers((responsive)))
    }
    useEffect(() => {
        dispatch(fetchingPlayer)
    }, [])
    const random1 = Math.round(Math.random() * 14 + 1)
    const random2 = Math.round(Math.random() * 14 + 1)
    return (
        <div className="teams">
            {
                teams.map(el => (
                    <div>
                        <h1>{el.id === random1 ? el.teams : ""}</h1>
                        <h1>{el.id === random2 ? el.teams : ""}</h1>
                    </div>
                ))
            }
            <div className="teams-btn">
                <a href="">VS</a>
            </div>
        </div>
    );
};

export default RandomTeams;