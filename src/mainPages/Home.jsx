import bike from "../../src/assets/immutable/video/bike.mp4";

import "../scss/layout/_home.scss";

function Home() {
  return (
    <div>
      <div className="recommended-products"></div>
      <div className="bikeRun">
        <div className="video-container">
          <video src={bike} autoPlay loop muted></video>
        </div>
      </div>
    </div>
  );
}

export default Home;
