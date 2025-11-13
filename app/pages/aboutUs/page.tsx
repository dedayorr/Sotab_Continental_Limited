import React from "react";
import {
  Building2,
  Zap,
  ClipboardList,
  Factory,
  Building,
  Wrench,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Residential & Real Estate Development",
      description:
        "From beautiful residential communities to dynamic commercial spaces, we design and deliver properties that combine functionality, elegance, affordability, and sustainability.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Energy Solutions",
      description:
        "Powering progress is at the heart of what we do. Our energy projects focus on reliable, innovative, and environmentally-conscious solutions for businesses and communities.",
    },
    {
      icon: <ClipboardList className="w-8 h-8" />,
      title: "Project Management & Consulting",
      description:
        "With a strong foundation in strategy and execution, we guide clients through every stage of development to ensure world-class results.",
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Commercial & Industrial Projects",
      description:
        "We specialize in high-impact commercial and industrial developments, creating spaces that power business growth and economic transformation. From office complexes and retail centers to large-scale industrial facilities, our projects are built with innovation, quality, and long-term value in mind.",
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Public Infrastructure Development",
      description:
        "Sotab is committed to shaping stronger communities through infrastructure that serves people. We partner with government and private organizations to design and execute projects such as roads, utilities, and public facilities, ensuring every development meets global standards for safety, sustainability, and functionality.",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Renovation & Rehabilitation Services",
      description:
        "We breathe new life into existing spaces with our renovation and rehabilitation expertise. Whether it's upgrading old structures, restoring historical buildings, or reimagining existing facilities, we focus on modern design, durability, and efficiency to deliver spaces that feel brand new.",
    },
  ];

  const stats = [
    { number: "$100M+", label: "Current Listings Value Handled" },
    { number: "900+", label: "Clients Managed by a Dedicated Team" },
    { number: "20+ Years", label: "of Experience in Real Estate Market" },
    { number: "500+", label: "Daily Site Visitors on Our Website" },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative min-h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: "url(/Hero_Nine.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            About Us
          </h1>
        </div>
      </div>

 
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
      
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        

            <div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ color: "#282b53" }}
              >
                Your Trusted Property Experts
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  <strong style={{ color: "#771933" }}>
                    Sotab Continental Ltd
                  </strong>{" "}
                  is a Nigerian-based real estate and energy solutions company
                  redefining development through innovation, sustainability, and
                  community driven impact.
                </p>
                <Image
                  src="/CEO.JPG"
                  alt="sotabImage"
                  width={1200}
                  height={800}
                  className="object-cover w-full h-[250px] md:h-[300px] lg:h-[400px] "
                />
                <p>
                  Under the leadership of{" "}
                  <strong>Hon. Adebowale Adesote</strong>, Sotab is committed to
                  delivering exceptional projects that combine quality,
                  creativity, and purpose, making us a trusted partner for
                  individuals, businesses, and communities.
                </p>
              </div>

              <Link href="/pages/contact-us">
                <button
                  className="mt-8 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
                  style={{ backgroundColor: "#771933" }}
                >
                  Contact Us Today
                </button>
              </Link>
            </div>
          </div>

          {/* Mission Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              {
                title: "Our Mission",
                text: "Our mission is to align our agency with your real estate goals and develop strategies that ensure success for the long haul.",
              },
              {
                title: "Our Vision",
                text: "Our top-notch specialized service, seamless management, and our team's specialties continue to solidify our legacy.",
              },
              {
                title: "Trusted by over 10,000 clients",
                text: "With over $2.5 billion in sales, Our agency is the industry's top choice and produces all over years of experience.",
              },
              {
                title: "Why Choose Us",
                text: "Our team of licensed agents and property specialists continue to build successful relationships with clients.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{
                  backgroundColor: "#f8f9fa",
                  borderTop: `4px solid ${
                    index % 2 === 0 ? "#1f3693" : "#771933"
                  }`,
                }}
              >
                <div className="mb-3">
                  <CheckCircle
                    className="w-8 h-8"
                    style={{ color: "#771933" }}
                  />
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "#282b53" }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Our Expertise Section */}
          <div className="mb-20">
            <h2
              className="text-3xl md:text-4xl font-bold text-center mb-4"
              style={{ color: "#282b53" }}
            >
              Our Expertise
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
              We're proud to bring a fresh, innovative approach to two of
              Africa's most important industries
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-t-4"
                  style={{
                    borderTopColor:
                      index % 3 === 0
                        ? "#1f3693"
                        : index % 3 === 1
                        ? "#771933"
                        : "#282b53",
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-lg flex items-center justify-center mb-4"
                    style={{
                      backgroundColor:
                        index % 3 === 0
                          ? "#1f3693"
                          : index % 3 === 1
                          ? "#771933"
                          : "#282b53",
                    }}
                  >
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "#282b53" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div
        className="py-16 md:py-20"
        style={{
          background:
            "linear-gradient(135deg, #282b53 0%, #1f3693 50%, #282b53 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl backdrop-blur-sm"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              >
                <div
                  className="text-4xl md:text-5xl font-bold mb-2"
                  style={{ color: index % 2 === 0 ? "#ffffff" : "#ffd700" }}
                >
                  {stat.number}
                </div>
                <div className="text-blue-200 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
