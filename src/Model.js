import { useState } from "react"


export function shAlert(event){
    const [showAlert,setShowAlert]=useState(false);
    event.preverntDefault()
    setShowAlert(true);
};
export default function Model(){
    
    function hAlert(){
        setShowAlert(false);
    }
    return(
      <div onClick={hAlert} id="model">
        <div id="model-content">
            <h1>The Form Has Been Submitted Successfully</h1>
        </div>
      </div>  
    )
}

