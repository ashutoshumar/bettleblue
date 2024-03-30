"use client"
import React from "react";

//INTERNAL IMPORT
import { Button, Category, Brand } from "../../components/component.index";
import NFTDetailsPage from "../../nftDetailPage/NFTDetailsPage";
const NFTDetails = () => {
  return (
    <div>
      <NFTDetailsPage />
      <Category />
      <Brand />
    </div>
  );
};

export default NFTDetails;