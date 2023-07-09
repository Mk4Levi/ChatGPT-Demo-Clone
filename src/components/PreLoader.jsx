//
import mkLogo from "../assets/MK-Logo.png";
import "../css/PreLoader.css";

const PreLoader = () => {
  return (
    <div id="page">
      <div id="container">
        <div id="ring"></div>
        <div id="ring"></div>
        <div id="ring"></div>
        <div id="ring"></div>
        <div id="h3">
          <img
            style={{ width: "70px", height: "70px" }}
            src={mkLogo}
            alt="loaderLogo"
          />
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
