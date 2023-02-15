import {ChangeEvent} from "react";

type InputProps = {
    setSearch(search:string):void,
}

export default function UserSearchFunction(props: InputProps){

    function eventHandler(event: ChangeEvent<HTMLInputElement>){
        props.setSearch(event.target.value);
    }

    return <input onChange={eventHandler}/>

}