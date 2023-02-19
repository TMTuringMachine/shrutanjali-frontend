import React, { FunctionComponent, useState } from "react";

import NameBlack from "../../assets/images/shrutanjali-name-black.png";
import { Link, useLocation } from "react-router-dom";

interface Option {
  label: string;
  link: string;
}

interface HeaderKeyProps {
  text: string;
  active: boolean;
  link: string;
  options?: Option[];
}

const HeaderKey: FunctionComponent<HeaderKeyProps> = ({
  text,
  active,
  link,
  options,
}) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  if (link == "false") {
    return (
      <div
        className="flex flex-col items-center"
        // onMouseEnter={() => {
        //   setShowOptions(true);
        // }}
      >
        <div
          className={`w-fit h-fipx-4 py-1 px-5 rounded-full text-md cursor-pointer ${
            active ? "bg-primary text-white" : "text-black"
          }`}
          onClick={toggleOptions}
        >
          {text}
        </div>
        {showOptions ? (
          <div
            className="absolute w-52 shadow-shadow1 rounded-md flex flex-col gap-2 items-center p-2 top-14 z-50"
            // onMouseLeave={() => {
            //   setShowOptions(false);
            // }}
          >
            {options?.map((opt) => (
              <div className="w-full h-fit hover:bg-primary cursor-pointer p-1 grid place-items-center rounded-md hover:text-white">
                {opt.label}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <Link
      to={link}
      className={`w-fit h-fipx-4 py-1 px-5 rounded-full text-md ${
        active ? "bg-primary text-white" : "text-black"
      }`}
    >
      {text}
    </Link>
  );
};

const Header: FunctionComponent = () => {
  const location = useLocation();
  return (
    <div className="w-full h-16 flex justify-between items-center px-6 py-1">
      <img src={NameBlack} alt="" className="h-12" />
      <div className="flex items-center gap-10">
        <HeaderKey
          text="HOME"
          active={location.pathname == "/home"}
          link="/home"
        />
        <HeaderKey
          text="EXPLORE"
          active={location.pathname == "/explore"}
          link="/home"
        />
        <HeaderKey
          text="READING"
          active={location.pathname == "/reading"}
          link="false"
          options={[
            { label: "LYRICS READING", link: "/lyrics" },
            { label: "BOOK-A Light Of Life", link: "/book" },
          ]}
        />
        <HeaderKey
          text="LISTENING"
          active={location.pathname == "/listening"}
          link="/home"
        />
      </div>
      <div className="w-10 h-10 bg-transparent"></div>
    </div>
  );
};

export default Header;
