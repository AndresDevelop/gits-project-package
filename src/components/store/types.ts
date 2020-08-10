//Types
import { GitDetailType, UserInfoType, UserGitsObj } from '../store/actions/actions'
export const FETCH_ALL_GIST = 'FETCH_ALL_GIST';
export const FETCH_USER_INFO = 'FETCH_USER_INFO';
export const FETCH_GITS_DETAIL = 'FETCH_GITS_DETAIL';
export const SET_USER_NAME = 'SET_USER_NAME';
export const IS_LOADING = 'SET_LOADER'
export const SET_AUTH = 'SET_AUTH'


//ApplicationState
export interface ApplicationState {
    gits: UserGitsObj[]
    user: UserInfoType
    git: GitDetailType
    username: string | undefined | null
    isloading: boolean
    isUserAuthorized: boolean
};

export const defaultState: ApplicationState = {
    gits: [],
    user: {},
    git: {},
    username: "liushooter",
    isloading: false,
    isUserAuthorized: false

}