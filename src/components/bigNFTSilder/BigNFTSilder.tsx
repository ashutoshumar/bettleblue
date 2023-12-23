"use client"
import React,{useState,useEffect,useCallback} from 'react'
import Image from "next/image";
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";

import Style from "./BigNFTSilder.module.css"
import images from "../../../public/img"
import { Button } from '../component.index';

const BigNFTSilder = () => {
  const [idNum,setIdNum]=useState(1)
  const sliderData = [
    {
      title : "Hello Nft",
      id : 1,
      name:"Ashutosh Kumar",
      collection:"gYm",
      price : "0000000018 ETH",
      like : 500,
      image : images.user1,
      nftImage : images.nft_image_1,
      time:{
        days:24,
        hours:5,
        minutes:35,
        seconds : 4
      }
    },
    {
      title : "Hello Nft",
      id : 2,
      name:"Viraj",
      collection:"hONOREDone",
      price : "0000000018 ETH",
      like : 500,
      image : images.user2,
      nftImage : images.nft_image_2,
      time:{
        days:24,
        hours:5,
        minutes:35,
        seconds : 4
      }
    },
    {
      title : "Hello Nft",
      id : 3,
      name:"Sonal Kumar",
      collection:"Pool Party",
      price : "0000000018 ETH",
      like : 500,
      image : images.user3,
      nftImage : images.nft_image_3,
      time:{
        days:24,
        hours:5,
        minutes:35,
        seconds : 4
      }
    }
  ]
  const inc = useCallback(()=>{
    if(idNum+1<sliderData.length)
    {
      setIdNum(idNum+1)
    }
  },[idNum,sliderData.length])
  const dec = useCallback(()=>{
    if(idNum>0)
    {
      setIdNum(idNum-1)
    }
  },[idNum])
  // useEffect(()=>{
  //   inc()
  // },[])
  return (
    <div className={Style.bigNFTSlider}>
      <div className={Style.bigNFTSlider_box}>
        <div className={Style.bigNFTSlider_box_left}>
          <h2>{sliderData[idNum].title}</h2>
          <div className={Style.bigNFTSlider_box_left_creator}>
            <div className={Style.bigNFTSlider_box_left_creator_profile}>
              <Image
                className={Style.bigNFTSlider_box_left_creator_profile_img}
                src={sliderData[idNum].image}
                alt="profile image"
                width={50}
                height={50}
              />
              <div className={Style.bigNFTSlider_box_left_creator_profile_info}>
                <p>Creator</p>
                <h4>
                  {sliderData[idNum].name}{" "}
                  <span>
                    <MdVerified />
                  </span>
                </h4>
              </div>
            </div>

            <div className={Style.bigNFTSlider_box_left_creator_collection}>
              <AiFillFire
                className={Style.bigNFTSlider_box_left_creator_collection_icon}
              />

              <div
                className={Style.bigNFTSlider_box_left_creator_collection_info}
              >
                <p>Collection</p>
                <h4>{sliderData[idNum].collection}</h4>
              </div>
            </div>
          </div>

          <div className={Style.bigNFTSlider_box_left_bidding}>
            <div className={Style.bigNFTSlider_box_left_bidding_box}>
              <small>Current Bid</small>
              <p>
                {sliderData[idNum].price} <span>$221,21</span>
              </p>
            </div>

            <p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
              <MdTimer
                className={Style.bigNFTSlider_box_left_bidding_box_icon}
              />
              <span>Auction ending in</span>
            </p>

            <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNum].time.days}</p>
                <span>Days</span>
              </div>

              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNum].time.hours}</p>
                <span>Hours</span>
              </div>

              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNum].time.minutes}</p>
                <span>mins</span>
              </div>

              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNum].time.seconds}</p>
                <span>secs</span>
              </div>
            </div>

            <div className={Style.bigNFTSlider_box_left_button}>
              <Button btnText="Place"  />
              <Button btnText="View"  />
            </div>
          </div>

          <div className={Style.bigNFTSlider_box_left_sliderBtn}>
            <TbArrowBigLeftLines
              className={Style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => dec()}
            />
            <TbArrowBigRightLine
              className={Style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => inc()}
            />
          </div>
        </div>

        <div className={Style.bigNFTSlider_box_right}>
          <div className={Style.bigNFTSlider_box_right_box}>
            <Image
              src={sliderData[idNum].nftImage}
              alt="NFT IMAGE"
              className={Style.bigNFTSlider_box_right_box_img}
              width={600}
              height={600}
            />

            <div className={Style.bigNFTSlider_box_right_box_like}>
              <AiFillHeart />
              <span>{sliderData[idNum].like}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigNFTSilder