import {useEffect, useState} from "react";
import axiosHttp from "../auth/interceptor.ts";
import {GlobalConstants} from "../Common/global-constants.ts";
import {useParams} from "react-router-dom";
import {Board} from "../interface/Board.ts";

export function BoardIndexing() {
    const [isLoading, setLoading] = useState(true);
    const [boards , setBoards] = useState();

    const {id}= useParams();

    useEffect(() => {
        axiosHttp.get(GlobalConstants.baseUrl+"board/showAll/"+id)
            .then((response)=>{
                setBoards(response.data);
                setLoading(false)
            })
    },[]);

    if (isLoading) {
        return <div className="App">Loading...</div>;
    }
    
    return (
        <>
            <div className="boards">
                {boards.map((board: Board)=> (
                    <div key={board.id} className="card">
                        <h5>Id={board.id}</h5>
                        <h4><strong>Titre</strong></h4>
                        <p>{board.name}</p>
                        <h4><strong>Description</strong></h4>
                        <p><i>{board.description}</i></p>
                    </div>
                ))}
            </div>
        </>
    );
}