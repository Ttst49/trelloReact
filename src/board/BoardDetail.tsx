import axiosHttp from "../auth/interceptor.ts";
import {GlobalConstants} from "../Common/global-constants.ts";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import "../assets/BoardDetail.css"
import {List} from "../interface/List.ts";
import {Card} from "../interface/Card.ts";
import {Board} from "../interface/Board.ts";


export function BoardDetail() {
    const [isLoading, setLoading] = useState(true);
    const [board , setBoard] = useState<Board>();
    const [cardName, setCardName] = useState("");
    const navigate = useNavigate();


    const {id} = useParams();

    useEffect(() => {
        axiosHttp.get(GlobalConstants.baseUrl+"board/show/"+id)
            .then((response)=>{
                setBoard(response.data)
                setLoading(false)
            })

    },[id]);

    async function createCard(listId:string){
        await axiosHttp.post(GlobalConstants.baseUrl+'card/create/'+listId, {"name":cardName})
            .then((response) => {
                console.log(response.data);
                setTimeout(()=>{
                    navigate("/board/show/"+id)
                },1000)
            })
    }



    if (isLoading) {
        return <div className="App">Loading...</div>;
    }

    if (board){
        return (
            <>
                <div className="topBar">
                    <span>{board.name}</span>
                    <span>{board.id}</span>
                </div>
                <div className="mainContent">
                    {board.lists.map((list: List) => (
                        <div key={list.id}>
                            <div className="listCard">
                                <div className="topCard">
                                    <span>{list.name}</span>
                                </div>
                                <div className="newCard">
                                    <input
                                        className="cardCreation"
                                        type="text"
                                        placeholder="Add card"
                                        onChange={(e) => setCardName(e.target.value)}
                                    />
                                    <button className={"creationButton"} onClick={() => {
                                        createCard(list.id.toString()).then()
                                    }}>
                                        Add
                                    </button>
                                </div>
                                {list.cards.map((card: Card) => (
                                    <div className="contentCard">
                                        <ul>
                                            <li>
                                                <a
                                                    href={"/card/edit/"+card.id}
                                                    className={"cardLink"}
                                                >
                                                    {card.name}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <button onClick={() => {
                        navigate("/list/create/" + board.id)
                    }} className="topButton btn btn-primary">Créer une liste
                    </button>
                </div>
            </>
        );
    }

}