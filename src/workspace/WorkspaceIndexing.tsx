import axiosHttp from "../auth/interceptor.ts";
import {useEffect, useState} from "react";
import {GlobalConstants} from "../Common/global-constants.ts";
import {Workspace} from "../interface/Workspace.ts";

export function WorkspaceIndexing() {
    const [isLoading, setLoading] = useState(true);
    const [workspaces , setWorkspaces] = useState();
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
        <div className="cards">
            {workspaces.map((workspace: Workspace)=> (
                <div key={workspace.id} className="card">
                    <h5>Id={workspace.id}</h5>
                    <h4><strong>Titre</strong></h4>
                    <p>{workspace.name}</p>
                    <h4><strong>Description</strong></h4>
                    <p><i>{workspace.description}</i></p>
                    <p className="card-footer">Created by {workspace.owner.username}</p>
                </div>
            ))}
        </div>
    );
}
