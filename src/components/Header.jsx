import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png" 
import Account from "../assets/Account.png"
const Header = () => {
  return (
    <div className="border-b-[1px_solid_#F1F1F1] bg-[#FFFFFF] m-[0_0_80px_0] flex flex-row justify-between p-[39px_120px_38px_120px] w-[1440px] box-sizing-border">
      <div className="m-[1px_0_1px_0] flex flex-row box-sizing-border">
        {/* <div className="rounded-[19px] bg-[#1E99F5] m-[0_6px_0_0] flex p-[5.5px_17.3px_5.5px_9.5px] box-sizing-border">
          
        </div> */}
        <Link to="/" className="m-[7px_0_7px_0] break-words font-['Inter'] font-bold text-[20px] text-[#FFFFFF]">
          
        <img src={Logo} className="scale-110" ></img>
        </Link>
      </div>
      <div className="m-[1px_0_1px_0] flex flex-row justify-between w-[535px] h-[fit-content] box-sizing-border">
        <div className="flex flex-row box-sizing-border">
          <div className="rounded-[6px] m-[8px_29px_8px_0] flex box-sizing-border">
            <span className="break-words font-['Barlow'] font-medium text-[18px] text-[#202020]">
              Home
            </span>
          </div>
          <div className="rounded-[6px] bg-[#F8F8F8] m-[0_28px_0_0] p-[8px_20px_8px_20px] w-[113px] box-sizing-border">
            <span className="break-words font-['Barlow'] font-semibold text-[18px] text-[#202020]">
              Products
            </span>
          </div>
          <div className="rounded-[6px] m-[8px_0_8px_0] flex box-sizing-border">
            <span className="break-words font-['Barlow'] font-medium text-[18px] text-[#202020]">
              Categories
            </span>
          </div>
        </div>
        <div className="rounded-[6px] m-[8px_0_8px_0] flex box-sizing-border">
          <span className="break-words font-['Barlow'] font-medium text-[18px] text-[#202020]">
            Custom
          </span>
        </div>
        <div className="rounded-[6px] m-[8px_0_8px_0] flex box-sizing-border">
          <span className="break-words font-['Barlow'] font-medium text-[18px] text-[#202020]">
            Blog
          </span>
        </div>
      </div>
      <div className="flex flex-row box-sizing-border">
        <div className="relative m-[5.7px_24px_3px_0] flex flex-col items-center p-[0_0_0_5.3px] box-sizing-border">
          <img className="absolute left-[0px] top-[7.3px] w-[25.3px] h-[19.3px]" />
          <img className="relative m-[0_9.7px_8px_0] w-[14.7px] h-[7.3px]" />
          <div className="relative m-[0_0_0_8.3px] flex box-sizing-border">
            <div className="rounded-[800px] bg-[#323232] flex p-[0.8px_4.6px_1.2px_5.2px] box-sizing-border">
              <span className="break-words font-['Barlow'] font-medium text-[11.2px] text-[#FFFFFF]">
                2
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-[100px] border border-[#F1F1F1] bg-[50%_50%] bg-cover bg-no-repeat w-[40px] h-[40px]">
          <img src={Account} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Header;
