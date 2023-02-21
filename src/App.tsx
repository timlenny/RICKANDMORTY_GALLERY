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
import {Route, Routes, useParams} from "react-router-dom";
import Details from "./model/Details";
import Main from "./component/Main";
import ReactDOM from 'react-dom';
import ReactPaginate from "react-paginate";


function App() {


    return (
        <div className="App">
            <div>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/detail/:id" element={<Details />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
