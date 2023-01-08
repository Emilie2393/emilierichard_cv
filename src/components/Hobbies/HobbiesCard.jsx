import { useEffect, useState } from "react"
import '../../styles/components/HobbiesCard.scss'

const API_KEY = "api_key=4bac2fb55150fbfd9d770d646f09d8db"
const URL = "https://api.themoviedb.org/3"
const TVID = ["/tv/1398?", "/tv/1668?", "/tv/1429?", "/tv/1396?", "/tv/19885?", "/tv/46298?", "/movie/311?", "/movie/185?", "/movie/238?", "/movie/129?", "/movie/496243?", "/movie/680?", "/movie/120?", "/tv/66732?", "/tv/1408?", "/tv/2316?", "/tv/76479?", "/tv/4607?", "/tv/2004?", "/tv/60059?", "/tv/93405?", "/tv/60622?", "/tv/1418?", "/tv/4087?", "/tv/63926?", "/movie/769?", "/movie/807?", "/movie/28?", "/movie/603?", "/movie/11324?", "/movie/111?", "/movie/100?", "/movie/843?", "/movie/38?", "/movie/103663?", "/movie/62?", "/movie/8392?", "/movie/793?", "/movie/426?", "/movie/213?", "/movie/1272?", "/movie/170?", "/movie/1420?", "/tv/95479?", "/tv/75006?", "/tv/61222?", "/tv/65930?", "/tv/18347?", "/tv/13916?", "/tv/61374?", "/tv/12971?", "/movie/8587?", "/movie/348?", "/movie/120467?", "/movie/279?", "/movie/14?", "/movie/521?", "/movie/205596?", "/movie/524?", "/movie/12104?"]
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
      <div className="hobbies">
        <div className="hobbies__intro">
        <h1>Parce qu'un CV ne résume pas une personne</h1>
        <h2>Le monde du cinéma me passionne et occupe mon temps libre, voici un aperçu de mes gouts en la matière</h2>
        <p>Cette liste a été faite à l'aide de l'API themoviedb</p>
        </div>
        <ul className="hobbies__list">
        
        {movieData.map((data) => (
          <li key={data.id} className="hobbies__list__card">
            <p className="hobbies__list__card__title">{data.name}{data.title}</p>
            <img
              className="hobbies__list__card__pictures"
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