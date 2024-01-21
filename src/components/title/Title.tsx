import React,{FC} from "react";

//INTERNAL IMPORT
import Style from "./Title.module.css";

interface iProp{
    heading:string,
    paragraph:string
}
const Title:FC<iProp> = ({ heading, paragraph }) => {
  return (
    <div className={Style.title}>
      <div className={Style.title_box}>
        <h2>{heading}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default Title;