import React from "react";
import { useParams } from "react-router-dom";

export default function User() {

    // useParams is a hook provided by react-router-dom that allows you to access 
    // the parameters of the current route.
    const {id} = useParams() 

    return (
        <div className='bg-gray-600 text-white text-3xl p-4'>user : {id} </div> 
    )
}