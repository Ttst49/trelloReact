import {useState} from "react";
import {useParams} from "react-router-dom";
import axiosHttp from "../auth/interceptor.ts";
import {GlobalConstants} from "../Common/global-constants.ts";

export function BoardCreation() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [visibility, setVisibility] = useState('');

    const {id} = useParams();


    function createBoard(){
        const board = {name, description, visibility};
        axiosHttp.post(GlobalConstants.baseUrl+"board/create/"+id, board)
            .then((response) => {
                console.log(response.data)
            })
    }

    return (
        <>

            <h1>Create New Board</h1>

            <div className="col-sm-6 offset-sm-3 ">
                <input type="text"
                       placeholder="name"
                       required={true}
                       onChange={(e) => setName(e.target.value)}
                       className="form-control"/>

                <input type="text"
                       required={true}
                       placeholder="description"
                       onChange={(e) => setDescription(e.target.value)}
                       className="form-control"/>
                <br/>


                <label htmlFor="1">Public</label>
                <input type={"radio"}
                       placeholder="Public"
                       name={"type"}
                       value="1"
                       checked
                       onChange={(e) => setVisibility(e.target.value)}
                />
                <br/>

                <label htmlFor="2">Private</label>
                <input type={"radio"}
                       placeholder="Private"
                       name={"type"}
                       value="2"
                       onChange={(e) => setVisibility(e.target.value)}
                />
                <br/>

                <label htmlFor="3">Team</label>
                <input type={"radio"}
                       placeholder="Team"
                       name={"type"}
                       value="3"
                       onChange={(e) => setVisibility(e.target.value)}
                />
                <br/>


                <button onClick={createBoard} className={"btn btn-outline-success"} type="submit">Create a
                    board
                </button>

                <br/>
            </div>

        </>
    );
}