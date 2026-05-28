import React, { useState } from 'react'; // Added useState
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, cartTotal } = useCart();
  const navigate = useNavigate();
  
  // New state to track selected payment method
  const [paymentMethod, setPaymentMethod] = useState('bank');

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // In a real app, you'd save the form data and the paymentMethod here
    navigate('/success');
  };

  return (
    <div className="w-full font-poppins">
      {/* Banner */}
      <div className="relative h-72 bg-[url('/cart-banner.png')] bg-cover bg-center flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-white/30 backdrop-[2px]"></div>
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
          <form id="checkout-form" onSubmit={handlePlaceOrder} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-medium">First Name</label>
              <input required type="text" className="border border-[#9F9F9F] rounded-lg h-14 px-4 focus:outline-[#B88E2F]" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium">Last Name</label>
              <input required type="text" className="border border-[#9F9F9F] rounded-lg h-14 px-4 focus:outline-[#B88E2F]" />
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
              <input required type="text" className="border border-[#9F9F9F] rounded-lg h-14 px-4 focus:outline-[#B88E2F]" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-medium">Town / City</label>
              <input required type="text" className="border border-[#9F9F9F] rounded-lg h-14 px-4 focus:outline-[#B88E2F]" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-medium">Province</label>
              <input required type="text" className="border border-[#9F9F9F] rounded-lg h-14 px-4 focus:outline-[#B88E2F]" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-medium">ZIP code</label>
              <input required type="text" className="border border-[#9F9F9F] rounded-lg h-14 px-4 focus:outline-[#B88E2F]" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-medium">Phone</label>
              <input required type="tel" className="border border-[#9F9F9F] rounded-lg h-14 px-4 focus:outline-[#B88E2F]" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-medium">Email address</label>
              <input required type="email" className="border border-[#9F9F9F] rounded-lg h-14 px-4 focus:outline-[#B88E2F]" />
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
                <p className="font-light">
                  Rs. {(parseFloat(String(item.price).replace(/,/g, '')) * item.quantity).toLocaleString()}
                </p>
              </div>
            ))}
            
            <div className="flex justify-between pt-4 border-t">
              <span>Subtotal</span>
              <span className="font-light">Rs. {cartTotal.toLocaleString()}</span>
            </div>
            
            <div className="flex justify-between">
              <span>Total</span>
              <span className="text-[#B88E2F] text-2xl font-bold">Rs. {cartTotal.toLocaleString()}</span>
            </div>
          </div>

          {/* Dynamic Payment Methods */}
          <div className="space-y-4 border-t pt-8">
            
            {/* 1. Direct Bank Transfer */}
            <div className="space-y-2">
              <div className="flex items-center gap-3 cursor-pointer" onClick={() => setPaymentMethod('bank')}>
                <div className={`w-3 h-3 rounded-full ${paymentMethod === 'bank' ? 'bg-black' : 'border border-[#9F9F9F]'}`}></div>
                <span className={`font-medium ${paymentMethod === 'bank' ? 'text-black' : 'text-[#9F9F9F]'}`}>Direct Bank Transfer</span>
              </div>
              {paymentMethod === 'bank' && (
                <p className="text-[#9F9F9F] text-sm text-justify pl-6">
                  Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                </p>
              )}
            </div>
            
            {/* 2. Card Payment */}
            <div className="space-y-2">
              <div className="flex items-center gap-3 cursor-pointer" onClick={() => setPaymentMethod('card')}>
                <div className={`w-3 h-3 rounded-full ${paymentMethod === 'card' ? 'bg-black' : 'border border-[#9F9F9F]'}`}></div>
                <span className={`font-medium ${paymentMethod === 'card' ? 'text-black' : 'text-[#9F9F9F]'}`}>Credit / Debit Card</span>
              </div>
              {paymentMethod === 'card' && (
                <div className="pl-6 space-y-3 pt-2">
                  <input type="text" placeholder="Card Number" className="w-full border border-[#9F9F9F] rounded-lg h-12 px-4 focus:outline-[#B88E2F]" />
                  <div className="flex gap-4">
                    <input type="text" placeholder="MM/YY" className="w-1/2 border border-[#9F9F9F] rounded-lg h-12 px-4 focus:outline-[#B88E2F]" />
                    <input type="text" placeholder="CVV" className="w-1/2 border border-[#9F9F9F] rounded-lg h-12 px-4 focus:outline-[#B88E2F]" />
                  </div>
                </div>
              )}
            </div>

            {/* 3. Cash On Delivery */}
            <div className="flex items-center gap-3 cursor-pointer text-[#9F9F9F]" onClick={() => setPaymentMethod('cod')}>
              <div className={`w-3 h-3 rounded-full ${paymentMethod === 'cod' ? 'bg-black' : 'border border-[#9F9F9F]'}`}></div>
              <span className={paymentMethod === 'cod' ? 'text-black font-medium' : ''}>Cash On Delivery</span>
            </div>

            {/* 4. Koko / Installments */}
            <div className="flex items-center justify-between cursor-pointer text-[#9F9F9F]" onClick={() => setPaymentMethod('koko')}>
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${paymentMethod === 'koko' ? 'bg-black' : 'border border-[#9F9F9F]'}`}></div>
                <span className={paymentMethod === 'koko' ? 'text-black font-medium' : ''}>Installments by Koko</span>
              </div>
              <span className="text-[10px] bg-blue-100 text-blue-600 px-2 py-1 rounded">3 Months 0%</span>
            </div>

            <p className="text-xs text-justify mt-6 leading-relaxed">
              Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-bold">privacy policy.</span>
            </p>

            <div className="flex justify-center pt-8">
              <button 
                type="submit"
                form="checkout-form"
                className="w-full md:w-80 py-4 border border-black rounded-xl text-xl hover:bg-black hover:text-white transition-all"
              >
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