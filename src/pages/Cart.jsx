import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';

const Cart = () => {
  const { cartItems, removeFromCart, cartTotal } = useCart();

  return (
    <div className="w-full font-poppins">
      {/* Banner */}
      <div className="relative h-72 bg-[url('/cart-banner.png')] bg-cover bg-center flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center">
          <img src="/logo.png" alt="logo" className="mx-auto mb-2 w-12" />
          <h1 className="text-5xl font-medium">Cart</h1>
          <p className="mt-4"><span className="font-bold">Home</span> {'>'} Cart</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-20 px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Cart Items Table */}
        <div className="lg:col-span-2 overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#F9F1E7] h-14">
              <tr>
                <th className="pl-8">Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {cartItems.map((item) => (
                <tr key={item.id} className="h-32">
                  <td className="flex items-center gap-4 pt-8">
                    <div className="w-24 h-24 bg-[#F9F1E7] rounded-lg p-2">
                      <img src={item.image} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-[#9F9F9F]">{item.name}</span>
                  </td>
                  <td className="text-[#9F9F9F]">Rs. {item.price}</td>
                  <td>
                    <div className="w-8 h-8 border border-[#9F9F9F] rounded flex items-center justify-center">
                      {item.quantity}
                    </div>
                  </td>
                  <td className="text-black">
                    Rs. {(parseFloat(item.price.replace(/,/g, '')) * item.quantity).toLocaleString()}
                  </td>
                  <td>
                    <Trash2 
                      className="text-[#B88E2F] cursor-pointer" 
                      size={20} 
                      onClick={() => removeFromCart(item.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {cartItems.length === 0 && (
            <p className="text-center py-10 text-[#9F9F9F]">Your cart is currently empty.</p>
          )}
        </div>

        {/* Right: Cart Totals */}
        <div className="bg-[#F9F1E7] p-8 h-fit text-center rounded-sm">
          <h2 className="text-3xl font-semibold mb-14">Cart Totals</h2>
          <div className="space-y-6">
            <div className="flex justify-between px-10">
              <span className="font-medium">Subtotal</span>
              <span className="text-[#9F9F9F]">Rs. {cartTotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between px-10">
              <span className="font-medium">Total</span>
              <span className="text-[#B88E2F] text-xl font-semibold">Rs. {cartTotal.toLocaleString()}</span>
            </div>
          </div>
          <Link to="/checkout">
            <button className="mt-12 w-48 py-3 border border-black rounded-xl hover:bg-black hover:text-white transition-all">
              Check Out
            </button>
          </Link>
        </div>
      </div>
      
      {/* Features Bar (High Quality, Warranty, etc.) */}
      <div className="bg-[#FAF3EA] py-24 px-10 grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
        <FeatureItem title="High Quality" desc="crafted from top materials" icon="/f1.png" />
        <FeatureItem title="Warranty Protection" desc="Over 2 years" icon="/f2.png" />
        <FeatureItem title="Free Shipping" desc="Order over 150 $" icon="/f3.png" />
        <FeatureItem title="24 / 7 Support" desc="Dedicated support" icon="/f4.png" />
      </div>
    </div>
  );
};

const FeatureItem = ({ title, desc, icon }) => (
  <div className="flex items-center gap-4">
    <img src={icon} alt={title} className="w-12 h-12" />
    <div>
      <h4 className="text-2xl font-semibold">{title}</h4>
      <p className="text-[#898989]">{desc}</p>
    </div>
  </div>
);

export default Cart;