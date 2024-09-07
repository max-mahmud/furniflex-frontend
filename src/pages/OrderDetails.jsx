import Header from "../components/Header";
import { useCart } from "../context/CartContext";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { LuInfo } from "react-icons/lu";
import Footer from "../components/Footer";

export default function OrderDetails() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
// Helper function to calculate total price
const calculateTotalPrice = () => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
};
  return (
    <div className="rounded-[24px] bg-[#FFFFFF] flex flex-col items-center w-[1440px] box-sizing-border">
      <Header />
      <div className="m-[0_120px_90px_120px] flex flex-row w-[fit-content] box-sizing-border">
        <div className="m-[0_80px_0_0] flex flex-col box-sizing-border">
          <div className="m-[0_8px_40px_8px] flex self-start box-sizing-border">
            <span className="break-words font-['Barlow'] font-semibold text-[28px] text-[#1E1E1E]">
            An overview of your order
            </span>
          </div>
          <div className={` ${cartItems.length === 0 ? "" : "p-[24px_24px_24px_24px]"} rounded-[12px] bg-[#FAFAFA] flex flex-col items-center  w-[740px] box-sizing-border`}>
            
            {cartItems.map((item, index) => (
              <div key={item.id}>
                <div className="bg-[#ECECEC] m-[0_0_23px_0] w-[692px] h-[0px]"></div>
                <div className="m-[0_0.6px_24px_0] flex flex-col items-center w-[692px] box-sizing-border">
                  <div className="m-[0_5.4px_8px_0] flex flex-row justify-between w-[692px] box-sizing-border">
                    <div className="flex flex-row  box-sizing-border">
                      <div className="rounded-[6px] border border-[#DEDEDE] m-[22px_12px_22px_0] flex flex-row gap-1 items-center p-[9px_9.7px_9px_9.7px] box-sizing-border">
                        <button onClick={() => decreaseQuantity(item.id)}><AiOutlineMinus className="text-gray-400" /></button>
                        <span className="m-[0_11.6px_0_0] break-words font-['Barlow'] font-semibold text-[20px] text-[#0E0E0E]">
                          {item.quantity}
                        </span>
                        <button onClick={() => increaseQuantity(item.id)}><BsPlusLg  className="text-gray-400"/></button>
                      </div>
                      <div className="flex flex-row box-sizing-border">
                        <div className="rounded-[8px] border-[1px_solid_#DEDEDE] bg-[#EAEAEA] m-[0_16px_0_0] flex w-[88px] h-[88px] box-sizing-border">
                          <div
                            className="bg-[50%_50%] bg-cover bg-no-repeat w-[88px] h-[88px]"
                            style={{
                              backgroundImage: `url(${item.image})`,
                            }}
                          ></div>
                        </div>
                        <div className="m-[8px_0_61px_0] flex box-sizing-border">
                          <span className="break-words font-['Barlow'] font-bold text-[16px] text-[#434343]">
                            {item.name}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="m-[6px_0_70px_0] flex  w-[24px] h-[24px] box-sizing-border">
                      <button onClick={() => removeFromCart(item.id)}><RxCross1 className="text-gray-400" /></button>
                    </div>
                  </div>
                  <div className="flex flex-row justify-end w-[692px] box-sizing-border">
                    {/* <span className="m-[0_12px_0_0] w-[275px] break-words">
                      {item.description}
                    </span> */}
                    <span className="break-words font-['Barlow'] font-semibold text-[20px] text-[#0E0E0E]">
                      €{item.price}
                    </span>
                  </div>
                </div>
                {
                  index !== cartItems.length - 1 && <div className="bg-[#ECECEC] m-[0_0_23px_0] w-[692px] h-[1px]"></div>
                }
              </div>
              
            ))}
            
          </div>
        </div>
        <div className="m-[8px_0_539px_0] flex flex-col items-center box-sizing-border">
          <div className="m-[0_0_24px_0] flex flex-col w-[fit-content] box-sizing-border">
            <div className="m-[0_8px_40px_8px] flex self-start box-sizing-border">
              <span className="break-words font-['Barlow'] font-semibold text-[28px] text-[#1E1E1E]">
              Oder details
              </span>
            </div>
            <div className="rounded-[12px] border-[1px_solid_#DEDEDE] bg-[#FAFAFA] flex flex-col items-center p-[23px_23px_23px_23px] w-[380px] box-sizing-border">
              <div className="m-[0_8.3px_20px_0] flex flex-col items-center w-[332px] box-sizing-border">
                <div className="m-[0_0.4px_12px_0] flex flex-row justify-between w-[332px] box-sizing-border">
                  <span className="m-[0_12px_0_0] w-[178px] break-words font-['Barlow'] font-normal text-[20px] text-[#656565]">
                  Subtotal
                  </span>
                  <div className="flex box-sizing-border">
                    <span className="break-words font-['Barlow'] font-medium text-[20px] text-[#656565]">
                    € {calculateTotalPrice()}
                    </span>
                  </div>
                </div>
                <div className="m-[0_0.1px_12px_0] flex flex-row justify-between w-[332px] box-sizing-border">
                  <span className="m-[0_12px_0_0] w-[178px] break-words font-['Barlow'] font-normal text-[20px] text-[#656565]">
                  Shipping
                  </span>
                  <div className="flex box-sizing-border">
                    <span className="break-words font-['Barlow'] font-medium text-[20px] text-[#656565]">
                    Free
                    </span>
                  </div>
                </div>
                <div className="flex flex-row justify-between w-[332px] box-sizing-border">
                  <div className="flex flex-row items-center box-sizing-border">
                    <span className="m-[0_8.8px_0_0] break-words font-['Barlow'] font-normal text-[20px] text-[#656565]">
                    Estimated Tax
                    </span>
                    <LuInfo size={17} className="text-gray-400 "/>
                  </div>
                  <div className="flex box-sizing-border">
                    <span className="break-words font-['Barlow'] font-medium text-[20px] text-[#656565]">
                    € -
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-[#ECECEC] m-[0_0_19px_0] w-[332px] h-[0px]">
              </div>
              <div className="m-[0_0.4px_0_0] flex flex-row justify-between w-[332px] box-sizing-border">
                <span className="m-[0_14.5px_0_0] w-[178px] break-words font-['Barlow'] font-semibold text-[24px] text-[#656565]">
                Total
                </span>
                <span className="break-words font-['Barlow'] font-semibold text-[24px] text-[#0E0E0E]">
                € {calculateTotalPrice()}
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-[380px] box-sizing-border">
            <div className="rounded-[5px]  bg-[#000000] flex justify-center p-[19.5px_0_19.5px_0] w-[380px] h-[fit-content] box-sizing-border">
              <span className="break-words  font-['Barlow'] font-medium text-[17px] leading-[1] uppercase text-[#FFFFFF]">
              Go to Checkout
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}