import "./Button.css";

const Button = ({ symbol, buttonClicked }) => {
  return (
    <div
      onClick={() => buttonClicked(symbol)}
      className="button"
    >
      {symbol}
    </div>
  );
};

export default Button;