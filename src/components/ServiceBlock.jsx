import React from "react";
import { Truck, RefreshCw, ShieldCheck, Gift, Headphones } from "lucide-react";
import "./ServiceBlock.css";

const services = [
  { icon: <Truck size={28} />, title: "Free Shipping", description: "For all Orders Over ₹500" },
  { icon: <RefreshCw size={28} />, title: "30 Days Returns", description: "For an Exchange Product" },
  { icon: <ShieldCheck size={28} />, title: "Secured Payment", description: "Payment Cards Accepted" },
  { icon: <Gift size={28} />, title: "Special Gifts", description: "Contact us Anytime" },
  { icon: <Headphones size={28} />, title: "Support 24/7", description: "Contact us Anytime" },
];

const ServiceBlock = () => (
  <div className="service-block-wrapper">
    <section className="service-block-section">
      {/* Outer container adds padding so track stays inside */}
      <div className="service-block-outer">
        {/* Inner scrollable container */}
        <div className="service-block-container">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-card__icon">{service.icon}</div>
              <div>
                <h4 className="service-card__title">{service.title}</h4>
                <p className="service-card__description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default ServiceBlock;
