import { createContext } from "react";
import { createBrowserRouter, RouterProvider, Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { Container, createTheme, CssBaseline } from "@mui/material";
import { SupashipUserInfo, useSession } from "./supa/use-session";
import NavBar from "./panels/NavBar";
import Summary from "./panels/Summary";
import Welcome from "./panels/Welcome";

const sections = [
  { title: 'Localization', url: '#' },
  { title: 'Tasks', url: '#' },
];

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Summary />}/>
            </Route>
          </Routes>
        </BrowserRouter>
        {/* <RouterProvider router={router} /> */}
      </Container>
    </ThemeProvider>
  );
}

export const UserContext = createContext<SupashipUserInfo>({
  session: null,
  profile: null,
});

function Layout() {
  const supashipUserInfo = useSession();
  return (
    <>
      <UserContext.Provider value={supashipUserInfo}>
        <NavBar title="Robot Window" sections={sections} />
        <Outlet />
      </UserContext.Provider>
    </>
  );
}