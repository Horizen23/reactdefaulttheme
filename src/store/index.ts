import { configureStore, createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import { load, save } from 'redux-localstorage-simple'
import { updateUserDarkMode } from "../features/user/action";

import user from '../features/user/reducer'
const PERSISTED_KEYS: string[] = ['user']

const listenerMiddleware = createListenerMiddleware()
listenerMiddleware.startListening({
    matcher: isAnyOf(updateUserDarkMode),
    effect: (action, listenerApi) => {
        console.log(action,listenerApi.getState())
    },
})


const store = configureStore({
    reducer:{
        user
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true })
    .concat(listenerMiddleware.middleware)
    .concat(save({ states: PERSISTED_KEYS, debounce: 1000 })),
    preloadedState: load({ states: PERSISTED_KEYS, disableWarnings: process.env.NODE_ENV === 'test' }),
})

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector