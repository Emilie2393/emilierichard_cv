import { useEffect, useState } from "react"


const API_KEY = "api_key=4bac2fb55150fbfd9d770d646f09d8db"
const URL = "https://api.themoviedb.org/3"
const TVID = ["/tv/1398?", "/tv/1668?"]
const URLfinal = TVID.map((urls) => URL+urls+API_KEY)

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
    
        
    
    
    
    // fetch(test).then(res=>res.json()).then(data=>{
    //     console.log("datafetch", data)
    //     setData(data)
        
  
    return (
      <div>
        <h1>Mes films préférés</h1>
        <ul className="hobbies">
            <li className="hobbies">
              <h1 className="hobbies__card">test</h1>
              <p className='hobbies__card__description'></p>
              <div className='hobbies__card__link'> + </div> 
              <img
                className="hobbies__card__pictures" alt="test"
              />
            </li>
        </ul>
      </div>
    );
  };
  
  export default HobbiesCard;