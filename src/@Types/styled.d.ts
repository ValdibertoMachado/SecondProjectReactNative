import "styled-components";
import theme from "../theme";

declare module 'tyled-components'{
    type Themetype = typeof theme;

    export interface DefaultTheme extends Themetype{}
}