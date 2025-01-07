import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { useStateValues } from '../Utils/Provider';



const CardItem = ({ item, handleData }) => {

       const [{ cartData }, dispatch] = useStateValues();
       let [quantity, setQuantity] = useState(1);

       useEffect((() => {
              item.quantity = 1

       }), [item])

       useEffect((() => {
              handleData();
       }), [quantity, handleData])

       return (
              <div className="w-full grid grid-cols-5 mb-4 border py-2">
                     <div className="flex col-span-5 mdl:col-span-2 items-center gap-4 ml-4">
                            <ImCross
                                   onClick={
                                          () => {
                                                 let i = cartData.indexOf(item)
                                                 cartData.splice(i, 1)

                                                 dispatch({
                                                        type: "SET_CART_DATA",
                                                        cartData: cartData,
                                                 })
                                                 localStorage.setItem("cart", JSON.stringify(cartData));

                                          }}
                                   className="text-primeColor hover:text-red-500 duration-300 cursor-pointer"
                            />
                            <img className="w-32 h-32" src={item.image} alt="productImage" />
                            <div>
                                   <h1 className="text-[1.3rem] font-semibold">{(item.label)}</h1>
                                   <div className="mt-[1rem]">
                                          <p className="border-[1px] my-[1rem] border-gray-400 text-center rounded-full">{item.category}</p>
                                          <p className="border-[1px] hidden md:block border-gray-400 text-center rounded-full">{item.categoryLabel}</p>
                                   </div>
                            </div>
                     </div>
                     <div className="col-span-5 mdl:col-span-3 flex items-center justify-between py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0">
                            <div className="flex w-1/3 items-center text-lg font-semibold">
                                   ${item.nutrients.ENERC_KCAL}
                            </div>


                            <div className="w-1/3 flex items-center gap-6 text-lg">
                                   < span
                                          onClick={() => {
                                                 if ((quantity - 1) > 0) {
                                                        setQuantity(--quantity)
                                                        item.quantity = quantity
                                                 }
                                          }}
                                          className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
                                   >
                                          -
                                   </span>

                                   <p>{quantity}</p>
                                   <span
                                          onClick={() => {
                                                 setQuantity(++quantity)
                                                 item.quantity = quantity
                                          }}
                                          className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
                                   >
                                          +
                                   </span>
                            </div>

                            <div className="w-1/3 flex items-center font-titleFont font-bold text-lg">
                                   <p>${item.quantity * item.nutrients.ENERC_KCAL}</p>
                            </div>
                     </div>
              </div>
       );
};

export default CardItem;