import React, {useState} from "react";
import './button.css';

function Button(){

    const [text, setButtonText] = useState(false);
    const [textClass, setButtonTextClass] = useState(false);

    const handleEvent = (e) => {
        e.preventDefault();
        setButtonText(!text);
        setButtonTextClass(!textClass);
    }

    return(
        <button onClick={(eve) => handleEvent(eve)} className={`button ${textClass && "addStyle"}`}>
            {!!text ? "Adicionado" : "Adicionar"}
        </button>
    )
}

export default Button