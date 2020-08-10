import { FETCH_ALL_GIST, FETCH_USER_INFO, FETCH_GITS_DETAIL, SET_USER_NAME, IS_LOADING, SET_AUTH } from '../types'
import { getGitsUser, getUserInfo, getGitDetail } from '../../../api/api'
import { Dispatch } from 'redux';

export type userGits = {
    type: typeof FETCH_ALL_GIST,
    payload: any
}
export type userInfo = {
    type: typeof FETCH_USER_INFO,
    payload: UserInfoType
}

export type gitDetail = {
    type: typeof FETCH_GITS_DETAIL,
    payload: GitDetailType
}
export type usernameType = {
    type: typeof SET_USER_NAME,
    name: string
}
export type setLoaderType = {
    type: typeof IS_LOADING,
    value: boolean
}
export type setAuthType = {
    type: typeof SET_AUTH,
    auth: boolean
}


export type UserGitsObj = {
    id: string, description: string, created_at: string,
}
export type UserInfoType = {
    avatar_url?: string, bio?: string, login?: string | null | undefined
}

export type GitDetailType = {
    description?: string, created_at?: string, content?: string, owner?: { login: string }
}



const FetchAllGists = (gits: GitDetailType): userGits => ({ type: FETCH_ALL_GIST, payload: gits });
const FetchUserInfo = (user: UserInfoType): userInfo => ({ type: FETCH_USER_INFO, payload: user });
const FetchGitsDetail = (git: GitDetailType): gitDetail => ({ type: FETCH_GITS_DETAIL, payload: git });
const SetUserName = (username: string): usernameType => ({ type: SET_USER_NAME, name: username });
const IsLoading = (isloading: boolean): setLoaderType => ({ type: IS_LOADING, value: isloading });
const SetAuth = (auth: boolean) => ({ type: SET_AUTH, auth })


/**
 * @description Get the public gits of a specefic user
 *  *  * @param {string} user Value to search
 */

export const getGitsAction = (user: string | undefined | null) => (dispatch: Dispatch) => {
    if (user) {
        dispatch(IsLoading(true))
        getGitsUser(user).then(({ data }) => {
            dispatch(IsLoading(false))
            const gits = data.map((item: { [key: string]: string; }) => ({ id: item.id, description: item.description, created_at: item.created_at, }))
            dispatch(FetchAllGists(gits))
        })
            .catch(__ => {
                dispatch(IsLoading(false))
            })
    }

}



/**
 * @description Get the info of a specefic user
 *  * @param {string} user Value to search
 */

export const getUsergetGitsAction = (user: string | undefined | null) => (dispatch: Dispatch) => {
    if (user) {
        dispatch(IsLoading(true))
        getUserInfo(user).then(({ data }) => {
            const user = { bio: data.bio, avatar_url: data.avatar_url, login: data.login }
            dispatch(FetchUserInfo(user))
        }).catch(__ => {
            dispatch(IsLoading(false))
        })
    }


}

/**
 * @description Request to get a specific gist of a user
 * @param {string} id Value to search
 */


export const getGitDetailAction = (id: string) => (dispatch: Dispatch) => {
    dispatch(IsLoading(true))
    getGitDetail(id).then(({ data }) => {
        dispatch(IsLoading(false))
        const key = Object.keys(data.files)
        const { content } = data.files[key[0]]
        const git = { description: data.description, created_at: data.created_at, content, owner: { login: data.owner.login } }
        dispatch(FetchGitsDetail(git))
    }).catch(__ => {
        dispatch(IsLoading(false))
    })
}

/**
 * @description Set username 
 * @param {string} username  Value to search
 */

export const setUsernameAction = (user: string) => (dispatch: Dispatch) => {
    dispatch(SetUserName(user))
}

/**
 * @description Set Auth
 * @param {setauth} username  Value to auth
 */

export const setAuthAction = (auth: boolean) => (dispatch: Dispatch) => {
    dispatch(SetAuth(auth))
}