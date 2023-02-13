import { createContext } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { Container, createTheme, CssBaseline } from "@mui/material";
import { SupashipUserInfo, useSession } from "./supa/use-session";
import NavBar from "./panels/NavBar";
import Summary from "./panels/Summary";
import Welcome from "./panels/Welcome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Summary />,
      },
      {
        path: "welcome",
        element: <Welcome />,
      },
    ],
  },
]);

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
        <RouterProvider router={router} />
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