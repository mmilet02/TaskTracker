import PropTypes from "prop-types";

const Button = ({ color, text, toggleAddTask }) => {
  return (
    <button
      onClick={toggleAddTask}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
