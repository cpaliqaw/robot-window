import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavBar from "./panels/NavBar";
import MessageBoard from "./panels/MessageBoard";
import AllPosts from "./panels/AllPosts";
import PostView from "./panels/PostView";
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
        element: <MessageBoard />,
        children: [
          {
            path: ":pageNumber",
            element: <AllPosts />,
          },
          {
            path: "post/:postId",
            element: <PostView />,
          },
        ],
      },
      {
        path: "welcome",
        element: <Welcome />,
      },
    ],
  },
]);

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
        <NavBar />
        <Outlet />
      </>
    );
}