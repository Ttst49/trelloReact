import {Route, Routes} from "react-router-dom";
import UserManager from "./UserManager.tsx";
import {Home} from "./Home.tsx";

export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<UserManager />} />
                <Route path="/register" element={<UserManager />} />
            </Routes>
        </>
    );
};