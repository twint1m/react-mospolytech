import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body {
        background-color: var(--theme);
        color: var(--text-color);
    }
    *[data-theme=light] {
        transition: all .25s;
		--theme: white;
        --text-color: black;
        a {
            color: black;
        }
        button {
            background: lightgrey;
            colowhiter
            &:disabled {
                background: rgba(211, 211, 211, 0.467);
            }
        }
        path{
            fill: black;
        }
        thead, tbody, .ant-table-cell {
            background-color: white !important;
            color: black !important;
        }
    }
    *[data-theme=dark] {
        transition: all .25s;
		--theme: black;
        --text-color: white;
        a {
            color: white;
        }
        button {
            background: rgba(211, 211, 211, 0.467);
            color: white;
            &:disabled {
                background: lightgrey;
            }
        }
        path{
            fill: white;
        }
        thead, tbody, .ant-table-cell {
            background-color: black !important;
            color: white !important;
        }
    }
`;
