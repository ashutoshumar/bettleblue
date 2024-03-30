"use client"
import React from "react";

//INTRNAL IMPORT
import Style from "./search.module.css";
import { Slider, Brand } from "../../components/component.index";
import { SearchBar } from "../../searchPage/searchBarIndex";
import { Filter } from "../../components/component.index";

import { NFTCardTwo, Banner } from "../../collectionPage/collectionIndex";
import images from "../../../public/img";

const searchPage = () => {
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
    <div className={Style.searchPage}>
      <Banner bannerImage={images.creatorbackground2} />
      <SearchBar />
      <Filter />
      <NFTCardTwo NFTData={collectionArray} />
      <Slider />
      <Brand />
    </div>
  );
};

export default searchPage;