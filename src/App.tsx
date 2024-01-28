import {Route, Routes} from "react-router-dom";
import UserManager from "./UserManager.tsx";
import {Home} from "./Home.tsx";
import {WorkspaceCreation} from "./workspace/WorkspaceCreation.tsx";
import {WorkspaceIndexing} from "./workspace/WorkspaceIndexing.tsx";
import {WorkspaceEditing} from "./workspace/WorkspaceEditing.tsx";
import {BoardCreation} from "./board/BoardCreation.tsx";
import {BoardDetail} from "./board/BoardDetail.tsx";
import {BoardIndexing} from "./board/BoardIndexing.tsx";
import {ListCreation} from "./list/ListCreation.tsx";

export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<UserManager />} />
                <Route path="/register" element={<UserManager />} />
                <Route path="/logout" element={<UserManager />} />
                <Route path="/workspace/index" element={<WorkspaceIndexing />} />
                <Route path="/workspace/create" element={<WorkspaceCreation />} />
                <Route path="/workspace/edit/:id" element={<WorkspaceEditing />} />
                <Route path="/workspace/delete/:id" element={<WorkspaceEditing />} />
                <Route path="/board/create/:id" element={<BoardCreation />} />
                <Route path="/board/showAll/:id" element={<BoardIndexing />}></Route>
                <Route path="/board/show/:id" element={<BoardDetail />}></Route>
                <Route path="/board/delete/:id" element={<BoardDetail />}></Route>
                <Route path="/list/create/:id" element={<ListCreation />}></Route>
            </Routes>
        </>
    );
};