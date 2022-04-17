
import { useCallback } from 'react'
import {useAppDispatch, useAppSelector } from '../../store/index'
import { Login, Logout, updateUserDarkMode } from './action'
import {AppState} from '../../store/index'
import { UserState } from './reducer'
export function useIsDarkMode(): boolean {
    const { userDarkMode } = useAppSelector(
      ({ user: { userDarkMode } }) => ({
        userDarkMode
      }) )
    return userDarkMode === null ? false : userDarkMode
}
  
export function useIsLogin(): UserState['auth'] {
  return useAppSelector((state:AppState) => state.user.auth)
}
  
export function useDarkModeManager(): [boolean, () => void] {
    const dispatch = useAppDispatch()
    const darkMode = useIsDarkMode()

    const toggleSetDarkMode = useCallback(() => {
        dispatch(updateUserDarkMode({ userDarkMode: !darkMode }))
    }, [darkMode, dispatch])

    return [darkMode, toggleSetDarkMode]
}
export function useDeviseAuth(): [(user:{email:string,password:string}) => void,() => void]{
    const dispatch = useAppDispatch()
    const login = useCallback((user:{email:string,password:string})=>{
      dispatch(Login(user))
    },[dispatch])
    const logout = useCallback(()=>{
      dispatch(Logout())
    },[dispatch])
    return [login,logout]
}
