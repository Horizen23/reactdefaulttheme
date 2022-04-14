import React, { useMemo } from "react";
import styled, { css ,DefaultTheme, ThemeProvider as ThemeProviderd} from "styled-components/macro";
import { Colors } from './styled'
import { useIsDarkMode } from '../features/user/hook'

const MEDIA_WIDTHS = {
    upToExtraSmall: 669,
    upToSmall: 720,
    upToMedium: 960,
    upToLarge: 1280,
}

const  colors = (isdarkmode : boolean):Colors => {
    return {
        isdarkmode,
        bg1: isdarkmode ?  '#303030':'#FFFFFF' ,
        bg2: isdarkmode ?  '#565A69':'#C3C5CB' ,
        tx1: isdarkmode ? '#FFFFFF': '#303030' ,
        tx2: isdarkmode ?  '#FFFFFF':'#565A69' ,
    }
}
const MediaWidththeme: { [width in keyof typeof MEDIA_WIDTHS] : typeof css } = Object.keys(MEDIA_WIDTHS).reduce(
    (accb:any,size) => {
        accb[size] = (a:any,b:any,c:any) => css`
            @media (max-width:${(MEDIA_WIDTHS as any)[size]}px){
                ${css(a,b,c)}
            }
        `
        return accb;
}, {}) as any

const theme =  (isdarkmode : boolean):DefaultTheme => {
    return {
        ...colors(isdarkmode),
        flexColumnNoWrap:css`
            display:flex;
            flex-flow:column nowrap;
        `,
        flexRowNoWrap:css`
            display:flex;
            flex-flow:row nowrap;
        `,
        mediaWidth:MediaWidththeme
    }

}
interface Props{
    children: React.ReactNode
}
export default function ThemeProvider ({children}:Props){
    const isdarkmode:boolean = useIsDarkMode(); 
    const themeObj = useMemo(()=>theme(isdarkmode),[isdarkmode])
     return (
         <ThemeProviderd theme={themeObj}>{children}</ThemeProviderd>
     )
}






