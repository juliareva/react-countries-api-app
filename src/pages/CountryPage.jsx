import React from "react";
import { Link } from "react-router-dom";
import "./CountryPage.styled.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CountryPage = ({ route }) => {
  //const { currCountry } = route.params;
  const { state } = useLocation();
  const { currCountry, allCountries } = state;
  const navigate = useNavigate(<CountryPage />);

  return (
    <div className="country_page_wrapper">
      <div className="back_container main_text">
        <Link to="/" className="row">
          <i className="back_i">{<FontAwesomeIcon icon={faArrowLeftLong} />}</i>
          <p>Back</p>
        </Link>
      </div>

      <div className="country_wrapper">
        <i>{currCountry.flag}</i>
        <div className="country_info_wrapper">
          <h1 className="country_header">{currCountry.name.common}</h1>

          <div className="country_info_details">
            <div className="country_info_details_left">
              <div className="native_name row">
                <p className="main_subheader">Native Name:</p>
                <p className="main_text">{currCountry.name.common}</p>
              </div>

              <div className="population row">
                <p className="main_subheader">Population:</p>
                <p className="main_text">{currCountry.population}</p>
              </div>

              <div className="region row">
                <p className="main_subheader">Region:</p>
                <p className="main_text">{currCountry.region}</p>
              </div>

              <div className="sub_region row">
                <p className="main_subheader">Sub Region:</p>
                <p className="main_text">{currCountry.subregion}</p>
              </div>

              <div className="capital row">
                <p className="main_subheader">Capital:</p>
                <p className="main_text">{currCountry.capital}</p>
              </div>
            </div>

            <div className="country_info_details_right">
              <div className="domain row">
                <p className="main_subheader">Top Level Domain:</p>
                <p className="main_text">{currCountry.tld}</p>
              </div>

              <div className="currencies row">
                <p className="main_subheader">Currencies:</p>
                <p className="main_text">
                  {Object.keys(currCountry.currencies).slice(0, 1)[0]}
                </p>
              </div>

              <div className="languages row">
                <p className="main_subheader">Languages:</p>
                <p className="main_text">
                  {Object.keys(currCountry.languages)
                    .map((id) => currCountry.languages[id])
                    .join(", ")}
                </p>
              </div>
            </div>
          </div>

          <div className="border_countries row">
            {"borders" in currCountry ? (
              <>
                <p className="main_subheader">Border Countries:</p>
                {currCountry.borders.map((country_code) => {
                  return (
                    <p
                      onClick={() =>
                        navigate("/country/" + country_code, {
                          state: {
                            currCountry: allCountries
                              .filter((contr) => {
                                return contr.cca3 === country_code;
                              })
                              .slice(0, 1)[0],
                            allCountries: allCountries,
                          },
                        })
                      }
                      className="main_text border_country"
                    >
                      {
                        allCountries
                          .filter((contr) => {
                            return contr.cca3 === country_code;
                          })
                          .slice(0, 1)[0].name.common
                      }
                    </p>
                  );
                })}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
