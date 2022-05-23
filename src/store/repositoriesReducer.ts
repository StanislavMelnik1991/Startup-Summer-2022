import { AppActionsType, AppThunkType } from "./store";
import {getUserReposAPI} from "./../api/api"
import { setSuccess } from "./appReducer";

type repositoriesReducerType = typeof inintialState

export type RepoType = {
    id: number, 
    name:  string,
    description: string | null,
    html_url: string
}

const inintialState = {
    repos: null as null| RepoType[]
}

export const repositoriesReducer = (state = inintialState, action: AppActionsType): repositoriesReducerType => {
    switch (action.type){
        case 'REPOSITORIES/SET_REPOS': 
        return {
            ...state, repos: action.repos
        }
        case 'REPOSITORIES/DELETE_REPOS':
            return {
                ...state, repos: null
            }
        default : {
            return state
        }
    }
}

export const setRepos = (repos: RepoType[]) => ({ type: 'REPOSITORIES/SET_REPOS',  repos } as const)

export const deleteRepos = () => ({ type: 'REPOSITORIES/DELETE_REPOS'} as const)


export const getRepos = (login: string): AppThunkType => async (dispatch) => {
      try {
          let response = await getUserReposAPI(login)
          dispatch(setRepos(response.data))
      } catch (error) {
          dispatch(deleteRepos())
          console.log(error)
      }
}
