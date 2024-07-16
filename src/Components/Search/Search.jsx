import { useEffect, useState } from "react";
import "./Search.css";
import searchIcon from "../../assets/icons8-search.svg";
import { useDispatch, useSelector } from "react-redux";
import { countryActions } from "../../Store/Country-Slice";
const Search = () => {
  const [Input, setInput] = useState("");
  const dispatch = useDispatch();
  const filteredCountries = useSelector((state) => state.country.filtered);
  const countries = useSelector((state) => state.country.countries);
  // const changeHandler = (e) => {
  //   setInput(e.target.value);
  // };

  // useEffect(() => {
  //   if (filteredCountries.length === 0) {
  //     dispatch(
  //       countryActions.filter(
  //         countries.filter((country) =>
  //           country.name.common.toLowerCase().includes(Input)
  //         )
  //       )
  //     );
  //   } else {
  //     dispatch(
  //       countryActions.filter(
  //         filteredCountries.filter((country) =>
  //           country.name.common.toLowerCase().includes(Input)
  //         )
  //       )
  //     );
  //   }
  //   console.log(filteredCountries);
  // }, [Input, dispatch, filteredCountries]);

  const changeHandler = (e) => {
    const userInput = e.target.value.toLowerCase();
    setInput(userInput);

    // Use filteredCountries if it has elements, otherwise use countries
    // const sourceArray =
    //   filteredCountries.length > 0 ? filteredCountries : countries;
    const sourceArray = countries;

    const filtered = sourceArray.filter((country) =>
      country.name.common.toLowerCase().includes(userInput)
    );

    dispatch(countryActions.filter(filtered));
    // console.log(filteredCountries);
  };

  return (
    <div className="search__container">
      <img className="search__icon" src={searchIcon} alt="Search icon" />
      <input
        className="search__area"
        type="text"
        value={Input}
        onChange={changeHandler}
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default Search;
