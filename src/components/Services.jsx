import React from 'react';
import { Trophy, ShieldCheck, Truck, Headphones } from 'lucide-react';

const Services = () => {
  const serviceList = [
    {
      icon: <Trophy size={45} strokeWidth={1.5} />,
      title: "High Quality",
      desc: "crafted from top materials"
    },
    {
      icon: <ShieldCheck size={45} strokeWidth={1.5} />,
      title: "Warranty Protection",
      desc: "Over 2 years"
    },
    {
      icon: <Truck size={45} strokeWidth={1.5} />,
      title: "Free Shipping",
      desc: "Order over 150 $"
    },
    {
      icon: <Headphones size={45} strokeWidth={1.5} />,
      title: "24 / 7 Support",
      desc: "Dedicated support"
    }
  ];

  return (
    <section className="bg-[#FAF3EA] py-24 px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {serviceList.map((service, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="text-[#242424]">
              {service.icon}
            </div>
            <div>
              <h4 className="font-semibold text-xl md:text-2xl text-[#242424]">{service.title}</h4>
              <p className="text-[#898989] font-medium text-base md:text-lg">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;