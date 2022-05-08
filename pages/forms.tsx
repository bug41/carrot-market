import React, { useState } from "react";

export default function Forms(){

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formErros, setFormErros] = useState("");
    
    const onUserNameChange = (event:React.SyntheticEvent<HTMLInputElement>) => {
        const {
            currentTarget: {value},
        } = event;
        setUserName(value);
    }

    const onEmailChange = (event:React.SyntheticEvent<HTMLInputElement>) => {
        const {
            currentTarget: {value},
        } = event;
        setEmail(value);
    }

    const onPasswordChange = (event:React.SyntheticEvent<HTMLInputElement>) => {
        const {
            currentTarget: {value},
        } = event;
        setPassword(value);
    }

    const onSubmit = (event: React.SyntheticEvent<HTMLInputElement>) => {
        event.preventDefault();

        if(userName === "" || email === "" || password === "") {
            setFormErros("All fields are required");
        }

        console.log(userName,email,password);        
    };


    return (
        <form onSubmit={onSubmit}>
            <input 
                onChange={onUserNameChange}
                value={userName} type="text" placeholder="UserName" required minLength={5}/>
            <input 
                onChange={onEmailChange}
                value={email} type="email" placeholder="email" required/>
            <input 
                onChange={onPasswordChange}
                value={password} type="password" placeholder="Password" required/>

            <input type="submit" value="Create Account"/>
        </form>
    );
}