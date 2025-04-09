import React from "react";
import "./card.css";
 
function Card({movies,y,showmovie}){
    const {title,year,genre,image,isFavourite}=movies;
    return(
        <div onClick={()=>showmovie(title)} className="card">
           <div className="photo">
           <img src={image} alt="" />
           </div>
           <div className="silver">
           <div className="text"> <h1>{title}</h1>
            <h2>{year}</h2>
            <h3>{genre}</h3></div>
           </div>
            <div className="isfav" onClick={()=>{
                y(title)
            }}>
            <img src={isFavourite?"favriotmarked.png":"unfav.png"} alt="" />
            </div>
            
        </div>
    )

}
export default Card ;