import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./panels/Layout";
import Summary from "./panels/Summary";

export default function RobotWindowRouter() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Summary />}/>
            </Route>
          </Routes>
        </BrowserRouter>
    );
}
    