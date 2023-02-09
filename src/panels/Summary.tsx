import { Outlet } from "react-router-dom";

export default function Summary() {
  return (
    <div>
      <h2>Summary</h2>
      <Outlet />
    </div>
  );
}