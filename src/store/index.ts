import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import user from '../features/user/reducer'
import thunk from 'redux-thunk';
// const listenerMiddleware = createListenerMiddleware()
// listenerMiddleware.startListening({
//     matcher: isAnyOf(updateUserDarkMode),
//     effect: (action, listenerApi) => {
//         console.log(action,listenerApi.getState())
//     },
// })


const rootReducer = combineReducers({
    user: user
});
const store = createStore(rootReducer, undefined, applyMiddleware(thunk));

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector