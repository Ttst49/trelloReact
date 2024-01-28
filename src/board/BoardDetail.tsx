import axiosHttp from "../auth/interceptor.ts";
import {GlobalConstants} from "../Common/global-constants.ts";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import "../assets/BoardDetail.css"
import {List} from "../interface/List.ts";


export function BoardDetail() {
    const [isLoading, setLoading] = useState(true);
    const [board , setBoard] = useState();
    const navigate = useNavigate();



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
            <div className="topBar">
                <span>{board.name}</span>
                <span>{board.id}</span>
            </div>
            <div className="mainContent">
                {board.lists.map((list:List) => (
                    <div key={list.id}>
                        <div className="listCard">
                            <span>{list.name}</span>
                        </div>
                    </div>
                ))}
                <button onClick={()=>{navigate("/list/create/"+board.id)}} className="topButton btn btn-primary">Créer une liste</button>
            </div>
        </>
    );
}