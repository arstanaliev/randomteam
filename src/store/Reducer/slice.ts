import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPlayer} from "../../interface/interface";
import {start} from "repl";

interface IPlayers {
    teams: IPlayer[]
    country: IPlayer[]
    club: IPlayer[]
}

const initialState: IPlayers = {
    teams: [],
    country: [],
    club: []
}

export const actorSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        fetchingPlayers(state, action: PayloadAction<IPlayer[]>) {
            state.teams = action.payload
            state.country = action.payload
            state.club = action.payload
        },
        fetchingCountry(state, action: PayloadAction<IPlayer[]>) {
            state.country = action.payload
        },
        fetchingClub(state, action: PayloadAction<IPlayer[]>) {
            state.club = action.payload
        }
    }
})

export default actorSlice.reducer
export const {fetchingPlayers, fetchingCountry, fetchingClub} = actorSlice.actions