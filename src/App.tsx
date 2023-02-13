import { createContext } from "react";
import { createBrowserRouter, RouterProvider, Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { Container, createTheme, CssBaseline } from "@mui/material";
import { SupashipUserInfo, useSession } from "./supa/use-session";
import NavBar from "./panels/NavBar";
import Summary from "./panels/Summary";
import Welcome from "./panels/Welcome";
import Layout from "./panels/Layout";

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        
      </Container>
    </ThemeProvider>
  );
}

export const UserContext = createContext<SupashipUserInfo>({
  session: null,
  profile: null,
});