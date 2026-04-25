import React from 'react';
import { useCart } from '../context/CartContext';
import { X, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartSidebar = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, cartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20" onClick={onClose} />
      
      {/* Sidebar Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-[417px] bg-white shadow-xl flex flex-col p-8">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-semibold border-b-2 border-[#D9D9D9] pb-4 pr-20">Shopping Cart</h2>
          <ShoppingBag className="text-[#9F9F9F] cursor-pointer" onClick={onClose} />
        </div>

        {/* Scrollable Items List */}
        <div className="flex-grow overflow-y-auto space-y-6">
          {cartItems.length === 0 ? (
            <p className="text-center text-[#9F9F9F] py-10">Your cart is empty.</p>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="flex items-center gap-4">
                <div className="w-24 h-24 bg-[#F9F1E7] rounded-lg flex items-center justify-center p-2">
                  <img src={item.image} alt={item.name} className="max-h-full" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-medium text-black">{item.name}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-sm">{item.quantity}</span>
                    <span className="text-xs">x</span>
                    <span className="text-[#B88E2F] text-xs font-medium">Rs. {item.price}</span>
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="bg-[#9F9F9F] text-white rounded-full p-1 hover:bg-red-500"
                >
                  <X size={12} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Bottom Section */}
        <div className="mt-auto border-t pt-6">
          <div className="flex justify-between items-center mb-8">
            <span className="font-normal text-black">Subtotal</span>
            <span className="text-[#B88E2F] font-semibold">Rs. {cartTotal.toLocaleString()}</span>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            <Link to="/cart" className="py-2 border border-black rounded-full text-center text-xs hover:bg-black hover:text-white">Cart</Link>
            <Link to="/checkout" className="py-2 border border-black rounded-full text-center text-xs hover:bg-black hover:text-white">Checkout</Link>
            <Link to="/comparison" className="py-2 border border-black rounded-full text-center text-xs hover:bg-black hover:text-white">Comparison</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;