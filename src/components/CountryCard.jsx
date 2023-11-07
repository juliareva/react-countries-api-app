import React from "react";
import { useNavigate } from "react-router-dom";
import CountryPage from "../pages/CountryPage";

import "./CountryCard.styled.css";

const CountryCard = ({ currCountry, allCountries }) => {
  const navigate = useNavigate(<CountryPage />);

  return (
    <div
      className="card_wrapper"
      onClick={() =>
        navigate("/country/" + currCountry.cca3, {
          state: {
            currCountry: currCountry,
            allCountries: allCountries,
          },
        })
      }
    >
      <div className="country_flag">{currCountry.flag}</div>

      <div className="country_info">
        <h1 className="country_header">{currCountry.name.common}</h1>

        <div className="population">
          <p className="main_subheader">Population:</p>
          <p className="main_text">{currCountry.population}</p>
        </div>

        <div className="region">
          <p className="main_subheader">Region:</p>
          <p className="main_text">{currCountry.region}</p>
        </div>

        <div className="capital">
          <p className="main_subheader">Capital:</p>
          <p className="main_text">{currCountry.capital}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
