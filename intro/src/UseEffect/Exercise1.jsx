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
         <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding:'15px',
      background: 'linear-gradient(135deg, #74ABE2, #5563DE)',
      color: 'white',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      <div style={{
        fontSize: '5rem',
        fontWeight: 'bold',
        letterSpacing: '3px',
        textShadow: '0px 4px 12px rgba(0,0,0,0.3)'
      }}>
        {time}
      </div>
      <div style={{
        fontSize: '1.2rem',
        opacity: 0.8,
        marginTop: '10px'
      }}>
        {new Date().toLocaleDateString([], {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        })}
      </div>
    </div>
        </>
    )


}