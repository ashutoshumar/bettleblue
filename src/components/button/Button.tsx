import React,{FC} from 'react'
import Style from "./Button.module.css";
interface iProp {
  btnText:string
}
const Button:FC<iProp> = ({btnText}) => {
  return (
    <div className={Style.box}>
      <button className={Style.button} >
        {btnText}
      </button>
    </div>
  );
}

export default Button