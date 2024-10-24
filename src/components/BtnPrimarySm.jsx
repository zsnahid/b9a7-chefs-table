import PropTypes from "prop-types";

BtnPrimarySm.propTypes = {
  btnText: PropTypes.string,
};

export default function BtnPrimarySm({ btnText }) {
  return (
    <button className="btn bg-teal-green border-none rounded-3xl h-8 min-h-8">
      {btnText}
    </button>
  );
}
