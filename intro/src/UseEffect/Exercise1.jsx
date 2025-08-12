import { useEffect, useState } from "react";


export default function Exercise1Effect(){

    const [time,setTime]=useState(new Date().toLocaleTimeString());

    useEffect(()=>{
       const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000);
        return () => clearInterval(interval);
    },[])

    return(
        <>
        <div> The time is: {time}</div>
        </>
    )


}