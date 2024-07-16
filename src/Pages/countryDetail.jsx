import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./countryDetail.css";
import Button from "../Components/Button/Button";
import { countryActions } from "../Store/Country-Slice";
import { useDispatch } from "react-redux";

const Country = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pop, setPop] = useState("");
  const [borderCountries, setBorderCountries] = useState([]);
  const dispatch = useDispatch();

  const fetchCountry = async () => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      const data = await res.json();
      setLoading(false);
      return data;
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  const fetchBorderCountries = async (borders) => {
    if (!borders || borders.length === 0) return [];
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/alpha?codes=${borders.join(",")}`
      );
      const data = await res.json();
      return data.map((country) => country.name.common);
    } catch (error) {
      console.log(error.message);
      return [];
    }
  };

  useEffect(() => {
    dispatch(countryActions.filter([]));
    fetchCountry().then(async (data) => {
      if (data) {
        const countryData = data[0];
        setCountry(countryData);
        setPop(Intl.NumberFormat().format(countryData.population));
        const borders = countryData.borders;
        const borderCountryNames = await fetchBorderCountries(borders);
        setBorderCountries(borderCountryNames);
      }
    });
  }, [name]);

  console.log(country);
  return (
    <>
      <div className="back_btn_container">
        <Button content={`&larr;  Back`} path={".."} />
      </div>
      {!loading && country && (
        <div className="country__container">
          <img
            className="Country__image"
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
          />
          <div className="details country__details">
            <h1 className="country__name">{country.name.common}</h1>
            <div>
              <div className="flex__container">
                <div>
                  <p className="information__line">
                    <span>Native Name: </span>
                    {Object.values(country.name.nativeName)[0].common}
                  </p>
                  <p className="information__line">
                    <span>Population: </span>
                    {pop}
                  </p>
                  <p className="information__line">
                    <span>Region: </span>
                    {country.region}
                  </p>
                  <p className="information__line">
                    <span>Sub Region: </span>
                    {country.subregion}
                  </p>
                  <p className="information__line">
                    <span>Capital: </span>
                    {country.capital}
                  </p>
                </div>
                <div>
                  <p className="information__line">
                    <span>Top Level Domain: </span>
                    {country.tld[0]}
                  </p>
                  <p className="information__line">
                    <span>Currencies: </span>
                    {Object.values(country.currencies)
                      .map((currency) => currency.name)
                      .join(", ")}
                  </p>
                  <p className="information__line">
                    <span>Languages: </span>
                    {Object.values(country.languages).join(", ")}
                  </p>
                </div>
              </div>
              <p className="information__line border__countries">
                <span>Border Countries: </span>
                <div className="border__countries__container">
                  {borderCountries.length > 0
                    ? borderCountries.map((country) => (
                        <Button
                          key={country}
                          content={country}
                          path={`../${country}`}
                        />
                      ))
                    : "None"}
                </div>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Country;
