import "./Card.css";
const Card = (props) => {
  const { name, population, region, capital, flags } = props.country;
  const pop = new Intl.NumberFormat("en-US").format(population);
  return (
    <div className="card">
      <img className="flag" src={flags.png} alt="" />
      <div className="details">
        <h3 className="country-name">{name.common}</h3>
        <p className="information__line">
          <span>Population: </span>
          {pop}
        </p>
        <p className="information__line">
          <span>Region: </span>
          {region}
        </p>
        <p className="information__line">
          <span>Capital: </span>
          {capital}
        </p>
      </div>
    </div>
  );
};

export default Card;
