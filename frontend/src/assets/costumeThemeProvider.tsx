import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: "#96f6fa",
      main: "#00c4cc",
      dark: "#02696e",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#d3e5e6",
      main: "#ffffff",
      dark: "#0d2426",
      contrastText: "#4f70ff",
    },
  },
});

export default function MyCostumeThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
