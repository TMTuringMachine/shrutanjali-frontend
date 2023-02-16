import React,{useState} from "react";
import Dadaji_BW from "../images/Dadaji_BW.png";
import Dadaji from "../images/Dadaji.png";
import Maa_BW from "../images/Maa_BW.png";
import Maa from "../images/Maa.png";

const About = () => {
  const [hoverDadaji,setHoverDadaji] = useState(false);
  const [hoverMaa,setHoverMaa] = useState(false);

  return (
    <>
      <div className="max-h-screen overflow-y-hidden flex justify-evenly">
        <div className="relative max-h-screen">
          <img
            className="mt-6 transition-all hover:scale-110 duration-700"
            onMouseOver={(e) => {
              setHoverDadaji(true)
              e.currentTarget.src = Dadaji;
            }}
            onMouseOut={(e) => {
              setHoverDadaji(false)
              e.currentTarget.src = Dadaji_BW}
            }
            src={Dadaji_BW}
            alt=""
          />
          <button className={`bg-black transition-all duration-700 text-white bg-opacity-70 rounded-2xl h-8 text-xs font-medium absolute left-0 right-0 bottom-10 margin-auto`}>
             {hoverDadaji?'Read More':'Shri Dilip Kumar Roy - Dadaji'}
          </button>
        </div>
        <div className="relative max-h-screen">
          <img
            className="transition-all hover:scale-110 duration-700"
            onMouseOver={(e) => {
              setHoverMaa(true)
              e.currentTarget.src = Maa;
            }}
            onMouseOut={(e) => {
              setHoverMaa(false)
              e.currentTarget.src = Maa_BW}
            }
            src={Maa_BW}
            alt=""
          />
          <button className={`bg-black transition-all hduration-700 text-white bg-opacity-70 rounded-2xl h-8 text-xs font-medium absolute left-0 right-0 bottom-10 margin-auto`}>
            {hoverMaa?"Read More":"Indira Devi - Ma"}
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
