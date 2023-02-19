import React, { FunctionComponent, ReactNode } from "react";

import { Link, Outlet } from "react-router-dom";
import Header from "../../components/Header";

interface Props {}

const UserLayout: FunctionComponent<Props> = () => {
  return (
    <div className="w-full h-full flex flex-col bg-background">
      <Header />
      <div className="w-full flex-1 overflow-y-auto px-6">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
