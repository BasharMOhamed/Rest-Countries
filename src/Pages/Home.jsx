import React, { useEffect, useState } from "react";
import Search from "../Components/Search/Search";
import Filter from "../Components/Filter/Filter";
import Card from "../Components/Card/Card";
import { Link, useLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { countryActions } from "../Store/Country-Slice";
const Home = () => {
  const countries = useLoaderData();
  const [source, setSource] = useState([]);
  const filteredCountries = useSelector((state) => state.country.filtered);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(countryActions.replaceCountries(countries));
  }, []);

  useEffect(() => {
    setSource(filteredCountries.length > 0 ? filteredCountries : countries);
  }, [filteredCountries, countries]);
  return (
    <>
      <div className="form">
        <Search />
        <Filter />
      </div>
      <div className="container">
        {source.map((country) => {
          return (
            <Link key={country.cca3} to={`${country.name.common.trim()}`}>
              <Card key={country.cca3} country={country} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Home;
