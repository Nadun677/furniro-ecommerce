import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="w-full font-poppins">
      {/* Banner */}
      <div className="relative h-72 bg-[url('/cart-banner.png')] bg-cover bg-center flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center">
          <img src="/logo.png" alt="logo" className="mx-auto mb-2 w-12" />
          <h1 className="text-5xl font-medium">Contact</h1>
          <p className="mt-4"><span className="font-bold">Home</span> {'>'} Contact</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-20 px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-semibold mb-4">Get In Touch With Us</h2>
          <p className="text-[#9F9F9F] max-w-2xl mx-auto">
            For More Information About Our Product & Services, Please Feel Free To Drop Us An Email. 
            Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-10 pl-0 md:pl-20">
            <div className="flex gap-6">
              <MapPin className="text-black" fill="currentColor" size={28} />
              <div>
                <h4 className="text-2xl font-medium">Address</h4>
                <p className="text-black max-w-[200px]">Peradeniya Road, Kandy, Sri Lanka</p>
              </div>
            </div>
            <div className="flex gap-6">
              <Phone className="text-black" fill="currentColor" size={28} />
              <div>
                <h4 className="text-2xl font-medium">Phone</h4>
                <p className="text-black">Mobile: +(94) 77 123 4567</p>
                <p className="text-black">Hotline: +(94) 81 234 5678</p>
              </div>
            </div>
            <div className="flex gap-6">
              <Clock className="text-black" fill="currentColor" size={28} />
              <div>
                <h4 className="text-2xl font-medium">Working Time</h4>
                <p className="text-black">Monday-Friday: 9:00 - 22:00</p>
                <p className="text-black">Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-8">
            <div className="flex flex-col gap-3">
              <label className="font-medium">Your name</label>
              <input type="text" placeholder="Abc" className="border border-[#9F9F9F] rounded-lg h-16 px-6 focus:outline-[#B88E2F]" />
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-medium">Email address</label>
              <input type="email" placeholder="Abc@def.com" className="border border-[#9F9F9F] rounded-lg h-16 px-6 focus:outline-[#B88E2F]" />
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-medium">Subject</label>
              <input type="text" placeholder="This is an optional" className="border border-[#9F9F9F] rounded-lg h-16 px-6 focus:outline-[#B88E2F]" />
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-medium">Message</label>
              <textarea placeholder="Hi! I’d like to ask about..." className="border border-[#9F9F9F] rounded-lg h-32 p-6 focus:outline-[#B88E2F] resize-none" />
            </div>
            <button className="bg-[#B88E2F] text-white px-20 py-4 rounded-md hover:bg-black transition-all">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Map Integration */}
      <div className="w-full h-[450px] mt-20 bg-gray-200">
        <iframe 
          title="Kandy Store Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63320.4402377317!2d80.58988675647558!3d7.29057177579123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3662d0577789d%3A0x6331a9807fa7a7b8!2sKandy!5e0!3m2!1sen!2slk!4v1714392000000!5m2!1sen!2slk" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </div>

      {/* Features Bar */}
      <div className="bg-[#FAF3EA] py-24 px-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* ... (Reuse your standard 4 features here) ... */}
      </div>
    </div>
  );
};

export default Contact;