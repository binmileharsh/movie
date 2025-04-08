import React, { createContext, useState } from "react";


export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  
  const movieMaster = [
    {
      title: "Tokyo Train",
      year: 2019,
      genre: "Thriller",
      image: "/tokyo.png",
      isFavourite: false,
      trending:true
    },
    {
      title: "Moonfall",
      year: 2023,
      genre: "Sci-Fi",
      image: "/tokyo.png",
      isFavourite: false,
      trending:true
    },
    {
      title: "Kife in Paris",
      year: 2018,
      genre: "Romance",
      image: "/tokyo.png",
      isFavourite: false,
      trending:true
    },
    {
      title: "House of Gucci",
      year: 2024,
      genre: "Crime",
      image: "/tokyo.png",
      isFavourite: true,
      trending:false
    },
  ];


 
  const [movies, setMovies] = useState(movieMaster);


  const [currentMovie, setCurrentMovie] = useState({});
function toggle(title){
   let newarray=[]
    for(let movie of movies){
      if(movie.title==title){
        
        movie.isFavourite=!movie.isFavourite
      }
      newarray.push(movie)
    }
setMovies(newarray)
  

    }
    function showmovie(title){
      console.log("hi",title);
      const currMovie = movies.find((movie)=>{
       return movie.title==title
      })
      setCurrentMovie(currMovie)
        

      
      
    } 
 
  

  return (
    <MovieContext.Provider value={{ movies, currentMovie, toggle, showmovie }}>
      {children}
    </MovieContext.Provider>
  );
};