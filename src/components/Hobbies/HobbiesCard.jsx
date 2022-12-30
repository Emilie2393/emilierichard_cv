import { useEffect, useState } from "react"
import '../../styles/components/HobbiesCard.scss'

const API_KEY = "api_key=4bac2fb55150fbfd9d770d646f09d8db"
const URL = "https://api.themoviedb.org/3"
const TVID = ["/tv/1398?", "/tv/1668?", "/tv/1429?", "/tv/1396?", "/tv/19885?", "/tv/46298?", "/movie/311?", "/movie/185?", "/movie/238?", "/movie/129?", "/movie/496243?", "/movie/680?", "/movie/120?", "/tv/66732?", "/tv/1408?", "/tv/2316?", "/tv/76479?", "/tv/4607?", "/tv/2004?", "/tv/60059?", "/tv/93405?", "/tv/60622?", "/tv/1418?", "/tv/4087?", "/tv/63926?", "/movie/769?", "/movie/807?", "/movie/28?", "/movie/603?", "/movie/11324?", "/movie/111?", "/movie/100?", "/movie/843?", "/movie/38?", "/movie/103663?", "/movie/62?", "/movie/8392?"]
const URLfinal = TVID.map((urls) => URL+urls+API_KEY)
const IMG_URL = "https://image.tmdb.org/t/p/w500"

const HobbiesCard = () => {
    const [movieData, setData] = useState([])
    console.log("tableau", URLfinal)

    useEffect(() => {
    URLfinal.map((url) =>
        fetch(url).then(res=>res.json()).then(data=>{
            console.log("datafetch", data)
            setData((movieData) => [...movieData, data]);
            
        })
    )
    }, [])

    console.log("dataext", movieData)
    
        
    return (
      <div className="background">
        <h1>Parce qu'un CV ne résume pas une personne</h1>
        <h2>Le monde du cinéma me passionne et occupe mon temps libre, voici un échantillon de mes gouts en la matière</h2>
        <ul className="hobbies">
        
        {movieData.map((data) => (
          <li key={data.id} className="hobbies__card">
            <p className="hobbies__card__title">{data.name}{data.title}</p>
            <img
              className="hobbies__card__pictures"
              src={IMG_URL + data.poster_path}
              alt={`${data.name} cover`}
            />
          </li>
        ))}
      </ul>
      </div>
    );
  };
  
  export default HobbiesCard;