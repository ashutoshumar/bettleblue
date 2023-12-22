import React,{FC} from 'react'

interface iProp {
  btnText:string
}
const Button:FC<iProp> = ({btnText}) => {
  return (
    <div>Button</div>
  )
}

export default Button