import React,{FC} from "react";
import Image,{StaticImageData} from "next/image";
import { MdVerified } from "react-icons/md";

//INTERNAL IMPORT
import Style from "./DaysComponents.module.css";
import images from "../../../../public/img";

interface prop1{
  background:StaticImageData
  user:StaticImageData

}
interface iProp {
 i:number
 el:prop1
}
const DaysComponents:FC<iProp> = ({i,el}) => {
  return (
    <div className={Style.daysComponent}>
      <div className={Style.daysComponent_box}>
        <div className={Style.daysComponent_box_img}>
          <Image
            src={el.background}
            className={Style.daysComponent_box_img_img}
            alt="profile background"
            width={0}
            height={300}
           
          />
        </div>

        <div className={Style.daysComponent_box_profile}>
          <Image
            src={images.creatorbackground2}
            alt="profile"
            width={0}
            height={100}
            className={Style.daysComponent_box_img_1}
           
          />
          <Image
            src={images.creatorbackground2}
            alt="profile"
            width={0}
            height={100}
            className={Style.daysComponent_box_img_2}
           
          />
          <Image
            src={images.creatorbackground2}
            alt="profile"
            width={0}
            height={100}
            className={Style.daysComponent_box_img_3}
           
          />
        </div>

        <div className={Style.daysComponent_box_title}>
          <h2>Amazing Collection</h2>
          <div className={Style.daysComponent_box_title_info}>
            <div className={Style.daysComponent_box_title_info_profile}>
              <Image
                src={el.user}
                alt="profile"
                width={30}
                height={30}
                className={Style.daysComponent_box_title_info_profile_img}
              />

              <p>
                Creator
                <span>
                  Ashutosh
                  <small>
                    <MdVerified />
                  </small>
                </span>
              </p>
            </div>

            <div className={Style.daysComponent_box_title_info_price}>
              <small>1.255 ETH</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaysComponents;