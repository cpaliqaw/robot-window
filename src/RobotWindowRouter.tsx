import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "./App";
import Layout from "./panels/Layout";
import Summary from "./panels/Summary";
import Welcome from "./panels/Welcome";

export default function RobotWindowRouter() {
  const { session } = useContext(UserContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {
            session?.user ?
              <Route index element={<Summary />} />
              :
              <Route index element={<Welcome />} />
          }
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
