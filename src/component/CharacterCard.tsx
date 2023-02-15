import {Character} from "../model/Character";
import "./CharacterCard.css";

type CharacterCardProps = {
    character: Character,
}

export default function CharacterCard(props: CharacterCardProps) {
    return (
        <section className={"character-card"}>
            <h2 className={"character-card-name"}>{props.character.name}</h2>
            <p className={"character-card-status"}>{props.character.status}</p>
            <img className={"character-card-image"} src={props.character.image} alt={props.character.name + " image"}/>
            <p className={"character-card-origin"}>Origin: {props.character.origin.name}</p>
        </section>
    );
}