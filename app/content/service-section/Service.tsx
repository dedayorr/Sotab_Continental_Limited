"use client"
import { motion, Variants } from 'framer-motion';
import { ShoppingCart, Home, Building2, TrendingUp, Handshake, Key, Calculator, Award } from 'lucide-react';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
};

function ServicesCards() {
  const services = [
    {
      icon: <Key className="w-16 h-16 md:w-12 md:h-12" />,
      title: "Buying Services",
      gradient: "linear-gradient(135deg, #771933 0%, #a02447 100%)",
      iconBg: "#771933"
    },
    {
      icon: <ShoppingCart className="w-16 h-16 md:w-12 md:h-12" />,
      title: "Selling Services",
      gradient: "linear-gradient(135deg, #282b53 0%, #1f3693 100%)",
      iconBg: "#282b53"
    },
    {
      icon: <Building2 className="w-16 h-16 md:w-12 md:h-12" />,
      title: "Property Management",
      gradient: "linear-gradient(135deg, #1f3693 0%, #2d4ab8 100%)",
      iconBg: "#1f3693"
    },
    {
      icon: <TrendingUp className="w-16 h-16 md:w-12 md:h-12" />,
      title: "Investment Consulting",
      gradient: "linear-gradient(135deg, #771933 0%, #a02447 100%)",
      iconBg: "#771933"
    },
  ];

  return (
    <motion.div
      className="grid grid-cols-2 gap-5 px-3 mt-[-15%] pb-[40%] md:mt-[-7%] md:gap-9 md:px-8 md:pb-[15%] lg:pb-[10%] lg:grid-cols-4 lg:mt-[-3%] lg:px-[8%]"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {services.map((service, index) => (
        <motion.div
          key={index}
          variants={card}
          whileHover={{ 
            y: -10,
            scale: 1.03,
            transition: { duration: 0.3 }
          }}
          className="relative z-40 bg-white rounded-2xl overflow-hidden group cursor-pointer"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px"
          }}
        >
          {/* Gradient Background on Hover */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: service.gradient
            }}
          />
          
          {/* Content */}
          <div className="relative h-48 md:h-52 p-6 flex flex-col justify-center items-center gap-5">
            {/* Icon Container */}
            <div 
              className="w-20 h-20 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
              style={{
                backgroundColor: service.iconBg,
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
              }}
            >
              <div className="text-white transition-transform duration-500 group-hover:scale-110">
                {service.icon}
              </div>
            </div>

            {/* Title */}
            <h3 
              className="text-center font-bold text-base md:text-xl lg:text-lg transition-colors duration-500 group-hover:text-white"
              style={{ color: "#282b53" }}
            >
              {service.title}
            </h3>

            {/* Decorative Border */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
              style={{ backgroundColor: service.iconBg }}
            />
          </div>

          {/* Floating Particles Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div 
              className="absolute top-4 right-4 w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: "#FFD700" }}
            />
            <div 
              className="absolute bottom-8 left-6 w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ 
                backgroundColor: "#FFD700",
                animationDelay: "0.5s"
              }}
            />
            <div 
              className="absolute top-12 left-8 w-1 h-1 rounded-full animate-pulse"
              style={{ 
                backgroundColor: "#FFD700",
                animationDelay: "1s"
              }}
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ServicesCards;