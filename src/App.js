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

    const cloud = cloudRef.current;
    // cloud animation
    var cloudKeyframes = [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' },
    ];
    var cloudAnimation = cloud.animate(cloudKeyframes, {
      duration: 20000,
      iterations :Infinity
    });

    const car = carRef.current;
    // car animation
    var carKeyFrame = [
      {transform: "translateY(0px)"},
      {transform: "translateY(2px)"},
    ];
    var carAnimation = car.animate(carKeyFrame, {
      duration:2000,
      iterations:Infinity,
      direction: "alternate"
    });

    const backWheel = backWheelRef.current;
    const frontWheel = frontWheelRef.current;
    // wheels animation
    var wheelsKeyFrames = [
      {transform: 'rotate(0deg)'},
      {transform: 'rotate(3600deg)'},
    ];
    var backWheelAnimation = backWheel.animate(wheelsKeyFrames, {
      duration: 20000,
      iterations: Infinity
    });
      var frontWheelAnimation = frontWheel.animate(wheelsKeyFrames, {
      duration: 20000,
      iterations: Infinity
    });

    const city = cityRef.current;
    // city animation
    var cityKeyFrame = [
      {transform: 'translateX(0%)'},
      {transform: 'translateX(-20%)'},
    ];
    var cityAnimation = city.animate(cityKeyFrame, {
      duration:20000,
      iterations:Infinity,
    });

    const highway = highwayRef.current;
    // highway animation
    var highwayKeyFrame = [
      {transform: 'translateX(0%)'},
      {transform: 'translateX(-10%)'},
      {transform: 'translateX(-20%)'},
    ];
    var highwayAnimation = highway.animate(highwayKeyFrame, {
        duration:20000,
        iterations:Infinity,
    })

  })

  const birdRef = useRef();
  const cloudRef = useRef();
  const carRef = useRef();
  const backWheelRef = useRef();
  const frontWheelRef = useRef();
  const cityRef = useRef();
  const highwayRef = useRef();
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
