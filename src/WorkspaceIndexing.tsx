import axiosHttp from "./auth/interceptor.ts";
import {useEffect, useState} from "react";
import {GlobalConstants} from "./Common/global-constants.ts";

export function WorkspaceIndexing() {
    const [isLoading, setLoading] = useState(true);
    const [workspaces, setWorkspaces] = useState();

    useEffect(() => {
        axiosHttp.get(GlobalConstants.baseUrl+"index").then(response => {
            setWorkspaces(response.data);
            setLoading(false);
        });
    }, []);

    if (isLoading) {
        return <div className="App">Loading...</div>;
    }

    return (
        <div className="App">
            <h1>{workspaces.map((workspace)=>(
                <p key={workspace.id}>{workspace.name}</p>
            ))}</h1>
        </div>
    );
}
