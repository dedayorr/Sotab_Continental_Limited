import {
  ShoppingCart,
  DollarSign,
  Building,
  TrendingUp,
  Home,
  Users,
} from "lucide-react";
import Image from "next/image";

const Services = () => {
  const whyChooseUs = [
    {
      title: "Expert Knowledge",
      description:
        "Our team brings decades of combined experience in Nigerian real estate, ensuring you get the best advice and opportunities.",
    },
    {
      title: "Trusted Service",
      description:
        "We've successfully helped thousands of clients buy, sell, and manage properties across Nigeria with complete transparency.",
    },
    {
      title: "Client-Focused",
      description:
        "Your goals are our priority. We tailor our services to meet your unique needs and ensure your complete satisfaction.",
    },
  ];

  const services = [
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Buying Services",
      description:
        "Find your perfect property with expert guidance every step of the way",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Selling Services",
      description:
        "Maximize your property value with our proven marketing strategies",
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Property Management",
      description:
        "Professional management services to protect and grow your investment",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Investment Consulting",
      description:
        "Strategic advice to help you make smart real estate investment decisions",
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Property Valuation",
      description:
        "Accurate property assessments for buying, selling, or refinancing",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Tenant Placement",
      description:
        "Connect with quality tenants through our extensive screening process",
    },
  ];

  // Generate random floating dots
  const floatingDots = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 8 + 4,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 5,
  }));

  return (
    <div className="w-full">
      <div
        className="relative min-h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: "url(/Hero_Ten.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(40, 43, 83, 0.75)" }}
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8">
            Comprehensive real estate solutions designed to meet your every
            need. From buying and selling to property management and investment
            consulting, we're here to guide you every step of the way.
          </p>
        </div>
      </div>

      <div className="bg- py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#282b53" }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ backgroundColor: "#1f3693" }}
      >
        {/* Floating dots background */}
        {floatingDots.map((dot) => (
          <div
            key={dot.id}
            className="absolute rounded-full bg-white opacity-30"
            style={{
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              animation: `float ${dot.duration}s ease-in-out ${dot.delay}s infinite`,
            }}
          />
        ))}

        <style>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0) translateX(0);
            }
            25% {
              transform: translateY(-20px) translateX(10px);
            }
            50% {
              transform: translateY(-10px) translateX(-10px);
            }
            75% {
              transform: translateY(-30px) translateX(5px);
            }
          }
        `}</style>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Our <span className="italic">Services</span>
          </h2>
          <p className="text-center text-blue-200 mb-16 text-lg">
            Comprehensive real estate solutions tailored to your needs
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#771933" }}
                >
                  <div className="text-white">{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Image
              src="/business.jpg"
              alt="sotabImage"
              width={1200}
              height={800}
              className="object-cover w-full h-[250px] md:h-[300px] lg:h-[400px] "
            />

            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Real Estate <span className="italic">Development Center</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                Sotab Continental Ltd is redefining the marketplace for real
                estate by making it dramatically easier for buyers and sellers
                to discover, learn more about, compare and buy the properties
                and services they need to build and grow their portfolio.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Our services primarily focus on capacity building of
                intermediary service providers and connecting investors with
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
