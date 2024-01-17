import { useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"
import  "react-router-dom";
import {GlobalConstants} from "./Common/global-constants.ts";
import { useNavigate } from 'react-router-dom';

export default function UserManager() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const uri = window.location.pathname;
    const navigate = useNavigate();

  function login(){
      const user = {username,password};
      axios.post(GlobalConstants.baseUrl+"token",user)
          .then((response)=>{
              localStorage.setItem("bearerToken",response.data["access"])
          })
      setTimeout(()=>{
          navigate("/")
          window.location.reload()
      },500)
  }

  function logout(){
      if (uri.includes("/logout")){
          setTimeout(()=>{
              localStorage.removeItem("bearerToken");
             navigate("/")
              window.location.reload();
          },500)
      }
  }

  function register(){
      const user = {username,password};
      axios.post(GlobalConstants.baseUrl+"register",user)
          .then((response)=>{
              console.log(true)
              console.log(response.data["message"])
              setTimeout(()=>{
                  navigate("/")
                  window.location.reload()
              },500)
          })
  }

  function isLogged(){
      return !!localStorage.getItem("bearerToken");
  }

  function checkWhatPageToDisplay(){
      return uri.includes("/register");
  }

  return (
      <>
          {logout()}
          <a onClick={logout} className="btn btn-danger">Log out</a>
          {checkWhatPageToDisplay() ? <p>Registration Page</p> : <p>Log In Page</p>}
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
              {checkWhatPageToDisplay() ?
                  <button onClick={register} className="btn btn-outline-success">Register</button> :
                  <button onClick={login} className="btn btn-outline-success">Login</button>
              }


          </div>
          {isLogged() ? <p>You are logged in</p> : <p>Log you in</p>}
          </>

          );
          }