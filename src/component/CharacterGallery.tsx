import {Character} from "../model/Character";
import CharacterCard from "./CharacterCard";
import "./CharacterGallery.css"

type CharacterGalleryProps = {
    characters: Character[],
    userinput: string,
}

export default function CharacterGallery(props: CharacterGalleryProps, ) {


    if(props.userinput !== "") {
        console.log(props.userinput)
        const characterCard = props.characters.filter((value) => {

            if(value.name.toUpperCase().includes(props.userinput.toUpperCase()) ) return value}).map((character) => {
            return (
                <CharacterCard character={character} key={character.id + " " + character.name}/>
            );
        });

        return (
            <div className={"character-gallery"}>
                {characterCard}
            </div>
        );

        //filter->map
    }else {
        {
            const characterCard = props.characters.map((character) => {
                return (
                    <CharacterCard character={character} key={character.id + " " + character.name}/>
                );
            });

            return (
                <div className={"character-gallery"}>
                    {characterCard}
                </div>
            );

        }


    }}