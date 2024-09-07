import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import google from '../assets/google.png'
import apple from '../assets/apple.png'
import furniflex from '../assets/FurniFlex.png'
import icon from '../assets/icon.png'
export default function SignUp() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  // Context for authentication
  const { handleSignup , isAuthenticated} = useAuth(); 
  const navigate = useNavigate();

   // Handle form change
   const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreeToTerms) {
      alert('You must agree to the terms and conditions');
      return;
    }
    try {
      // Sign up the user (you can integrate your own API or Firebase logic here)
      await handleSignup(formData.email, formData.password, formData.firstName, formData.lastName);
      alert('Sign up successful');
      navigate('/login');
    } catch (error) {
      alert('Failed to sign up: ' + error.message);
    }
  };

  useEffect(() => {
    if (isAuthenticated) { // Call the isAuthenticated function
      navigate('/'); // Use navigate to redirect
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="bg-[#FFFFFF] flex flex-row p-[0_0_0_126px] w-[1440px] box-sizing-border">
      <div className="relative m-[203px_126px_202px_0] w-[500px] h-[618px]">
        <form onSubmit={handleSubmit} className="rounded-[8px] border border-[#F5F5F5] bg-[#FAFAFA] absolute left-[0px] top-[0px] right-[0px] bottom-[0px] flex flex-col items-center p-[25.5px_23px_40.7px_23px] h-[100%] box-sizing-border">
          <div className="m-[0_0_14px_0] flex flex-col items-center w-[fit-content] box-sizing-border">
            <div className="m-[0_0.1px_23.5px_0] flex flex-col items-center w-[fit-content] box-sizing-border">
              <div className="m-[0_0_6px_0.1px] inline-block break-words font-['Barlow'] font-semibold text-[24px] text-[#000000]">
                Welcome To
              </div>
              <div className="flex flex-col items-center w-[fit-content] box-sizing-border ">
              <img src={furniflex} alt="logo" />
                {/* <p className="m-[0_0_2px_0.1px] break-words font-['Barlow'] font-bold text-[32px] text-[#4977EE]">
                 
                </p> */}
                <div className="flex box-sizing-border mt-3">
                  <span className="break-words font-['Barlow'] font-medium text-[16px] text-[#707070]">
                    Signup for purchase your desire products
                  </span>
                </div>
              </div>
            </div>
             {/* First and Last Name */}
             <div className="m-[0_0_14px_0] flex flex-row w-[fit-content] box-sizing-border">
              <div className="m-[0_14px_0_0] w-[219px] box-sizing-border">
                <div className="rounded-[5px] border border-[#DEDEDE] bg-[#FFFFFF] flex flex-col p-[7px_0_5px_10px] box-sizing-border">
                  <div className="m-[0_0_2px_0] flex self-start box-sizing-border">
                    <span className="break-words font-['Barlow'] font-normal text-[12px] leading-[1.28] text-[#707070]">
                      First name (optional)
                    </span>
                  </div>
                  <div className="flex self-start box-sizing-border">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="break-words font-['Barlow'] font-normal text-[14px] leading-[1.5] text-[#000000] w-full"
                      placeholder="Jordan"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[219px] box-sizing-border">
                <div className="rounded-[5px] border border-[#DEDEDE] bg-[#FFFFFF] flex flex-col p-[7px_0_5px_10px] box-sizing-border">
                  <div className="m-[0_0_2px_0] flex self-start box-sizing-border">
                    <span className="break-words font-['Barlow'] font-normal text-[12px] leading-[1.28] text-[#707070]">
                      Last name (optional)
                    </span>
                  </div>
                  <div className="flex self-start box-sizing-border">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="break-words font-['Barlow'] font-normal text-[14px] leading-[1.5] text-[#000000] w-full"
                      placeholder="Ken"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="m-[0_0_14px_0] flex box-sizing-border">
              <div className="rounded-[5px] border border-[#DEDEDE] bg-[#FFFFFF] flex flex-col p-[10px_10px_5px_10px] box-sizing-border">
                <div className="relative m-[0_0_2px_0] w-[430px] h-[12px]">
                  <span className="absolute left-[0px] top-[-3px] break-words font-['Barlow'] font-normal text-[12px] leading-[1.28] text-[#707070]">
                    Email address
                  </span>
                </div>
                <div className="flex self-start box-sizing-border">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="break-words font-['Barlow'] font-normal text-[14px] leading-[1.5] text-[#000000] w-full"
                    placeholder="jordan@email.com"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Password */}
            <div className="rounded-[5px] relative border border-[#DEDEDE] bg-[#FFFFFF] flex flex-row justify-between p-[7px_10px_5px_10px] w-[452px] box-sizing-border">
              <div className="flex flex-col items-center box-sizing-border">
                <div className="m-[0_0_2px_0] flex self-start box-sizing-border">
                  <span className="break-words font-['Barlow'] font-normal text-[12px] leading-[1.28] text-[#707070]">
                    Password
                  </span>
                </div>
                <div className="m-[0_0px_0_0] flex box-sizing-border">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="break-words font-['Barlow'] font-normal text-[14px] leading-[1.5] text-[#000000] w-full"
                    placeholder="*********"
                    required
                  />
                </div>
                <div onClick={() => setShowPassword(!showPassword)} className="m-[6px_0_8px_0] cursor-pointer  absolute top-2 right-0 w-[46px] h-[52px] box-sizing-border">
                  {
                    !showPassword
                    ? <MdVisibilityOff  className='w-[26px] h-[26px] text-gray-500' />
                    : <MdVisibility  className='w-[26px] h-[26px] text-gray-500' />
                  }

                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col w-[fit-content] box-sizing-border">
            <div className="rounded-[2px] m-[0_0_20px_0] flex flex-row self-start w-[fit-content] box-sizing-border">
              <input
                type="checkbox"
                className="rounded-[2px] border-[1px_solid_#000000] m-[3px_5px_3px_0] w-[13px] h-[13px]"
                checked={agreeToTerms}
                onChange={() => setAgreeToTerms(!agreeToTerms)}
              />
              <p className="break-words font-['Poppins'] font-medium text-[14px] text-[#000000]">
                I agree to the{" "}
                <a href="#" className="underline">
                  Terms & Policy
                </a>
              </p>
            </div>
            <div className="flex flex-col items-center w-[452px] box-sizing-border">
              <div className="m-[0_0_14px_0] flex w-[452px] box-sizing-border">
                <div className="rounded-[6px] bg-[#000000] flex justify-center p-[19.5px_0_19.5px_0] w-[452px] h-[fit-content] box-sizing-border">
                  <button
                    type="submit"
                    className="break-words font-['Barlow'] font-semibold text-[17px] leading-[1] capitalize text-[#FFFFFF]"
                  >
                    Signup
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center w-[452px] box-sizing-border">
                <div className="relative m-[0_16.5px_15.3px_16.5px] flex p-[0_12px_0_0] w-[419px] box-sizing-border">
                  <div className="bg-[#F1F0F0] absolute left-[0px] right-[0px] bottom-[3px] h-[0px]"></div>
                  <div className="bg-[#FAFAFA] relative flex items-center p-[0_4.9px_0_4px] box-sizing-border">
                    <div className='w-[200px] h-[2px] bg-gray-200 mt-[2px]'></div>
                    <span className="break-words font-['Barlow'] font-medium text-[12px] text-[#000000]">
                      or
                    </span>
                    <div className='w-[200px] mt-[2px] h-[2px] bg-gray-200'></div>
                  </div>
                </div>
                <div className="flex flex-col items-center w-[452px] box-sizing-border">
                  <div className="m-[0_0_20px_0] flex flex-row w-[452px] box-sizing-border">
                    <div className="rounded-[6px] border border-[#D9D9D9] m-[0_16px_0_0] flex flex-row items-center justify-center p-[13px_0_13px_0] w-[218px] box-sizing-border">
                      <img src={google} className="m-[0_10px_0_0] w-[24px] h-[24px]" />
                      <div className="m-[5px_0_5px_0] inline-block break-words font-['Barlow'] font-medium text-[12px] text-[#000000]">
                        Sign in with Google
                      </div>
                    </div>
                    <div className="rounded-[6px] border border-[#D9D9D9] justify-center flex flex-row p-[13px_0_14px_0] w-[218px] box-sizing-border">
                      <div className="m-[0_10.7px_0_0] flex w-[24px] h-[24px] box-sizing-border">
                        <img src={apple} className="w-[19.9px] h-[23px]" />
                      </div>
                      <div className="m-[5px_0_4px_0] inline-block break-words font-['Barlow'] font-medium text-[12px] text-[#000000]">
                        Sign in with Apple
                      </div>
                    </div>
                  </div>
                  <div className="m-[0_0.5px_0_0] flex box-sizing-border">
                      <p className="break-words font-['Poppins'] font-medium text-[14px] text-[#000000]">
                        have an account? <Link to="/login" className="text-[#4977EE]">Sign Ip</Link>
                      </p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className=" bg-[url('/src/assets/singUp.png')] relative flex flex-col justify-center items-center w-[688px]">
        <div className="m-[0_0.2px_4px_0] flex flex-col items-center w-[fit-content] box-sizing-border">
          <div className="rounded-[49px] flex items-center justify-center  m-[0_0_6px_0.2px] p-[26px_8px_32px_0] w-[89px] box-sizing-border">
            <img src={icon} className="w-[89px] h-[79px] " />
          </div>
          <p className="break-words font-['Inter'] font-bold text-[40px] -mt-8 text-[#FFFFFF]">
            <span className="furni-flex-sub-44">Furni</span>
            <span className='text-[#1E99F5]'>Flex</span>
          </p>
        </div>
        <div className="flex box-sizing-border  w-[445px]">
          <span className="text-center break-words  font-medium text-[16px] text-[#C8C4C4]">
            Discover a seamless shopping experience with our curated collection
            of products. From fashion to electronics, we bring quality.
          </span>
        </div>
      </div>
    </div>
  );
}
