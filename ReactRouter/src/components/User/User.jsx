import React from "react";
import {useParams} from 'react-router-dom'

function User(){
    const {userid} = useParams();
    return (
        <h1 className="bg-gray-600 text-center text-2xl p-3 text-white">User: {userid}</h1>
    )
}

export default User;