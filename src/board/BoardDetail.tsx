import axiosHttp from "../auth/interceptor.ts";
import {GlobalConstants} from "../Common/global-constants.ts";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import "./BoardDetail.css"
import {list} from "postcss";
import {List} from "../interface/List.ts";


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
            <div className="topBar">
                <span>{board.name}</span>
                <span>{board.id}</span>
            </div>
            <div className="mainContent">
                {board.lists.map((list) => (
                    <div key={list.id}>
                        <div className="listCard">
                            <span>{list.name}</span>
                        </div>
                    </div>
                ))}
                <button className="topButton btn btn-primary">Créer une liste</button>
            </div>
        </>
    );
}