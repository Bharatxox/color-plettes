import PropTypes from "prop-types";

const Card = ({ name, hex, key }) => {
  const mystyle = {
    background: hex,
  };
  return (
    <div className="text-black border shadow-xl h-[220px] w-[130px]">
      <div style={mystyle} className="h-3/4" title={name}></div>
      <div className="h-1/4 py-1 px-2">
        <h2 className="text-black font-semibold">{hex}</h2>
        <p style={{ color: hex }} className="font-medium">
          {name}
        </p>
      </div>
    </div>
  );
};
Card.propTypes = {
  name: PropTypes.string,
  hex: PropTypes.string,
  id: PropTypes.number,
};

export default Card;
