"use client"
import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {MdNotifications} from "react-icons/md"
import {BsSearch} from "react-icons/bs"
import {CgMenuLeft,CgMenuRight} from "react-icons/cg"

import Style from "./NavBar.module.css";
import { Discover,Sidebar,Notification,HelpCenter,Profile } from './index'
import {Button} from "../component.index"
import images from "../../../public/img"

const Navbar = () => {
  const [discover,setDiscover] = useState(false);
  const [help,setHelp]=useState(false)
  const [notification,setNotification] = useState(false)
  const [profile,setProfile] = useState(false)
  const [openSidebar,setOpenSidebar] = useState(false)

  const openMenu=(e:React.MouseEvent<HTMLElement>) => {
    const input = e.target as HTMLElement;
    const btnText =input.innerText;
    if(btnText=="Discover")
    {
      setDiscover(true)
      setNotification(false)
      setProfile(false)
      setHelp(false)
    }
    else if(btnText=="Help Center")
    {
      setDiscover(false)
      setNotification(false)
      setProfile(false)
      setHelp(true)
    }
    else
    {
      setDiscover(false)
      setNotification(false)
      setProfile(false)
      setHelp(false)
    }
    

  }
  const openNotification = ()=>{
    if(!notification)
    {
      setDiscover(false)
      setNotification(true)
      setProfile(false)
      setHelp(false)
    }else{
      setNotification(false)
    }
  }

  const openProfile = ()=>{
       if(!profile)
       {
        setDiscover(false)
        setNotification(false)
        setProfile(true)
        setHelp(false)
       }
       else{
        setProfile(false)
       }
  }
  const openSideBar = ()=>{
    if(!openSidebar)
    {
      setOpenSidebar(true)
    }
    else
    {
      setOpenSidebar(false)
    }
  }
  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container} >
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image src={images.logoo} alt="blueBeetle" width={150} height={50}/>
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type='text' placeholder='Search NFT'/>
              <BsSearch onClick={()=>{}} className={Style.search_icon} />
            </div>
          </div>
        </div>
        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_discover}>
            <p onClick={(e)=>{openMenu(e)}}>Discover</p>
            {
                discover && (  <div className={Style.navbar_container_right_discover_box}>
                  <Discover/>
                 </div>)
              }
          
          </div>
          <div className={Style.navbar_container_right_help}>
            <p onClick={(e)=>{openMenu(e)}}>Help Center</p>
            {
                help && (  <div className={Style.navbar_container_right_help_box}>
                  <HelpCenter/>
                 </div>)
              }
          
          </div>
          <div className={Style.navbar_container_right_notify}>
            <MdNotifications className={Style.notify} onClick={()=>{openNotification()}} />
            { notification && (  <div >
                  <Notification/>
                 </div>)}
            </div>
            <div className={Style.navbar_container_right_button}>
              <Button btnText="Create" />
            </div>
            <div className={Style.navbar_container_right_profile_box}>
              <div className={Style.navbar_container_right_profile}>
                <Image src={images.user1} alt='user' width={40} height={40} onClick={()=>openProfile()} className={Style.navbar_container_right_profile} />
                {profile && (  <div >
                  <Profile/>
                 </div>)}
              </div>
            </div>
            <div className={Style.navbar_container_right_menuBtn}>
              <CgMenuRight className={Style.menuIcon} onClick={()=>{openSideBar()}}/>
            </div>
        
        </div>
      </div>
      {
        openSidebar && (
          <div className={Style.Sidebar}>
            <Sidebar setOpenSidebar={setOpenSidebar}/>
            </div>
        )
      }
    </div>
  )
}

export default Navbar