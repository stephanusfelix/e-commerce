import React, {useState} from 'react';
import { toast } from "react-toastify";
import axios from 'axios';

import "./styles.css"

export default function Index() {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();


    async function postRequest(path, data) {
        try {
          const response = await axios.post("https://fakestoreapi.com/" + path, data);
          if (response) {
            return response;
          }
        } catch (error) {
          toast.error(error.message, {
            theme: "colored",
          });
        }
    }


    async function submitLogin() {
        // var usernameRegex = /\S+@\S+\.\S+/;
        
        if (username === "admin@bukapedia.com" && password === "admin123") {
          console.log("sukses ",username)

        } else {

            await postRequest("auth/login", {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                username: username,
                password: password,

            }).then((res) => {
                if (res.data.token) {
                    console.log("sukses", res.data.token)
                }else {
                    console.log(res.data.msg)
                }
            });
          
        }  
    }


    // const submitLogin = () => {

    //     if (username === "admin@bukapedia.com" && password === "admin123"){
    //         console.log("sukses" , username)
    //     }else{
    //         fetch('https://fakestoreapi.com/auth/login',{
    //             method:'POST',
    //             body:JSON.stringify({
    //                 username: username,
    //                 password: username
    //             })
    //         })
    //         .then(res=>res.json())
    //         .then(json=>console.log(json.data.token))
    //     }
    // }

    return (
        <div className="form-login">
            <h2>Login Bukapedia</h2>
            <div className="input">
                <label htmlFor="username">Username</label>
                <input type="username" placeholder="masukan username" id="username" onChange={(e) => setUsername(e.target.value)}></input>
            </div>
            <div className="input">
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="masukan password" id="password" onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <button onClick={submitLogin}>Submit</button>
        </div>
    )
}