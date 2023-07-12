import { useEffect, useState } from "react";
import './WeatherInfo.css';
function WeatherInfo(){
    

    let [cityname, setCityname] = useState("Rajkot");
    let [weatherData, setWeatherData] = useState({});
    let [windData, setWindData] = useState({});
    let [mainData, setMainData] = useState({});
    let [cloudData, setCloudData] = useState({});
    let [sysData, setSysData] = useState({});
    let [mainCityName, setMainCityName] = useState("");
    let [icon, setIcon] = useState("");
    let sunriseTime, sunsetTime;
    let [SRS, setSRS] = useState("");
    let [SSS, setSSS] = useState("");
    const APIURL = "https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid=cc49a1b157d9c597ad4623b6276609d7&units=metric";

    function loadTempratureData(){
        fetch(APIURL).then((result)=>{
            result.json().then((response)=>{
                //alert("Called");
                if(response.cod == 404){
                    alert("Invalid City Name "+cityname+" No Data Found");
                }else{
                    //console.log(response);
                    setWeatherData(response.weather[0]);
                    setWindData(response.wind);
                    setMainData(response.main);
                    setSysData(response.sys);
                    setCloudData(response.clouds);
                    setMainCityName(response.name);

                   sunriseTime = new Date(sysData.sunrise * 1000);
                   let sunriseStr = sunriseTime.getHours() + ":"+sunriseTime.getMinutes();
                   setSRS(sunriseStr);

                   sunsetTime = new Date(sysData.sunset * 1000);
                   let sunsetStr = sunsetTime.getHours() + ":"+sunsetTime.getMinutes();
                   setSSS(sunsetStr);
                    
                    switch(weatherData.main){
                        case "Clouds":{
                            setIcon("wi wi-cloudy");
                            break;
                        }case "Rain":{
                            setIcon("wi wi-day-rain");
                            break;
                        }case "Mist":{
                            setIcon("wi wi-sprinkle");
                            break;
                        }case "Snow":{
                            setIcon("wi wi-snow");
                            break;
                        }case "Smoke":{
                            setIcon("wi wi-smoke");
                            break;
                        }case "Thunderstorm":{
                            setIcon("wi wi-thunderstorm");
                            break;
                        }
                        default:{
                            setIcon("wi wi-day-sunny");
                            break;
                        }
                    }
                }
            });
        });
    }

    useEffect(()=>{
        loadTempratureData();
    }, []);

    return <>
        <div className="container-fluid">
            <h1 className="text-center text-white bg-primary p-4">Weather Info Project</h1>

            <div className="container-fluid w-50 mx-auto bg-dark text-white rounded">
                <div className="p-4">
                    <input type="text" className="form-control p-2 my-3" style={{fontSize:"50px"}} name="search" id="search" placeholder="Enter City Name" value={cityname} onChange={(event)=>setCityname(event.target.value)}></input>
                    <div className="d-grid">
                    <button className="btn btn-primary btn-block btn-lg" onClick={loadTempratureData}>Search</button>
                    </div>
                </div>

                <div className="bg-dark text-white">
                <div className="row">
                        <div className="col-sm-12 text-center">
                            <h1 className="display-1"><i className={icon}></i></h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 text-center my-3">
                            <h3 className="display-3">{weatherData.main} <span className="h3">({weatherData.description})</span></h3>
                        </div>
                        <div className="col-sm-6 text-center">
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-8 text-center">
                            <h1 className="display-1">{mainCityName} <sup> {sysData.country} </sup></h1>
                        </div>
                        <div className="col-sm-4 text-center">
                            <h1 className="display-5">{mainData.temp} &#x2103;</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6 text-center">
                            <h1>Max. {mainData.temp_max}</h1>
                        </div>
                        <div className="col-sm-6 text-center">
                            <h1>Min. {mainData.temp_min}</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-3 text-center p-2">
                            <i className="wi wi-barometer display-3"></i>
                            <p className="display-3">{mainData.pressure}</p>
                        </div>
                        <div className="col-sm-3 text-center p-2">
                            <i className="wi wi-humidity display-3"></i>
                            <p className="display-3">{mainData.humidity}</p>
                        </div>
                        <div className="col-sm-3 text-center p-2">
                            <i className="wi wi-strong-wind display-3"></i>
                            <p className="display-3">{windData.speed}</p>
                        </div>
                        <div className="col-sm-3 text-center p-2">
                            <i className="wi wi-direction-up display-3"></i>
                            <p className="display-3">{windData.deg}</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6 text-center p-2">
                            <i className="wi wi-sunrise display-3"></i>
                            <p className="display-3">{SRS}</p>
                        </div>
                        <div className="col-sm-6 text-center p-2">
                            <i className="wi wi-sunset display-3"></i>
                            <p className="display-3">{SSS}</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </>
}

export default WeatherInfo;