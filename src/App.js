import "./App.css";
import { requestWeather } from "./request";
import { useEffect, useState } from "react";

function App() {
  const [weather, setWeather] = useState(0);
  const [city, setCity] = useState("");

    function handleChange(event) {
    setCity(event.target.value)
  }
    function handleButton(event) {
      console.log(event);
      event.preventDefault()
      mainRequest(city)
  }
    function mainRequest (city){
      requestWeather(city)
      .then((response) => {
        if (response.data.main.temp) {
          setWeather(response.data.main.temp);
        }
      })
      .catch((err) => {
        console.log("Error request weather ", err);
      });
    }

  useEffect(() => {
    requestWeather("madrid,es").then((response)=>{
      if (response.data.main.temp) {
        setWeather(response.data.main.temp);
      }
    })
  }, []);

  return (
    <div className="App">
      <p>{city} {weather}</p>
      <form onSubmit={handleButton}>
        <input type="submit"  value="Submit" />
        <input type="" onChange={handleChange} value={city} />
      </form>
      
    </div>
  );
}

export default App;
