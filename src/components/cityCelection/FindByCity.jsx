import {useRef,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button,Badge} from 'react-bootstrap/';
export default function FindByCity() {
    function  getCapital(countryName,APIkey){
        let CapitalWeatherArray=[]
        let countryURL=`https://restcountries.com/v3.1/name/${countryName}`
          fetch(countryURL)
          .then(response=>response.json())
          .then((data)=>{
            for (let index = 0; index <data.length; index++) {
              if(data[index].cca2===countryName){
                fetch(`http://api.openweathermap.org/data/2.5/weather?q=${data[index].capital[0]}&appid=${APIkey}`)
                .then(response=>response.json())
                .then((data)=>{
                  console.log(data);
                  CapitalWeatherArray.push(
                    <h1>{data.name}</h1>
                  )
                  for (const key in data.main) {
                    const element = data.main[key];
                    CapitalWeatherArray.push(
                        <h4>{key}:{element}</h4>
                    )
                  }
                setCapitalWeather(CapitalWeatherArray)
                })
                
            };
            
        }
    })
    }
    const cityName=useRef()
    const [cityWeather, setcityWeather] = useState("")
    const [CapitalWeather, setCapitalWeather] = useState("")
    const FindWeather=() => {
        let APIkey="d0e663934a56c2971be74796892ee59a"
        let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityName.current.value}&appid=${APIkey}`
      fetch(url)
      .then(response=>response.json())
      .then((data)=>{
          console.log(data);
          setcityWeather(()=>{
              let array=[<h1>{data.name}</h1>]
              for (const key in data.main) {
                const element = data.main[key];
                array.push(
                    <h4>{key}:{element}</h4>
                )
              }
              return array
          })
      let countryName=data.sys.country
      getCapital(countryName,APIkey)
      }) 
      }
      
    return (
        <div>
            <h1><Badge>What's the  WEATHER?</Badge></h1>
            <input type="text" ref={cityName}/>
            <Button variant="warning" onClick={FindWeather} size="sm" >saerch weather</Button>
            {cityWeather}
            {CapitalWeather}
        </div>
    )
}
