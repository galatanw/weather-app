import {useEffect} from 'react'

export default function FindByCity() {
    useEffect(() => {
        let APIkey="d0e663934a56c2971be74796892ee59a"
        let url=`http://api.openweathermap.org/data/2.5/weather?q=LOD&appid=${APIkey}`
        // let url="https://restcountries.com/v3.1/name/usa"
      fetch(url)
      .then(response=>response.json())
      .then((data)=>{
        console.log(data.sys.country)
        console.log(data)
      let countryName=data.sys.country
      function  getCapital(){
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
        })
              
            };
            
          }
        })
      }
      getCapital()
      }) 
      })
      
    return (
        <div>
            
        </div>
    )
}
