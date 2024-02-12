"use client";
import React, { useEffect, useState } from "react";
import { CatData, fetchcatData } from "./api";
import CatDataFormat from "../components/format/CatDataFormat";

const HomePage = () => {
  const [catDataList, setCatDataList] = useState<CatData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchcatData();
      setCatDataList(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {catDataList.map((catData) => (
        <CatDataFormat key={catData.id} catData={catData} />
      ))}
    </div>
  );
};

export default HomePage;
