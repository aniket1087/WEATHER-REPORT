import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {
    const[city,setCity]=useState(null);
    const[search,setSearch]=useState("Mumbai");
    useEffect(()=>{
        const fetchApi=async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9e33953bbabaa703bf4683af8e6c14e1`;
            const response=await fetch(url);
            const resJson=await response.json();
            console.log(resJson);
            setCity(resJson.main);
        }
        fetchApi();
    },[search])
    return (
        <>
        <div className="container">
            <div className="box">
                <div className="inputData">
                    <input type="search" className="inputField" onChange={(e) => {setSearch(e.target.value);
                    }} />
                </div>
                    

                {!city?
                 (<div>
                      <div className="info">
                    <h2 className="location">
                        <i className="fa-solid fa-street-view"></i>
                    </h2>
                    <h2 className="location">
                    Data Not Found
                    </h2>
                    <h1 className="temp">
                       ......
                    </h1>
                    <h3 className="tempmin_max">....... | .......</h3>

                </div>
                <div className="wave1"></div>
                <div className="wave2"></div>
                <div className="wave3"></div>
                   </div>):
                   (<div>
                    <div className="info">
                  <h2 className="location">
                      <i className="fa-solid fa-street-view"></i>
                  </h2>
                  <h2 className="location">
                  {search}
                  </h2>
                  
                  <h1 className="temp">
                     {city.temp}
                  </h1>
                  <h3 className="tempmin_max">Min:{city.temp_min} | Max: {city.temp_max}</h3>

              </div>
              <div className="wave1"></div>
              <div className="wave2"></div>
              <div className="wave3"></div>
                 </div>)

                }    

            </div>
            </div>
        </>
    )
}
export default Tempapp;