import React,{FC, ReactElement} from 'react'
import Style from "./Button.module.css";
interface iProp {
  btnText:string;
  icon?:ReactElement;
  classStyle?:string
}
const Button:FC<iProp> = ({icon,btnText,classStyle}) => {
  return (
    <div className={Style.box}>
      <button
        className={`${Style.button} ${classStyle}`}
        
      >
        {icon} {btnText}
      </button>
    </div>
  );
}

export default Button