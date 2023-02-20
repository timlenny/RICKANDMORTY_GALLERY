import {Character} from "./Character";

import {useParams} from "react-router-dom";
import axios from "axios";
import {Origin} from "./Origin";
import {useState} from "react";
import '../component/DetailedCharacter.css'


export default function Details() {

    const params = useParams();
    const id: string | undefined = params.id;

    //const character: Character | undefined = axios.get("https://rickandmortyapi.com/api/character/" + id)
    //let details:Character;
    let origin:Origin = {name: "N.N."};


    let detailsObject = {
        episode: [],
        gender: "",
        id: 0,
        image: "",
        location: [],
        name: "",
        origin: origin,
        species: "",
        status: "",
        type: "",
        url: ""
    };





        const requestURL:string = "https://rickandmortyapi.com/api/character/" + id;

    const [details, setDetails] = useState<Character>(detailsObject);



        axios.get(requestURL)
            .then((response) => {
                setDetails(response.data)
                console.log(details)
            })
            .catch((error) => console.error(error))



    return(
        <section className={"DetailedCharacter"}>
            <h1>Name: {details.name}</h1>
            <img src={details.image} alt={details.name + " image"}/>
            <p >{details.status}</p>
            <p >Origin: {details.origin.name}</p>
            <p >Species: {details.species}</p>
            <p>Type: {details.type}</p>
            <p>Type: {details.gender}</p>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>


        </section>

    )
}



