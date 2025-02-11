import "./Benefits.scss";
import birthd from "./images/birthd.svg";
import dms from "./images/dms.svg";
import lit from "./images/lit.svg";
import phone from "./images/phone.svg";
import sport from "./images/sport.svg";
import technic from "./images/technic.svg";
import mortage from "./images/mortgage.svg";

export default function Benefits() {
  return (
    <div className="benefits__container">
      <div className="benefits">
        <span className="benefits__text-first">Компенсационный пакет</span>
        <div className="icons__first__container">
          <div className="icons__first">
            <div className="circle__container__first">
              <div className="circle">
                <img className="icon" src={dms} alt="" />
              </div>
              <p>ДМС</p>
            </div>
            <div className="circle__container__first">
              <div className="circle">
                <img className="icon" src={birthd} alt="" />
              </div>
              <p>
                Выходной <br></br>в день рождения
              </p>
            </div>
            <div className="circle__container__first">
              <div className="circle">
                <img className="icon" src={phone} alt="" />
              </div>
              <p>
                Корпоративная <br></br> мобильная связь
              </p>
            </div>
            <div className="circle__container__first">
              <div className="circle">
                <img className="icon" src={sport} alt="" />
              </div>
              <p>
                Корпоративные скидки <br></br> на спорт
              </p>
            </div>
            <div className="circle__container__first">
              <div className="circle">
                <img className="icon" src={lit} alt="" />
              </div>
              <p>LTI</p>
            </div>
          </div>
        </div>

        <div className="benefits__vector"></div>

        <span className="benefits__text-second">
          Программа дополнительной мотивации
        </span>
        <span className="benefits__text-third">доплата 12% от суммы</span>

        <div className="icons__second__container">
          <div className="icons__second">
            <div className="circle__container__second ">
              <div className="circle">
                <img className="icon" src={technic} alt="" />
              </div>
              <p>Оргтехники</p>
            </div>
            <div className="circle__container__second ">
              <div className="circle">
                <img className="icon" src={dms} alt="" />
              </div>
              <p>ДМС</p>
            </div>
            <div className="circle__container__second">
              <div className="circle">
                <img className="icon" src={mortage} alt="" />
              </div>
              <p>Ипотеки</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
