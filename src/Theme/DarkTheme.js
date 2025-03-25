import { createTheme } from "@mui/material";

export const DarkTheme=createTheme({
    palette:{
        mode:"dark",
        primary:{
            main:"#e91e63"
        },
        secondary:{
            main:"#5A20CB"
        },
        black:{
            main:"#242B2E"
        },
        main:{
            main:"#000000",
            default:"0D0D0D",
            paper:"#0D0D0D"
        },
        textColor:{
            main:"#111111"
        }
    }
})