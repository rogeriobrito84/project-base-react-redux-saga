import {PaletteOptions} from "@material-ui/core/styles/createPalette";
import {createMuiTheme} from "@material-ui/core";

const palette: PaletteOptions = {
    type: "dark",
    primary: {
        main: "#17b497"
    }
}

const theme = createMuiTheme({
    palette
});

export default theme;