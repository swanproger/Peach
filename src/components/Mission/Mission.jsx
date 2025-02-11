import "../Mission/Mission.scss";
import left from "./Left pattern.svg";
import right from "./Right pattern.svg";
export default function Mission() {
  return (
    <div className="mission__container">
      <div className="mission">
        <img src={left} className="misson__left-img" alt="left img"></img>
        <div className="mission__text">
          <span>Миссия Softline</span>
          <p>
            Мы помогаем организациям трансформироваться, работать эффективно и
            безопасно  в условиях цифровой экономики.
          </p>
        </div>
        <img src={right} className="misson__right-img" alt="right img"></img>
      </div>
    </div>
  );
}
