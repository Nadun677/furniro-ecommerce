import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Printer } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Success = () => {
  const { clearCart } = useCart();

  // Clear the cart when the user lands here or when they leave
  // React.useEffect(() => { clearCart(); }, []);

  return (
    <div className="w-full font-poppins min-h-[80vh] flex flex-col items-center justify-center px-4 py-20">
      
      {/* 1. Success Icon & Header */}
      <div className="text-center space-y-4 mb-10">
        <div className="flex justify-center">
          <CheckCircle size={80} className="text-[#B88E2F] animate-bounce" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold">Thank You for Your Purchase!</h1>
        <p className="text-[#9F9F9F] text-lg">Your order #FRN-2026-9921 has been placed successfully.</p>
      </div>

      {/* 2. Bank Details (For Sri Lankan context) */}
      <div className="max-w-2xl w-full bg-[#FAF3EA] rounded-2xl p-8 border border-[#B88E2F]/20 mb-10">
        <h3 className="text-xl font-semibold mb-6 border-b border-[#B88E2F]/30 pb-2">Direct Bank Transfer Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <p className="text-[#9F9F9F]">Bank Name</p>
            <p className="font-medium">Commercial Bank of Ceylon</p>
          </div>
          <div>
            <p className="text-[#9F9F9F]">Account Name</p>
            <p className="font-medium">Furniro Furniture (Pvt) Ltd</p>
          </div>
          <div>
            <p className="text-[#9F9F9F]">Account Number</p>
            <p className="font-medium">8001234567</p>
          </div>
          <div>
            <p className="text-[#9F9F9F]">Branch</p>
            <p className="font-medium">Kandy Branch</p>
          </div>
        </div>
        <p className="mt-6 text-xs text-[#9F9F9F] italic italic">
          * Please WhatsApp a screenshot of your transfer slip to +(94) 77 123 4567 along with your Order ID.
        </p>
      </div>

      {/* 3. Actions */}
      <div className="flex flex-col md:flex-row gap-4">
        <Link 
          to="/shop" 
          onClick={clearCart}
          className="bg-[#B88E2F] text-white px-10 py-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-black transition-all"
        >
          Continue Shopping <ArrowRight size={20} />
        </Link>
        <button 
          onClick={() => window.print()}
          className="border border-black px-10 py-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-100 transition-all"
        >
          Print Receipt <Printer size={20} />
        </button>
      </div>

      <Link to="/" className="mt-8 text-[#9F9F9F] underline underline-offset-4 hover:text-black">
        Back to Home
      </Link>
    </div>
  );
};

export default Success;