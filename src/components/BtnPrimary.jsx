import PropTypes from "prop-types";

BtnPrimary.propTypes = {
  btnText: PropTypes.string,
};

export default function BtnPrimary({ btnText }) {
  return (
    <button className="btn bg-teal-green border-none rounded-3xl mr-5">
      {btnText}
    </button>
  );
}
