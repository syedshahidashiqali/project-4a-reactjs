import './App.css';

// import images
import birdImg from "./images/bird.gif";
import cloudImg from './images/cloud.gif';
import carImg from "./images/car.png";
import wheelImg from "./images/wheel.png";

function App() {
  return (
    <div className="app">
      <div className="animation">
          <span className="state">Animation State: </span>
          <button className="pause">Pause</button>
          <button className="play">Play</button>
          <button className="reverse">Reverse</button>
          <button className="speedup">Speed Up</button>
          <button className="speeddown">Speed Down</button>
      </div>
      <div className="bird-div">
          <img className="bird" src={birdImg} alt="bird" />
      </div>
      <div className="cloud-div">
          <img src={cloudImg} alt="cloud" className="cloud" />
          <img src={cloudImg} alt="cloud" className="cloud" />
          <img src={cloudImg} alt="cloud" className="cloud" />
      </div>
      <div className="city"></div>
      <div className="highway"></div>
      <div className="car-div">
          <img src={carImg} alt="" className="car" />
      </div>
      <div className="wheels">
          <img src={wheelImg} alt="" className="wheel back-wheel" />
          <img src={wheelImg} alt="" className="wheel front-wheel" />
      </div>
    </div>
  );
}

export default App;
