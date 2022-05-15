import React, { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";

// Less code (OK)
// Better Validation (OK)
// Better Errors (set, clear, display)
// Have control over inputs
// Don't deal with events (OK)
// Easier Inputs (OK)

interface LoginForm {
    userName:string;
    password:string;
    email:string;
    errors?:string;    
}

export default function Forms(){

    const {
        register,
        handleSubmit,
        formState:{errors},
        watch,
        setError,
        setValue,
        reset,
        resetField
     } = useForm<LoginForm>({
         mode:"onBlur",
     });    
    const onValid = (data:LoginForm) => {
        console.log("im valid bby");
        resetField("password");
        //setError("userName", {message:"Taken userName"})
    }

    const onInvalid = (errors:FieldErrors) => {
        console.log(errors);
    }
    
    setValue("userName", "hello")
    console.log(watch("email"))

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
                type="text"
                placeholder="UserName"
            />
            {errors.userName?.message}
            <input 
            {...register("email", {
                required:"Email is required",
                validate:{
                    notGmail:(value) =>
                        !value.includes("@gmail.com")  ||  "Gmail is not allowed",

                }
            })}
                type="email"
                placeholder="email"
                className={`${Boolean(errors.email?.message) ? "border-red-500": ""}`}
            />
            {errors.email?.message}
            <input 
            {...register("password", {
                required:"password is required",
            })}
                type="password" placeholder="Password"/>

            <input type="submit" value="Create Account"/>
            {errors.errors?.message}
        </form>
    );
}