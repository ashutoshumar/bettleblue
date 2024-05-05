"use client"
import React,{FC} from "react";
import Image,{StaticImageData} from "next/image";

//INTERNAL IMPORT
import Style from "./banner.module.css";
interface iProp {
  bannerImage:StaticImageData
}
const Banner:FC<iProp>= ({ bannerImage }) => {
  return (
    <div className={Style.banner}>
      <div className={Style.banner_img}>
        <Image
          src={bannerImage}
          alt="background"
          width={1600}
          height={300}
        />
      </div>

      <div className={Style.banner_img_mobile}>
        <Image
          src={bannerImage}
          alt="background"
          width={1600}
          height={900}
        />
      </div>
    </div>
  );
};

export default Banner;