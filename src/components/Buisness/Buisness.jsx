import FlipCard from "./FlipCard";
import "./Buisness.scss";
import one from "./images/img1.png";
import two from "./images/img2.png";
import three from "./images/img3.png";
import four from "./images/img4.png";
import five from "./images/img5.png";
import six from "./images/img6.png";
import { buisnessItems } from "./data";

export default function Buisness() {
  return (
    <div className="buisness">
      <span className="buisness__title">Направление бизнеса</span>
      <div className="card-container">
        <FlipCard
          style={{ backgroundImage: `url(${one})` }}
          title={buisnessItems.decisions.title}
          text={buisnessItems.decisions.desc}
        ></FlipCard>
        <FlipCard
          style={{ backgroundImage: `url(${four})` }}
          title={buisnessItems.safe.title}
          text={buisnessItems.safe.desc}
        ></FlipCard>
        <FlipCard
          style={{ backgroundImage: `url(${two})` }}
          title={buisnessItems.import.title}
          text={buisnessItems.import.desc}
        ></FlipCard>
        <FlipCard
          style={{ backgroundImage: `url(${five})` }}
          title={buisnessItems.cloud.title}
          text={buisnessItems.cloud.desc}
        ></FlipCard>
        <FlipCard
          style={{ backgroundImage: `url(${three})` }}
          title={buisnessItems.development.title}
          text={buisnessItems.development.desc}
        ></FlipCard>
        <FlipCard
          style={{ backgroundImage: `url(${six})` }}
          title={buisnessItems.support.title}
          text={buisnessItems.support.desc}
        ></FlipCard>
      </div>
    </div>
  );
}
