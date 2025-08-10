import { useState } from "react"

export function Hudini(){

const [show,isVisible]=useState(false)

const makeVisible=()=>{
    isVisible (!show)
}

 return(
    <>
    <div>{show?"Now you see me":"Now you don't"}
    <button onClick={makeVisible}>Click one me </button>
   </div>
    </>
    
)

}

