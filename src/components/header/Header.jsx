import "../header/header.scss";
import logo from "./logo.svg";
export default function Header() {
  return (
    <div className="header__container">
      <div className="header">
        <img src={logo} alt="logo"></img>
        <div className="links">
          <span>Облачные решения</span>
          <span>Кибербезопасность</span>
          <span>Импортозамещение</span>
          <span>Цифровая трансформация</span>
        </div>
      </div>
    </div>
  );
}
