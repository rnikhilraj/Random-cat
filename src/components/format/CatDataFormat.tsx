import React from "react";
import { CatData } from "../../app/api";
import styles from "./format.module.css";

interface CatDataFormatProps {
  catData: CatData;
}

const CatDataFormat: React.FC<CatDataFormatProps> = ({ catData }) => {
  return (
    <div className={styles.catDataContainer}>
      <img src={catData.url} alt="Random Cat" width="100%" height="auto" />
    </div>
  );
};

export default CatDataFormat;
