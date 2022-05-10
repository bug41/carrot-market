import React, { useState } from "react";
import { useForm } from "react-hook-form";

// Less code (OK)
// Better Validation
// Better Errors (set, clear, display)
// Have control over inputs
// Don't deal with events (OK)
// Easier Inputs (OK)

export default function Forms(){

    const {register, handleSubmit} = useForm();    
    const onValid = () => {
        console.log("im valid bby")
    }

    return (
        <form onSubmit={handleSubmit(onValid)}>
            <input
            {...register("userName", {
                required:true,
            })}
                type="text" placeholder="UserName" />
            <input 
            {...register("email", {
                required:true,
            })}
                type="email" placeholder="email"/>
            <input 
            {...register("password", {
                required:true,
            })}
                type="password" placeholder="Password"/>

            <input type="submit" value="Create Account"/>
        </form>
    );
}