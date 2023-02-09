import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavBar from "./panels/NavBar";
import Summary from "./panels/Summary";
import Welcome from "./panels/Welcome";
import { ThemeProvider } from "@emotion/react";
import { Container, createTheme, CssBaseline } from "@mui/material";

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <RouterProvider router={router} />
      </Container>
    </ThemeProvider>
  );
}

export default App;

function Layout() {
    return (
      <>
        <NavBar title="Robot Window" sections={sections} />
        <Outlet />
      </>
    );
}