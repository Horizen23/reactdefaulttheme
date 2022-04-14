interface IMEDIA_WIDTHS  {
    upToExtraSmall: number;
    upToSmall: number;
    upToMedium: number;
    upToLarge: number;
}

type Color = string;
export interface Colors {
  isdarkmode : boolean;
  bg1:Color,
  bg2:Color,
  tx1:Color,
  tx2:Color,
}


declare module 'styled-components/macro' {
  export interface DefaultTheme extends Colors {
    // media queries
    mediaWidth: {
      upToExtraSmall: ThemedCssFunction<DefaultTheme>
      upToSmall: ThemedCssFunction<DefaultTheme>
      upToMedium: ThemedCssFunction<DefaultTheme>
      upToLarge: ThemedCssFunction<DefaultTheme>
    }
    // css snippets
    flexColumnNoWrap: FlattenSimpleInterpolation
    flexRowNoWrap: FlattenSimpleInterpolation
  }
}
