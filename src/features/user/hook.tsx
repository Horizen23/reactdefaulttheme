
import { useCallback } from 'react'
import {useAppDispatch, useAppSelector } from '../../store/index'
import {AppState} from '../../store/index'
import { UserState } from './reducer'
import { Login, Logout, refreshToken, updateUserDarkMode } from "./action";

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
        dispatch({type:updateUserDarkMode,payload:{ userDarkMode: !darkMode }})
    }, [darkMode, dispatch])

    return [darkMode, toggleSetDarkMode]
}
interface Iuser {
  accessToken: string
  email: string
  id: string
  refreshToken: string
  roles: any[]
  username:string
}
export function useDeviseAuth(): [(user:Iuser) => void,() => void]{
    const dispatch = useAppDispatch()
    const login = useCallback((user:Iuser)=>{
      dispatch({type:Login,payload:user})

    },[dispatch])
    const logout = useCallback(()=>{
      dispatch({type:Logout})
    },[dispatch])
    return [login,logout]
}
