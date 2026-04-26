import { createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: {
			main: "#000000",
		},
		secondary: {
			main: "#ffffff",
		},
	},
	typography: {
		fontFamily: "Roboto, Arial, sans-serif",
		h1: {
			fontSize: "2.5rem",
			fontWeight: 600,
		},
	},
});

export default theme;
