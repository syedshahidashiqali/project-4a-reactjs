import './App.css';
import {useState, useRef, useEffect} from "react";
// import images
import birdImg from "./images/bird.gif";
import cloudImg from './images/cloud.gif';
import carImg from "./images/car.png";
import wheelImg from "./images/wheel.png";
import useWebAnimations from "@wellyshen/use-web-animations";

function App() {
  const [animationState, setAnimationState] = useState("running");

  // bird animation
  const {ref: birdRef, playState: birdPlayState, getAnimation: getBirdAnimation } = useWebAnimations({
    keyframes: [
      { transform: 'translateX(0vw)' },
      { transform: 'translateX(100vw)' }
    ],
    animationOptions: {
      duration: 14000,
      iterations :Infinity
    }
  });

  // cloud animation
  const {ref: cloudRef, playState: cloudPlayState, getAnimation: getCloudAnimation } = useWebAnimations({
    keyframes: [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' }
    ],
    animationOptions: {
      duration: 20000,
      iterations :Infinity
    }
  });

  // car animation
  const {ref: carRef, playState: carPlayState, getAnimation: getCarAnimation } = useWebAnimations({
    keyframes: [
      {transform: "translateY(0px)"},
      {transform: "translateY(2px)"},
    ],
    animationOptions: {
      duration: 2000,
      iterations :Infinity,
      direction: "alternate"
    }
  });

  // back wheel animation
  const {ref: backWheelRef, playState: backWheelPlayState, getAnimation: getBackWheelAnimation } = useWebAnimations({
    keyframes: [
      {transform: 'rotate(0deg)'},
      {transform: 'rotate(3600deg)'},
    ],
    animationOptions: {
      duration: 20000,
      iterations :Infinity,
    }
  });

  // front wheel animation
  const {ref: frontWheelRef, playState: frontWheelPlayState, getAnimation: getFrontWheelAnimation } = useWebAnimations({
    keyframes: [
      {transform: 'rotate(0deg)'},
      {transform: 'rotate(3600deg)'},
    ],
    animationOptions: {
      duration: 20000,
      iterations :Infinity,
    }
  });

  // city animation
  const {ref: cityRef, playState: cityPlayState, getAnimation: getCityAnimation } = useWebAnimations({
    keyframes: [
      {transform: 'translateX(0%)'},
      {transform: 'translateX(-20%)'},
    ],
    animationOptions: {
      duration: 20000,
      iterations :Infinity,
    }
  });

  // highway animation
  const {ref: highwayRef, playState: highwayPlayState, getAnimation: getHighwayAnimation } = useWebAnimations({
    keyframes: [
      {transform: 'translateX(0%)'},
      {transform: 'translateX(-10%)'},
      {transform: 'translateX(-20%)'},
    ],
    animationOptions: {
      duration: 20000,
      iterations :Infinity,
    }
  });

  // Pause Button Handler
  const pauseBtnHandler = () => {
    getBirdAnimation().pause();
    getCloudAnimation().pause();
    getCarAnimation().pause();
    getBackWheelAnimation().pause();
    getFrontWheelAnimation().pause();
    getCityAnimation().pause();
    getHighwayAnimation().pause();
    setAnimationState("paused")
  };

  // Play Button Handler
  const playBtnHandler = () => {
    getBirdAnimation().play();
    getCloudAnimation().play();
    getCarAnimation().play();
    getBackWheelAnimation().play();
    getFrontWheelAnimation().play();
    getCityAnimation().play();
    getHighwayAnimation().play();
    setAnimationState("running")
  };
  return (
    <div className="app">
      <div className="animation">
          <span className="state">Animation State: {animationState}</span>
          <button onClick={pauseBtnHandler} className="pause">Pause</button>
          <button onClick={playBtnHandler} className="play">Play</button>
          <button className="reverse">Reverse</button>
          <button className="speedup">Speed Up</button>
          <button className="speeddown">Speed Down</button>
      </div>
      <div className="bird-div">
          <img ref={birdRef} className="bird" src={birdImg} alt="bird" />
      </div>
      <div ref={cloudRef} className="cloud-div">
          <img src={cloudImg} alt="cloud" className="cloud" />
          <img src={cloudImg} alt="cloud" className="cloud" />
          <img src={cloudImg} alt="cloud" className="cloud" />
      </div>
      <div ref= {cityRef} className="city"></div>
      <div ref={highwayRef} className="highway"></div>
      <div className="car-div">
          <img ref ={carRef} src={carImg} alt="" className="car" />
      </div>
      <div className="wheels">
          <img ref={backWheelRef} src={wheelImg} alt="" className="wheel back-wheel" />
          <img ref={frontWheelRef} src={wheelImg} alt="" className="wheel front-wheel" />
      </div>
    </div>
  );
}

export default App;
