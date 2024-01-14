import { useState } from "react";
import "./App.css";
 import video1 from "./assets/1.mp4";
 import video2 from "./assets/2.mp4";
 import video3 from "./assets/3.mp4";



function App() {
  const data = [video1, video2, video3];
  const [index, setIndex] = useState(0);
  const handleNext = () => {
    setIndex((index + 1) % data.length);
  };
  const handlePrev = () => {
    if (index == 0) setIndex(data.length - 1);
    else setIndex(index - 1);
  };
  return (
    <>
      <div className="flex justify-center">
        <button onClick={handlePrev}>previous</button>
        <video src={data[index]} autoPlay className="w-72 h-72" controls />
        <button onClick={handleNext}>next</button>
      </div>
    </>
  );
}

export default App;
