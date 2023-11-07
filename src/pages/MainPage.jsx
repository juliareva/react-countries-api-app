import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import CountryCard from "../components/CountryCard";
import "./MainPage.styled.css";



const MainPage = () => {
  const [country, setCountry] = useState([]);
  const [region, setRegion] = useState("default");
  const [searchTerm, setSearchTerm] = useState("");
  const [globe, setGlobe] = useState([]);

  
  useEffect(() => {
    getCountry();
  }, []);

  const getCountry = () => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setCountry(res.data);
        setGlobe(res.data);
        console.log(res.data);
      })
      .catch((err) => {console.log(err)
        });
  };

  // search countries
  const findCountry = () => {
    axios
      .get(`https://restcountries.com/v3.1/name/${searchTerm}`)
      .then((res) => {
        setCountry(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  // handle country search on Enter
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        findCountry()
      }
    }

  return (
    <div className="mainpage_wrapper">
      <div className="search_container">
        <form onSubmit={e => { e.preventDefault(); }}>
          <input
            placeholder="Seach for a country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <i className="search_i">
            {<FontAwesomeIcon icon={faMagnifyingGlass} onClick={findCountry} />}
          </i>

        </form>

        <div className="filter">
          <select
            name="regions"
            id="regions"
            value={region}
            onChange={(e) => {
              setRegion(e.target.value);
            }}
          >
            <option value="default">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>

      <div className="countries_wrapper">
        {region === "default"
          ? country.map((currCountry, index) => {
              return (
                <CountryCard
                  key={index}
                  currCountry={currCountry}
                  allCountries={globe}
                />
              );
            })
          : country
              .filter((currCountry) => currCountry.region === region)
              .map((currCountry, index) => {
                return (
                  <CountryCard
                    key={index}
                    currCountry={currCountry}
                    allCountries={globe}
                  />
                );
              })}
      </div>
    </div>
  );
};

export default MainPage;
