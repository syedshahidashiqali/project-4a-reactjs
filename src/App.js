import './App.css';
import {useState, useRef, useEffect} from "react";
// import images
import birdImg from "./images/bird.gif";
import cloudImg from './images/cloud.gif';
import carImg from "./images/car.png";
import wheelImg from "./images/wheel.png";

function App() {
  const [animationState, setAnimationState] = useState("running")

  useEffect(() => {

    const bird = birdRef.current;
    // bird animation
    var birdKeyframes = [
      { transform: 'translateX(0vw)' },
      { transform: 'translateX(100vw)' },
    ];
    var birdAnimation = bird.animate(birdKeyframes, {
      duration: 14000,
      iterations :Infinity
    });
  })

  const birdRef = useRef();
  return (
    <div className="app">
      <div className="animation">
          <span className="state">Animation State: {animationState}</span>
          <button className="pause">Pause</button>
          <button className="play">Play</button>
          <button className="reverse">Reverse</button>
          <button className="speedup">Speed Up</button>
          <button className="speeddown">Speed Down</button>
      </div>
      <div ref={birdRef} className="bird-div">
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
