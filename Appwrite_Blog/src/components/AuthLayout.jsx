import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


function Protected({children,authentication=true}){
    const navigate = useNavigate();
    const [loader,setLoader] = useState(true);
    const authStatus = useSelector(state => state.auth.status)

    useEffect(()=>{
        if(authStatus){
            navigate('/');
        }
        else{
            navigate('/login')
        }
        setLoader(false);
    },[authStatus,navigate])
    
    return loader?<h1>Loading...</h1>:<>{children}</>;
}

export default Protected;