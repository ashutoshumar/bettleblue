"use client"
import React,{useState,useEffect, useContext, createContext,ReactNode} from 'react'
import web3modal from 'web3modal'
import {ethers} from 'ethers'
import Router from 'next/router'

import { NftMarketplaceAddress,NftMarketplaceABI } from './constant'

type Props = {
  children: ReactNode;
};
 export const NftMarketplaceContext =  createContext("authContextDefaultValues")

 

export function NftMarketplaceProvider({ children }: Props) {
 
  return (
  
          <NftMarketplaceContext.Provider value={"value"}>
              {children}
          </NftMarketplaceContext.Provider>
     
  );
}
