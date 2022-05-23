import React from "react";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import { setLogin, setUser, deleteProfile } from './userReducer'
import {setSuccess} from './appReducer'
import { appReducer } from "./appReducer";
import { userReducer } from "./userReducer";
import { setRepos, deleteRepos, repositoriesReducer } from "./repositoriesReducer";
export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    app: appReducer,
    user: userReducer,
    repos: repositoriesReducer
});
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppActionsType = ReturnType<typeof setUser> 
| ReturnType<typeof setLogin>
| ReturnType<typeof deleteProfile>
| ReturnType<typeof setSuccess>
| ReturnType<typeof setRepos>
| ReturnType<typeof deleteRepos>

export type AppThunkType <ReturnType = void> = ThunkAction<void, AppStateType, unknown, AppActionsType>