import "./FlipCard.scss";
export default function FlipCard({ ...props }) {
  return (
    <div className="flip-card">
      <div className="flip-card__front" {...props}>
        <div className="flip-card__front__container">
          <p>{props.title}</p>
        </div>
        <div className="flip-card__front__text"></div>
      </div>
      <div className="flip-card__back" {...props}></div>
      <div className="flip-card__back__container">
        <span className="flip-card__back__title">{props.title}</span>
        <p className="flip-card__back__text">{props.text}</p>
      </div>
    </div>
  );
}
