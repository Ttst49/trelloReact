import axiosHttp from "../auth/interceptor.ts";
import {GlobalConstants} from "../Common/global-constants.ts";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";


export function BoardDetail() {
    const [isLoading, setLoading] = useState(true);
    const [board , setBoard] = useState();

    useEffect(() => {
        axiosHttp.get(GlobalConstants.baseUrl+"board/show/"+id)
            .then((response)=>{
                setBoard(response.data)
                setLoading(false)
            })
    },[]);

    const {id} = useParams();


    if (isLoading) {
        return <div className="App">Loading...</div>;
    }

    return (
        <>
            <div className="board">
                <div key={board.id} className="card">
                    <h5>Id={board.id}</h5>
                    <h4><strong>Titre</strong></h4>
                    <p>{board.name}</p>
                    <h4><strong>Description</strong></h4>
                    <p><i>{board.description}</i></p>
                </div>
            </div>
        </>
    );
}