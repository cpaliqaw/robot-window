import { Outlet } from "react-router-dom";
import { UserContext } from "../App";
import { useSession } from "../supa/use-session";
import NavBar from "./NavBar";

const sections = [
    { title: 'Localization', url: '#' },
    { title: 'Tasks', url: '#' },
];

export default function Layout() {
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