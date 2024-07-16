import "./Header.css";
import moonIcon from "../../assets/110827_moon_icon.svg";
const Header = () => {
  return (
    <header className="header">
      <h2>Where in the world?</h2>
      <button className="mode__btn">
        <img className="btn__icon" src={moonIcon} alt="moon icon" />
        <p>Dark Mode</p>
      </button>
    </header>
  );
};

export default Header;
