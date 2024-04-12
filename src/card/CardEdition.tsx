import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axiosHttp from "../auth/interceptor.ts";
import {GlobalConstants} from "../Common/global-constants.ts";
import {Card} from "../interface/Card.ts";

export function CardEdition() {
    const [isLoading, setLoading] = useState(true);
    const [card , setCard] = useState<Card>();
    const [cardName, setCardName] = useState('');
    const [cardDescription, setCardDescription] = useState('');
    const [cardListId, setCardListId] = useState(0);
    const navigate = useNavigate();


    const {id} = useParams();

    useEffect(() => {
        axiosHttp.get(GlobalConstants.baseUrl+"card/show/"+id)
            .then((response)=>{
                console.log(response)
                setCard(response.data)
                setCardName(response.data.name)
                setCardDescription(response.data.description)
                setLoading(false)
            })

    },[id]);


    async function editCard(cardId:string){
        await axiosHttp.put(GlobalConstants.baseUrl+'card/edit/'+cardId, {
            "name":cardName,
            "description":cardDescription,
            "list_id":cardListId
        })
            .then((response) => {
                console.log(response.data);
                setTimeout(()=>{
                    navigate("/board")
                },1000)
            })
    }



    if (isLoading) {
        return <div className="App">Loading...</div>;
    }

    if (card){
        return (
            <>
                <label>
                    card name <br/>
                    <input
                        className="cardEdition"
                        type="text"
                        placeholder={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                    />
                </label>
                <label>
                    card description <br/>
                    <input
                        className="cardEdition"
                        type="text"
                        placeholder={cardDescription}
                        onChange={(e) => setCardDescription(e.target.value)}
                    />
                </label>
                <label>
                    card list_id <br/>
                    <input
                        className="cardEdition"
                        type="number"
                        placeholder={cardListId.toString()}
                        onChange={(e) => setCardListId(Number(e.target.value))}
                    />
                </label>

                <button onClick={() => {
                    editCard(card!.id.toString()).then()
                }}>Edit card
                </button>
            </>
        );
    }
}