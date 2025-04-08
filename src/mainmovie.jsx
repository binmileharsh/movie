import React from "react";

function Mainmovie({currentMovie}){
    console.log(currentMovie)
    return(
        <>
       <div className="mainmoviee">
         {/* <img className="bigimage"src={currentMovie.image} alt="" /> */}
       
       <img className="bigimage"src={currentMovie.image} alt="" />
       <div className="mm">
       {/* <h1>{currentMovie.title}</h1>
            <h2>{currentMovie.year}</h2>
            <h3>{currentMovie.genre}</h3> */}
       </div>
       </div>
        </>
    )
}
export default Mainmovie;