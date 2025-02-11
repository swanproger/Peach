import "./button.scss";
export default function EnterSpan({
  children,
  onClick,
  isActive,
  setSpan,
  ...props
}) {
  return (
    <span
      className={
        isActive == setSpan
          ? "header__cities__button active"
          : "header__cities__button"
      }
      onClick={onClick}
      {...props}
    >
      {children}
    </span>
  );
}
