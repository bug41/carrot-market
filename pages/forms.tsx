import React, { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";

// Less code (OK)
// Better Validation
// Better Errors (set, clear, display)
// Have control over inputs
// Don't deal with events (OK)
// Easier Inputs (OK)

interface LoginForm {
    userName:string;
    password:string;
    email:string;
}

export default function Forms(){

    const {register, handleSubmit} = useForm<LoginForm>();    
    const onValid = (data:LoginForm) => {
        console.log("im valid bby")
    }

    const onInvalid = (errors:FieldErrors) => {
        console.log(errors);
    }

    return (
        <form onSubmit={handleSubmit(onValid, onInvalid)}>
            <input
            {...register("userName", {
                required:"userName is required",
                minLength:{
                    message:"The userName should be longer than 5 chars.",
                    value : 5,
                },
            })}
                type="text" placeholder="UserName" />
            <input 
            {...register("email", {
                required:"email is required",
            })}
                type="email" placeholder="email"/>
            <input 
            {...register("password", {
                required:"password is required",
            })}
                type="password" placeholder="Password"/>

            <input type="submit" value="Create Account"/>
        </form>
    );
}