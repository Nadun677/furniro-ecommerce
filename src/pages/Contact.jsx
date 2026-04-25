import React from 'react';
import PageHeader from '../components/PageHeader';
import Services from '../components/Services';
import { MapPin, Phone, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="w-full font-poppins">
      <PageHeader title="Contact" />

      <div className="max-w-7xl mx-auto py-24 px-4">
        {/* Intro Text */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-semibold mb-4">Get In Touch With Us</h2>
          <p className="text-[#9F9F9F]">
            For More Information About Our Product & Service. Please Feel Free To Drop Us
            An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:px-20">
          {/* Left: Contact Info */}
          <div className="space-y-12">
            <div className="flex gap-6">
              <MapPin size={28} fill="black" className="text-white" />
              <div>
                <h4 className="text-2xl font-medium">Address</h4>
                <p className="max-w-[200px]">236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>

            <div className="flex gap-6">
              <Phone size={28} fill="black" className="text-white" />
              <div>
                <h4 className="text-2xl font-medium">Phone</h4>
                <p>Mobile: +(84) 546-6789</p>
                <p>Hotline: +(84) 456-6789</p>
              </div>
            </div>

            <div className="flex gap-6">
              <Clock size={28} fill="black" className="text-white" />
              <div>
                <h4 className="text-2xl font-medium">Working Time</h4>
                <p>Monday-Friday: 9:00 - 22:00</p>
                <p>Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-4">
              <label className="font-medium">Your name</label>
              <input 
                type="text" 
                placeholder="Abc" 
                className="border border-[#9F9F9F] rounded-lg h-16 px-6 focus:outline-[#B88E2F]"
              />
            </div>

            <div className="flex flex-col gap-4">
              <label className="font-medium">Email address</label>
              <input 
                type="email" 
                placeholder="Abc@def.com" 
                className="border border-[#9F9F9F] rounded-lg h-16 px-6 focus:outline-[#B88E2F]"
              />
            </div>

            <div className="flex flex-col gap-4">
              <label className="font-medium">Subject</label>
              <input 
                type="text" 
                placeholder="This is an optional" 
                className="border border-[#9F9F9F] rounded-lg h-16 px-6 focus:outline-[#B88E2F]"
              />
            </div>

            <div className="flex flex-col gap-4">
              <label className="font-medium">Message</label>
              <textarea 
                placeholder="Hi! i’d like to ask about" 
                rows="4"
                className="border border-[#9F9F9F] rounded-lg p-6 focus:outline-[#B88E2F] resize-none"
              ></textarea>
            </div>

            <button className="bg-[#B88E2F] text-white w-full md:w-60 py-4 rounded-md hover:bg-black transition-all font-medium">
              Submit
            </button>
          </form>
        </div>
      </div>

      <Services />
    </div>
  );
};

export default Contact;