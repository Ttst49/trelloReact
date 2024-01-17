import {Route, Routes} from "react-router-dom";
import UserManager from "./UserManager.tsx";
import {Home} from "./Home.tsx";
import {WorkspaceCreation} from "./WorkspaceCreation.tsx";

export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<UserManager />} />
                <Route path="/register" element={<UserManager />} />
                <Route path="/logout" element={<UserManager />} />
                <Route path="/workspace/create" element={<WorkspaceCreation />} />
            </Routes>
        </>
    );
};