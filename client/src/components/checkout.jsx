import React from 'react';
import { CreditCard, Plus } from 'lucide-react';
import PayPalButton from './pyamentbutton';
import PaymentDetails from './paymentdetails';

const CheckoutComponent = () => {
  return (
    <div className="bg-[#c98d83] p-4 ">
      <div className="mx-auto bg-white rounded-lg shadow-xl p-6 ">
        <div className="text-center mb-4 ">
          <h1 className="text-2xl font-bold mr-24">Frozen-Cookie</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-1 ">
          <div className="flex-grow">
            <div className="mb-6 ">
              
              <div className="flex gap-3 justify-center ">
                
             
               
      <button className='px-1 py-1 ' >

      
      </button>
               
                
              </div>
               
            </div>

            <div className="border-t border-gray-200 pt-6 ml-28">
              <h2 className="text-lg font-semibold mb-4">Shippment Information</h2>
              <input type="email" placeholder="Email" className="w-[700px] border border-gray-300 rounded px-3 py-2 mb-4" />
              <label className="flex items-center mb-4">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Send me email and transaction SMS updates about my order. Msg & data rates may apply.</span>
              </label>
            </div>

            <div className="mb-6 ml-28 w-[700px]">
              <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
              <select className="w-full border border-gray-300 rounded px-3 py-2 mb-4">
                <option>Amman</option>
                <option>AL-Zarqa</option>
                <option>Homs</option>
              </select>
              <div className="grid grid-cols-2 gap-4 mb-4 ">
                <input type="text" placeholder="First Name" className="border border-gray-300 rounded px-3 py-2" />
                <input type="text" placeholder="Last Name" className="border border-gray-300 rounded px-3 py-2" />
              </div>
              <input type="text" placeholder="Company (Optional)" className="w-full border border-gray-300 rounded px-3 py-2 mb-4" />
              <input type="text" placeholder="Address" className="w-full border border-gray-300 rounded px-3 py-2 mb-4" />
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="City" className="border border-gray-300 rounded px-3 py-2" />
                <input type="text" placeholder="Postal Code (Optional)" className="border border-gray-300 rounded px-3 py-2" />
              </div>
              <input type="text" placeholder="Phone" className="w-full border border-gray-300 rounded px-3 py-2 mb-4" />
            </div>
<div className='ml-28' >

           <PaymentDetails/>

</div>

            <button className="ml-32 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full w-[300px] border-black outline hover:bg-amber-300 hover:scale-95">
              Pay Now
            </button>
          </div>

          <div className="w-full md:w-1/3">
            <div className="bg-pink-100 p-6 rounded">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="flex items-center mb-4">
                <img src="https://highkey.com/cdn/shop/products/Large_PNG-MC-CCHIP-2_25oz-051021-AMZ-PDP-3pack-Keto_1_1024x1024.png?v=1658768319" alt="Vegan Double Chocolate Cookie Dough" className="w-16 h-16 object-cover rounded mr-4" />
                <div>
                  <div className="font-semibold">Vegan Double Chocolate Cookie Dough</div>
                  <div className="text-sm text-gray-600">$12.99</div>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <img src="https://www.proteincookiebutter.com/cdn/shop/products/9bac75c2-533a-59ce-a373-626e3de0b2e0_x265@2x.png?v=1604347618" alt="Vegan Peanut Butter Cookie Dough" className="w-16 h-16 object-cover rounded mr-4" />
                <div>
                  <div className="font-semibold">Vegan Peanut Butter Cookie Dough</div>
                  <div className="text-sm text-gray-600">$22.10</div>
                </div>
              </div>
              <div className="flex mb-4">
                <input type="text" placeholder="Discount Code" className="flex-grow border border-gray-300 rounded-l px-3 py-2" />
                <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-r hover:bg-yellow-300">Apply</button>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>$35.09</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>$10.99</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Tax</span>
                  <span>$6.99</span>
                </div>
                <div className="flex justify-between font-semibold text-lg mt-4">
                  <span>Total</span>
                  <span>$53.07</span>
                </div>
              </div>
            </div>
            <button className="mt-4 text-pink-800 font-semibold hover:text-pink-500">&lt; Return to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutComponent;