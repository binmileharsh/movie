import React from "react";
import "./App.css";
import { MovieContext } from "./Moviecontext";
import { useContext } from "react";
import Card from "./card";
import { Routes,Link } from "react-router-dom";

export default function Trending(){
  const {movies,showmovie,toggle} = useContext(MovieContext);
    return(
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
        </div>
        </div>
        
        
    
        
      
         <div className="rightfav">


               <div className="toprightfav">
               <div className="leftfav">
                    <a href="">home</a><a href="">favourite</a><a href="">upcoming</a>
                </div>
                <div className="rightfav2">
<img src="/Group 99.png" alt="" />
               </div>



                </div>

                <p className="BB">Trending</p>
                
                  <div className="trendarea">
                  {
                    movies.map((movie,i)=>{
                      if(movie.trending){
                        
                        return <Card key={i} movies={movie}  showmovie={showmovie} y={toggle}/>
                      }
                    })
                  }
                  </div>
                
               

        </div>
        
        </div>
      
    )
}