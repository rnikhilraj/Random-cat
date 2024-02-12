import React from "react";
import type { NextPage } from "next";
import Header from "../components/header/Header";
import HomePage from "./HomePage";

const Page: NextPage = () => {
  return (
    <>
      <Header />
      <HomePage />
    </>
  );
};

export default Page;
