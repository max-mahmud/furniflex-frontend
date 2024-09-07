import React from 'react'
import icon from "../assets/icon.png"
import facebook from "../assets/facebook-02.png"
import instagram from "../assets/instagram.png"
import twitter from "../assets/new-twitter.png"
import linkedin from "../assets/linkedin-02.png"

const Footer = () => {
  return (
    <div className="bg-[#0E0E0E] flex flex-col items-center p-[80px_120px_32px_120px] w-[1440px] box-sizing-border">
    <div className="m-[0_0.2px_108px_0] flex flex-row justify-between w-[1200px] box-sizing-border">
      <div className="m-[0_0_244px_0] mt-0 pt-0 flex   items-center flex-row box-sizing-border">
        <div className="rounded-[19px]  flex  box-sizing-border">
          <img src={icon} alt="icon" className='w-[38px] h-[38px]'/>
        </div>
        <p className="ml-1.5 break-words  font-bold text-[20px] text-[#FFFFFF]">
        <span className="furni-flex-sub-0">Furni</span>
        <span className='text-[#1E99F5]'>Flex</span>
        </p>
      </div>
      <div className="flex flex-row box-sizing-border">
        <div className="m-[0_121px_0_0] flex flex-col items-center box-sizing-border">
          <div className="m-[0_18.2px_28px_0] inline-block break-words font-['Barlow'] font-semibold text-[18px] text-[#FFFFFF]">
          About US
          </div>
          <div className="flex flex-col w-[fit-content] box-sizing-border">
            <div className="m-[0_0_12px_0] inline-block break-words font-['Barlow'] font-semibold text-[18px] text-[#81859F]">
            Master Plan
            </div>
            <div className="m-[0_0_12px_0] inline-block self-start break-words font-['Barlow'] font-semibold text-[18px] text-[#81859F]">
            Jobs
            </div>
            <div className="m-[0_0_12px_0] inline-block self-start break-words font-['Barlow'] font-semibold text-[18px] text-[#81859F]">
            Invest
            </div>
            <div className="m-[0_6px_12px_0] inline-block break-words font-['Barlow'] font-semibold text-[18px] text-[#81859F]">
            Pressroom
            </div>
            <div className="m-[0_0_12px_0] inline-block self-start break-words font-['Barlow'] font-semibold text-[18px] text-[#81859F]">
            Blog
            </div>
            <span className="self-start break-words font-['Barlow'] font-semibold text-[18px] text-[#81859F]">
            Contact
            </span>
          </div>
        </div>
        <div className="m-[0_120.3px_68px_0] flex flex-col box-sizing-border">
          <div className="m-[0_0_28px_0] inline-block self-start break-words font-['Barlow'] font-semibold text-[18px] text-[#FFFFFF]">
          Explore EEVE
          </div>
          <div className="flex flex-col w-[fit-content] box-sizing-border">
            <div className="m-[0_0_12px_0] inline-block break-words font-['Barlow'] font-semibold text-[18px] text-[#81859F]">
            Unlock my Robot Power
            </div>
            <div className="m-[0_0_12px_0] inline-block self-start break-words font-['Barlow'] font-semibold text-[18px] text-[#81859F]">
            Starlight
            </div>
            <div className="m-[0_0_12px_0] inline-block self-start break-words font-['Barlow'] font-semibold text-[18px] text-[#81859F]">
            Robot Platform
            </div>
            <span className="self-start break-words font-['Barlow'] font-semibold text-[18px] text-[#81859F]">
            EEVE Roadmap
            </span>
          </div>
        </div>
        <div className="m-[0_0_102px_0] flex flex-col box-sizing-border">
          <div className="m-[0_0_28px_0] inline-block self-start break-words font-['Barlow'] font-semibold text-[18px] text-[#FFFFFF]">
          Community &amp; Support
          </div>
          <div className="flex flex-col w-[fit-content] box-sizing-border">
            <div className="m-[0_0_12px_0] inline-block self-start break-words font-['Barlow'] font-semibold text-[18px] text-[#81859F]">
            Willow X Community
            </div>
            <div className="m-[0_0_12px_0] inline-block break-words font-['Barlow'] font-semibold text-[18px] text-[#81859F]">
            Developer &amp; Maker Access
            </div>
            <span className="self-start break-words font-['Barlow'] font-semibold text-[18px] text-[#81859F]">
            Special Cases
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center w-[1200px] box-sizing-border">
      <div className="border-t-[1px_solid_#252948] m-[0_0_44px_0] flex flex-row justify-between p-[39px_0.7px_0_4.2px] w-[1200px] box-sizing-border">
        <div className="m-[1px_0_1px_0] flex flex-row w-[114.3px] h-[fit-content] box-sizing-border">
          <div className="m-[1.7px_15.6px_1.7px_0] flex w-[20px] h-[20px] box-sizing-border">
            <img src={facebook} className="w-[11.7px] h-[16.7px]" />
          </div>
          <img src={instagram} className="m-[0_13.9px_0_0] w-[20px] h-[20px]" />
          <div className="m-[2.5px_13.9px_2.5px_0] flex w-[20px] h-[20px] box-sizing-border">
            <img src={twitter} className="w-[15px] h-[15px]" />
          </div>
          <img src={linkedin} className="w-[20px] h-[20px]" />
        </div>
        <div className="flex flex-row justify-between w-[482px] h-[fit-content] box-sizing-border">
          <span className="m-[0_11px_0_0] w-[122px] break-words font-['Barlow'] font-semibold text-[17px] text-[#81859F]">
          March22 Recap
          </span>
          <span className="break-words font-['Barlow'] font-semibold text-[18px] text-[#81859F]">
          Privacy Policy
          </span>
          <span className="break-words font-['Barlow'] font-semibold text-[18px] text-[#81859F]">
          General Terms
          </span>
          <span className="break-words font-['Barlow'] font-semibold text-[18px] text-[#81859F]">
          Contact
          </span>
        </div>
        <div className="relative p-[2px_0_0_0] w-[207px] box-sizing-border">
          <div className="relative flex box-sizing-border">
            <span className="break-words font-['Barlow'] font-semibold text-[18px] text-[#81859F]">
            🇺🇸
            </span>
          </div>
          <span className="absolute top-[0px] right-[0px] break-words font-['Barlow'] font-semibold text-[18px] text-[#81859F]">
          United States (English)
          </span>
        </div>
      </div>
      <span className="m-[0_0_0_2.5px] break-words font-['Barlow'] font-semibold text-[18px] text-[#323544]">
      EEVE © 2024. All rights reserved.
      </span>
    </div>
  </div>
  )
}

export default Footer