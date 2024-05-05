"use client"
import React from 'react'
import Link from 'next/link'


import Style from "./Discover.module.css"
const Discover = () => {
  // DISCOVER NAVIGATION MENU
  const discover =[
    {
      name:"Collection",
      link:"collection"
    },
    {
      name:"Search",
      link:"search"
    },
    {
      name:"Author Profile",
      link:"author"
    },
    {
      name: "NFT Details",
      link: "nftdetail",
    },
    {
      name: "Account Setting",
      link: "account",
    },
    {
      name: "Connect Wallet",
      link: "connectwallet",
    },
    {
      name: "Blog",
      link: "blog",
    },
  ]
  return (
    <div>
      {
        discover.map((el,i)=>(
          <div key={i+1} className={Style.discover}>
            <Link href={`/${el.link}`}>
              {el.name}
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default Discover