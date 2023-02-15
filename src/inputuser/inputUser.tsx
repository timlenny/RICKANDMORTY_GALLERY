import {ChangeEvent} from "react";


type InputUserProps = {
    setText(text:string):void;
}

export default function InputUser(props:InputUserProps) {

    function handleInput(event: ChangeEvent<HTMLInputElement>){
        props.setText(event.target.value)
    }

    return(
        <input onChange={handleInput}/>
    )
}