
import { AppActionsType, AppThunkType } from "./store";
import {getUserAPI} from "./../api/api"
import { setSuccess } from "./appReducer";

type UserReducerType = typeof inintialState

export type ProfileType = {
    id: number, 
    avatar_url: string,
    name:  string,
    followers: number,
    following: number,
    html_url: string,
    login: string
}

const inintialState = {
    login: null as string | null,
    profile: null as null| ProfileType
}

export const userReducer = (state = inintialState, action: AppActionsType): UserReducerType => {
    switch (action.type){
        case 'USER/SET_USER_PROFILE': 
        return {
            ...state, profile: action.profile
        }
        case 'USER/SET_LOGIN':
            return {
                ...state, login: action.login
            }
        case 'USER/DELETE_PROFILE': 
        return {
            ...state, profile: null
        }
        default : {
            return state
        }
    }
}

export const setUser = (profile: any) => ({ type: 'USER/SET_USER_PROFILE',  profile } as const)

export const setLogin = (login: string) => ({ type: 'USER/SET_LOGIN', login } as const)

export const deleteProfile = () => ({ type: 'USER/DELETE_PROFILE'} as const)


export const getUser = (login: string): AppThunkType => async (dispatch) => {
      try {
          let response = await getUserAPI(login)
          dispatch(setUser(response.data))
      } catch (error) {
          dispatch(deleteProfile())
          console.log(error)
      }
}


