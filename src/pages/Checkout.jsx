import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, cartTotal } = useCart();

  return (
    <div className="w-full font-poppins">
      {/* Banner */}
      <div className="relative h-72 bg-[url('/cart-banner.png')] bg-cover bg-center flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center">
          <img src="/logo.png" alt="logo" className="mx-auto mb-2 w-12" />
          <h1 className="text-5xl font-medium">Checkout</h1>
          <p className="mt-4"><span className="font-bold">Home</span> {'>'} Checkout</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-20 px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side: Billing Details Form */}
        <div className="space-y-8">
          <h2 className="text-4xl font-semibold mb-10">Billing details</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-medium">First Name</label>
              <input type="text" className="border border-[#9F9F9F] rounded-lg h-14 px-4 focus:outline-[#B88E2F]" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium">Last Name</label>
              <input type="text" className="border border-[#9F9F9F] rounded-lg h-14 px-4 focus:outline-[#B88E2F]" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-medium">Company Name (Optional)</label>
              <input type="text" className="border border-[#9F9F9F] rounded-lg h-14 px-4 focus:outline-[#B88E2F]" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-medium">Country / Region</label>
              <select className="border border-[#9F9F9F] rounded-lg h-14 px-4 focus:outline-[#B88E2F] text-[#9F9F9F]">
                <option>Sri Lanka</option>
                <option>Indonesia</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-medium">Street address</label>
              <input type="text" className="border border-[#9F9F9F] rounded-lg h-14 px-4 focus:outline-[#B88E2F]" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-medium">Town / City</label>
              <input type="text" className="border border-[#9F9F9F] rounded-lg h-14 px-4 focus:outline-[#B88E2F]" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-medium">Province</label>
              <input type="text" className="border border-[#9F9F9F] rounded-lg h-14 px-4 focus:outline-[#B88E2F]" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-medium">ZIP code</label>
              <input type="text" className="border border-[#9F9F9F] rounded-lg h-14 px-4 focus:outline-[#B88E2F]" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-medium">Phone</label>
              <input type="tel" className="border border-[#9F9F9F] rounded-lg h-14 px-4 focus:outline-[#B88E2F]" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-medium">Email address</label>
              <input type="email" className="border border-[#9F9F9F] rounded-lg h-14 px-4 focus:outline-[#B88E2F]" />
            </div>
            <div className="md:col-span-2 mt-4">
              <input type="text" placeholder="Additional information" className="border border-[#9F9F9F] rounded-lg h-14 px-4 w-full focus:outline-[#B88E2F]" />
            </div>
          </form>
        </div>

        {/* Right Side: Order Summary */}
        <div className="py-4">
          <div className="flex justify-between border-b pb-4 mb-6">
            <h3 className="text-2xl font-medium">Product</h3>
            <h3 className="text-2xl font-medium">Subtotal</h3>
          </div>

          <div className="space-y-4 mb-8">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <p className="text-[#9F9F9F]">
                  <span className="text-black">{item.name}</span> x {item.quantity}
                </p>
                <p className="font-light">Rs. {(parseFloat(item.price.replace(/,/g, '')) * item.quantity).toLocaleString()}</p>
              </div>
            ))}
            
            <div className="flex justify-between pt-4">
              <span>Subtotal</span>
              <span className="font-light">Rs. {cartTotal.toLocaleString()}</span>
            </div>
            
            <div className="flex justify-between">
              <span>Total</span>
              <span className="text-[#B88E2F] text-2xl font-bold">Rs. {cartTotal.toLocaleString()}</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="space-y-4 border-t pt-8">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-black rounded-full"></div>
              <span className="font-medium">Direct Bank Transfer</span>
            </div>
            <p className="text-[#9F9F9F] text-sm text-justify">
              Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
            </p>
            
            <div className="flex items-center gap-3 text-[#9F9F9F]">
              <div className="w-3 h-3 border border-[#9F9F9F] rounded-full"></div>
              <span>Cash On Delivery</span>
            </div>

            <p className="text-xs text-justify mt-6">
              Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-bold">privacy policy.</span>
            </p>

            <div className="flex justify-center pt-8">
              <button className="w-full md:w-80 py-4 border border-black rounded-xl text-xl hover:bg-black hover:text-white transition-all">
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="bg-[#FAF3EA] py-24 px-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex items-center gap-4">
          <img src="/f1.png" alt="High Quality" className="w-12" />
          <div><h4 className="text-2xl font-semibold">High Quality</h4><p className="text-[#898989]">crafted from top materials</p></div>
        </div>
        <div className="flex items-center gap-4">
          <img src="/f2.png" alt="Warranty" className="w-12" />
          <div><h4 className="text-2xl font-semibold">Warranty Protection</h4><p className="text-[#898989]">Over 2 years</p></div>
        </div>
        <div className="flex items-center gap-4">
          <img src="/f3.png" alt="Free Shipping" className="w-12" />
          <div><h4 className="text-2xl font-semibold">Free Shipping</h4><p className="text-[#898989]">Order over 150 $</p></div>
        </div>
        <div className="flex items-center gap-4">
          <img src="/f4.png" alt="Support" className="w-12" />
          <div><h4 className="text-2xl font-semibold">24 / 7 Support</h4><p className="text-[#898989]">Dedicated support</p></div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;