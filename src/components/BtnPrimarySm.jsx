import PropTypes from "prop-types";

BtnPrimarySm.propTypes = {
  btnText: PropTypes.string,
  handleClick: PropTypes.func,
};

export default function BtnPrimarySm({ btnText, handleClick }) {
  return (
    <button
      className="btn bg-teal-green border-none rounded-3xl h-8 min-h-8"
      onClick={handleClick}
    >
      {btnText}
    </button>
  );
}
