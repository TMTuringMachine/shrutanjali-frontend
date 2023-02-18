import React, { FunctionComponent, ReactNode } from "react";

import { Outlet } from "react-router-dom";

interface Props {}

const UserLayout: FunctionComponent<Props> = () => {
  return (
    <div className="w-full h-full">
      <h1>in user layout</h1>
      <Outlet />
    </div>
  );
};

export default UserLayout;
