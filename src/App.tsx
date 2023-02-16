import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

import {Character} from "./model/Character";
import Characters from "./characters.json"
import CharacterGallery from "./component/CharacterGallery";
import "./inputuser/inputUser";
import inputUser from "./inputuser/inputUser";
import InputUser from "./inputuser/inputUser";
import UserSearchFunction from "./component/UserSearchFunction";
import "./data/video.mp4";
import axios from "axios";



function App() {

    const[characters, setCharacters] = useState<Character[]>([])
  //const characters: Character[] = Characters;

    const [joke, setJoke] = useState();

  const[count, setCount] = useState(0);


  function like() {
      setCount(count + 1)
  }

  function dislike(){
      if(count > 0) {
          setCount(count - 1)
      }
  }

  const[text, setText] = useState("Super cool Rick&Morty Gallery");
  const[search, setSearch] = useState("");

  function handleUserInput(text:string){
      setText(text);
  }

  function handleSearch(search:string){
      setSearch(search);
  }

  function loadCharacters(){
      axios.get("https://rickandmortyapi.com/api/character")
          .then((response )=>{
              console.log(response)
              setCharacters(response.data.results)})
          .catch((error) => console.error(error))
  }

  function loadJoke(){
      axios.get("https://official-joke-api.appspot.com/random_joke?type=programming")
          .then((response) =>{
              setJoke(response.data.setup + response.data.punchline)
          })
          .catch((error) => console.error(error))
  }

  useEffect(() => {
      loadCharacters();
      console.log("CHARACTER LOADED")

  },  [])



    useEffect(()=> {
      loadJoke()

    },[]);



  return (
      <div className="App">



          <div className="wordart blues"><span className="text">{text}</span></div>
          <br/>
          <h1 style={{fontSize: 20}}>{joke}</h1>
          <img style={{ marginRight: "40px" }} src={"https://media.tenor.com/S86Hms_11gYAAAAi/golden-retriever-arf-arf.gif"}/>
          <div style={{fontSize: 45}} className="wordart blues"><span className="text">Like Counter:  {count}</span></div>
          <img style={{  }} width={200} height={150}  src={"https://bestanimations.com/media/mammals/943801475funny-oder-animated-gif.gif"}/>
          <br/>
          <br/>
          <button style={{ marginRight: "20px" }} className="likebutton" onClick={like}>👍</button>
          <button className="likebutton" onClick={dislike}>👎</button>
          <br/>
          <br/>
          <p>
              <text style={{color: "cyan", fontSize: 20, fontFamily: "monospace"}}>Change title: </text>
           <InputUser setText={handleUserInput}/>
          </p>
          <p>
              <text style={{color: "cyan", fontSize: 20, fontFamily: "monospace"}}>Search: </text>
              <UserSearchFunction setSearch={handleSearch}/>
          </p>
          <br/>
          <p>
              <button className={"buttonclass"} onClick={loadCharacters}>Reload Characters</button>
              <button className={"buttonclass"} style={{ marginLeft: "10px" }} onClick={loadJoke}>Load another Joke</button>

          </p>


          <CharacterGallery characters={characters} userinput={search}></CharacterGallery>

      </div>
  );
}

export default App;
