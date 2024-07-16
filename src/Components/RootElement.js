import React from "react";
import Header from "./Header/Header";
import { Outlet, useNavigation } from "react-router-dom";

const RootElement = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default RootElement;
