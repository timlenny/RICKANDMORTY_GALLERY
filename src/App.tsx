import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import {Character} from "./model/Character";
import Characters from "./characters.json"
import CharacterGallery from "./component/CharacterGallery";
import "./inputuser/inputUser";
import inputUser from "./inputuser/inputUser";
import InputUser from "./inputuser/inputUser";
import UserSearchFunction from "./component/UserSearchFunction";


function App() {

  const characters: Character[] = Characters;

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

  return (
      <div className="App">
          <div className="wordart blues"><span className="text">{text}</span></div>
          <br/>
          <img style={{ marginRight: "40px" }} src={"https://media.tenor.com/S86Hms_11gYAAAAi/golden-retriever-arf-arf.gif"}/>
          <div className="wordart blues"><span className="text">Like Counter:  {count}</span></div>
          <img style={{  }} width={200} height={150}  src={"https://bestanimations.com/media/mammals/943801475funny-oder-animated-gif.gif"}/>
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
          <p>
          </p>

          <CharacterGallery characters={characters} userinput={search}/>
      </div>
  );
}

export default App;
