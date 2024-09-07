import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import img1 from "../assets/image125.png";
import img2 from "../assets/image146.png";
import img3 from "../assets/image147.png";
import img4 from "../assets/image148.png";
import img5 from "../assets/image149.png";
import img6 from "../assets/image131.png";
import { useCart } from "../context/CartContext";
import { IoChevronForward } from "react-icons/io5";
import Footer from "../components/Footer";
import addad from "../assets/Added.png";
 
export default function Store() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const img = [img1, img2, img3, img4, img5, img6];
  const { addToCart } = useCart();

  useEffect(() => {
    // Fetch product data from API
     fetch("https://furniflex-backend.onrender.com/api/products").then(res => res.json()).then(data => {
        // Assign images to products
        const productsWithImages = data.map((product, index) => ({
          ...product,
          image: img[index % img.length], // Cycle through images
        }));
       setProducts(productsWithImages);
       setLoading(false);
     })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products: {error.message}</p>;
  return (
    <div className="rounded-[24px] bg-[#FFFFFF] flex flex-col w-[1440px] box-sizing-border">
     <Header />
      <div className="m-[0_120px_96px_120px] flex flex-row self-start w-[fit-content] box-sizing-border">
        <div className="border-r border-[#E8E8E8] m-[0_42px_128px_0] flex flex-col p-[40px_0_771px_0] w-[263px] box-sizing-border">
          <div className="  rounded-[8px] bg-[#0E0E0E] m-[0_0_12px_0] flex self-start p-[12px_51.2px_15px_19px] w-[231px] box-sizing-border">
            <span className="break-words font-['Barlow'] font-semibold text-[22px] text-[#FFFFFF]">
              Rocking chair
            </span>
          </div>
          <div className="bg-[#F4F4F4]  m-[0_0_23px_0] self-start w-[231px] h-[1px]"></div>
          <div className="m-[0_24px_24px_24px] flex self-start box-sizing-border ">
            <span className="break-words font-['Barlow'] font-medium text-[22px] text-[#717171]">
              Side chair
            </span>
          </div>
          <div className="bg-[#F4F4F4] m-[0_0_23px_0] self-start w-[231px] h-[1px]"></div>
          <div className="m-[0_24px_0_24px] flex self-start box-sizing-border">
            <span className="break-words font-['Barlow'] font-medium text-[22px] text-[#717171]">
              Lounge chair
            </span>
          </div>
        </div>
        <div className="flex flex-col items-end box-sizing-border">
          <div className="m-[0_0_64px_0] flex flex-col w-[894px]  box-sizing-border">
            <div className="relative  w-[fit-content] box-sizing-border">
              <div className="relative flex justify-between flex-wrap box-sizing-border gap-6 ">
                {/* map data */}
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="rounded-[16px] border border-[1px_solid_#F1F1F1] m-[0_3px_31px_0] flex flex-col p-[15px] w-[calc(33.33%-20px)] box-sizing-border"
                     // Ensures 3 items per row
                  >
                    <div className="rounded-[8px] bg-[#F2F2F2] flex p-[16px_19.5px_15px_20.5px] w-[245px] h-[236px] box-sizing-border">
                      <div style={{ backgroundImage: `url(${product.image})` }} className=" bg-[50%_50%] bg-cover bg-no-repeat w-[208px] h-[205px]"></div>
                    </div>
                    <div className="m-[10px_8px_32px_8px] flex flex-col items-center self-start w-[fit-content] box-sizing-border">
                      <div className="m-[0_0_16px_0] flex flex-col w-[fit-content] box-sizing-border">
                        <div className="m-[0_0_16px_0] flex self-start box-sizing-border">
                          <span className="break-words mt-2 font-['Barlow'] font-semibold text-[18px] text-[#343434]">
                            {product.name}
                          </span>
                        </div>
                        <div className="m-[0_0_0_0.2px] flex flex-row w-[fit-content] box-sizing-border">
                          <div className="m-[0_12.5px_0_0] flex flex-row box-sizing-border">
                            <span className="m-[0_8.6px_0_0] break-words font-['Barlow'] font-bold text-[18px] text-[#343434]">
                              {product.price}
                            </span>
                            <span className="break-words font-['Barlow'] font-medium text-[18px] line-through text-[#ABABAB]">
                              {product.oldPrice}
                            </span>
                          </div>
                          <span className="break-words font-['Barlow'] font-semibold text-[18px] text-[#B92E2E]">
                            {product.discount}
                          </span>
                        </div>
                      </div>
                      <span className="m-[0_8px_0_0] break-words font-['Barlow'] font-normal text-[14px] text-[#838383]">
                        {String(product.description).slice(0, 30)}
                        
                      </span>
                    </div>
                    <div className="flex w-[245px] box-sizing-border">
                      <div className="rounded-[5px] bg-[#202020] flex flex-row justify-center items-center gap-2 p-[11.5px_0_11.5px_0] w-[245px] h-[fit-content] box-sizing-border">
                        <img src={addad} alt="added" className="w-[16px] h-[16px]" />
                        <button onClick={() => addToCart(product)} className="break-words font-['Barlow'] font-semibold text-[16px] text-[#FFFFFF]">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=" w-full m-[0_3px_0_3px] flex flex-row gap-[0_8px] justify-center box-sizing-border">
            <div className="opacity-50 rounded-[4px] bg-[#DADADA] flex p-[10px_12.8px_10px_11.8px] w-[32px] h-[32px] box-sizing-border">
              <img className="w-[12px] h-[7.4px]" />
            </div>
            <div className="flex box-sizing-border">
              <div className="rounded-[4px] border border-[#0E0E0E] bg-[#FFFFFF] flex p-[4px_12.5px_6px_12.5px] box-sizing-border">
                <span className="break-words font-['Barlow'] font-bold text-[14px] leading-[1.429] text-[#0E0E0E]">
                  1
                </span>
              </div>
            </div>
            <div className="rounded-[4px] border border-[#DFE3E8] bg-[#FFFFFF] flex p-[4px_11.1px_6px_11.1px] box-sizing-border">
              <span className="break-words font-['Barlow'] font-bold text-[14px] leading-[1.429] text-[#212B36]">
                2
              </span>
            </div>
            <div className="rounded-[4px] border border-[#DFE3E8] bg-[#FFFFFF] flex p-[4px_9.3px_6px_9.3px] box-sizing-border">
              <span className="break-words font-['Barlow'] font-bold text-[14px] leading-[1.429] text-[#212B36]">
                ...
              </span>
            </div>
            <div className="rounded-[4px] border border-[#DFE3E8] bg-[#FFFFFF] flex p-[4px_11.3px_6px_11.3px] box-sizing-border">
              <span className="break-words font-['Barlow'] font-bold text-[14px] leading-[1.429] text-[#212B36]">
                9
              </span>
            </div>
            <div className="rounded-[4px] border border-[#DFE3E8] bg-[#FFFFFF] flex p-[4px_8.5px_6px_8.5px] box-sizing-border">
              <span className="break-words font-['Barlow'] font-bold text-[14px] leading-[1.429] text-[#212B36]">
                10
              </span>
            </div>
            <div className="rounded-[4px] border border-[#DFE3E8] bg-[#FFFFFF] p-2 flex w-[32px] h-[32px] box-sizing-border">
              <IoChevronForward className="scale-125 text-gray-300" />
            </div>
          </div>
        </div>
      </div>
      {/* Footer  */}
      <Footer />
    </div>
  );
}
