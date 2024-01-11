import { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"

export default function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


  useEffect(() => {
  });

  function login(){
      const item = {username,password};
      axios.post("https://trello/.thibautstachnick.com/api-auth/login",item)}

  return (
      <>
          <h1>Login page</h1>
          <div className="col-sm-6 offset-sm-3 ">
              <input type="text"
                     placeholder="username"
                     onChange={(e)=>setUsername(e.target.value)}
                     className="form-control"/>

              <input type="password"
              placeholder="password"
              onChange={(e)=>setPassword(e.target.value)}
              className="form-control"/>

            <br/>
              <button onClick={login} className="btn btn-outline-success" type="submit">Login</button>


          </div>
      </>

  );
}