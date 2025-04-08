



import React, { useContext, useState } from "react";
import Card from "./card";
import Mainmovie from "./mainmovie";
import { Routes,Link } from "react-router-dom";
import { MovieContext } from "./Moviecontext";


import "./App.css";




function App() {
  
  const {movies, currentMovie, toggle, showmovie} = useContext(MovieContext);

  return (
    <>
      <div className="movieapp">
  <div className="left">
          <div className="coffe">
            <img src="/coffee.svg" alt="" />
            <h1>Watch</h1>
          </div>
          <div className="optiondiv">
          <Link to="/home">
            <div className="home">
              <img src="/coffee.svg" alt="" />
              Home
            </div>
</Link>

            <Link to="/fav">
            <div className="favourite">
              <img src="/coffee.svg" alt="" />
              Favourites
            </div></Link>



           <Link to="/trending">
            <div className="trending">
              <img src="/coffee.svg" alt="" />
              Trending
            </div></Link>

            <div className="coming-soon">
              <img src="/coffee.svg" alt="" />
              Coming Soon
            </div>
          </div>
        </div>
        
        <div className="rightbar">
          <div className="topright">
            <Mainmovie currentMovie={currentMovie}/ >
          </div>
          <div className="bottomright">
            {
              movies.map((movie,i)=>{
                return <Card key={i} movies={movie}  showmovie={showmovie} y={toggle}/>
                
              })
            }
            
          </div>
        </div>
        </div>
      
    </>
  );
}

export default App;
