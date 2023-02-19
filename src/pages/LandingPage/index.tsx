import React, { FunctionComponent, useState } from "react";

//assets
import NameBlack from "../../assets/images/shrutanjali-name-black.png";
import NameOrange from "../../assets/images/shrutanjali-name-orange.png";
import MaImage from "../../assets/images/MA-image1.png";
import Transition from "../../components/Transition";

import { useNavigate } from "react-router-dom";

interface Props {}

const LandingPage: FunctionComponent<Props> = () => {
  const [nameHover, setNameHover] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <Transition>
      <div
        className="w-screen h-screen bg-background flex overflow-hidden"
        onClick={handleClick}
      >
        <div className="flex-1 grid place-items-center">
          {nameHover ? (
            <img
              src={NameOrange}
              alt=""
              className="cursor-pointer transition-all ease-out duration-100"
              onMouseLeave={() => {
                setNameHover(false);
              }}
            />
          ) : (
            <img
              src={NameBlack}
              alt=""
              onMouseEnter={() => {
                setNameHover(true);
              }}
              onMouseLeave={() => {
                setNameHover(false);
              }}
            />
          )}
        </div>
        <div className="flex-1 flex items-end justify-center">
          <img src={MaImage} alt="" className="h-[95vh]" />
        </div>
      </div>
    </Transition>
  );
};

export default LandingPage;
