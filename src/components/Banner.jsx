import BtnOutline from "./BtnOutline";
import BtnPrimary from "./BtnPrimary";

export default function Banner() {
  return (
    <div className="hero min-h-[80vh] bg-hero bg-center rounded-xl mb-20">
      <div className="hero-overlay bg-black bg-opacity-60 rounded-xl"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-4xl font-bold">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <BtnPrimary btnText={"Explore Now"} />
          <BtnOutline btnText={"Our Feedback"} />
        </div>
      </div>
    </div>
  );
}
