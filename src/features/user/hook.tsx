
import { useCallback } from 'react'
import {useAppDispatch, useAppSelector } from '../../store/index'
import { updateUserDarkMode } from './action'

export function useIsDarkMode(): boolean {
    const { userDarkMode } = useAppSelector(
      ({ user: { userDarkMode } }) => ({
        userDarkMode
      }) )
    return userDarkMode === null ? false : userDarkMode
  }
  
export function useDarkModeManager(): [boolean, () => void] {
    const dispatch = useAppDispatch()
    const darkMode = useIsDarkMode()

    const toggleSetDarkMode = useCallback(() => {
        dispatch(updateUserDarkMode({ userDarkMode: !darkMode }))
    }, [darkMode, dispatch])

    return [darkMode, toggleSetDarkMode]
}