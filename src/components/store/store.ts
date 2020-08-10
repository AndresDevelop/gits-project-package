import { applyMiddleware, compose, createStore, Action } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer/reduce'
import { ApplicationState } from './types'

export interface DispatchAction extends Action {
    payload: Partial<ApplicationState>;
}

const store = createStore<ApplicationState, DispatchAction, any, any>(
    reducer,
    process.env.NODE_ENV !== 'production'
        ? composeWithDevTools(applyMiddleware(thunkMiddleware))
        : compose(applyMiddleware(thunkMiddleware))
);

export default store;
