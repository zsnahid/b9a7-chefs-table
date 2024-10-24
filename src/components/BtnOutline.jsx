import PropTypes from "prop-types";

BtnOutline.propTypes = {
  btnText: PropTypes.string,
};

export default function BtnOutline({ btnText }) {
  return (
    <button className="btn btn-outline border-white text-white rounded-3xl">
      {btnText}
    </button>
  );
}
