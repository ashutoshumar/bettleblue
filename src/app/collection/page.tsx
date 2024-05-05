"use client"
import React from "react";

//INTERNAL IMPORT
import Style from "./collection.module.css";
import images from "../../../public/img";
import {
  Banner,
  CollectionProfile,
  NFTCardTwo,
} from "../../collectionPage/collectionIndex";
import { Slider, Brand } from "../../components/component.index";
import Filter from "../../components/filter/Filter";

const collection = () => {
  const collectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
  ];
  return (
    <div className={Style.collection}>
      <CollectionProfile />
      <Filter />
      <NFTCardTwo NFTData={collectionArray} />

      <Slider />
     
    </div>
  );
};

export default collection;