import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="nav-bar">
        <Link className="nav-logo-link" to="/">Home</Link>

        <ul className="nav-right-list">
          <li className="nav-message-board-list-item">
            <Link to="/1" className="nav-message-board-link">
              message board
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}