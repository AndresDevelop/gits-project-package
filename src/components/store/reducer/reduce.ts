import { FETCH_ALL_GIST, FETCH_USER_INFO, defaultState, ApplicationState, FETCH_GITS_DETAIL, SET_USER_NAME, IS_LOADING, SET_AUTH } from '../types'
import { userGits, userInfo, gitDetail, usernameType, setLoaderType, setAuthType } from '../actions/actions'



type Action = userGits | userInfo | gitDetail | usernameType | setLoaderType | setAuthType

const userReducer = (state: ApplicationState = defaultState, action: Action) => {
    switch (action.type) {
        case FETCH_ALL_GIST:
            return {
                ...state,
                gits: action.payload,
            };

        case FETCH_USER_INFO:
            return {
                ...state,
                user: action.payload
            }
        case FETCH_GITS_DETAIL: {
            return {
                ...state,
                git: action.payload,
                username: action.payload.owner?.login
            }
        }

        case SET_USER_NAME: {
            return {
                ...state,
                username: action.name
            }
        }
        case IS_LOADING: {
            return {
                ...state,
                isloading: action.value
            }
        }
        case SET_AUTH: {
            return {
                ...state,
                isUserAuthorized: action.auth
            }
        }
        default:
            return state;
    }
};

export default userReducer