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
    { number: "$10M+", label: "Current Listings Value Handled" },
    { number: "100+", label: "Clients Managed by a Dedicated Team" },
    { number: "20+ Years", label: "of Experience in Real Estate Market" },
    { number: "100+", label: "Daily Site Visitors on Our Website" },
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
          style={{ backgroundColor: "rgba(40, 43, 83, 0.75)" }}
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
                  src="/Hero_Ten.jpeg"
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

            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <svg viewBox="0 0 400 400" className="w-full h-auto">
                  <rect x="0" y="0" width="400" height="400" fill="#e8f4f8" />

                  <circle cx="320" cy="80" r="30" fill="#FFD700" opacity="0.8">
                    <animate
                      attributeName="r"
                      values="28;32;28"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  <g>
                    <rect
                      x="120"
                      y="150"
                      width="160"
                      height="200"
                      fill="#282b53"
                    >
                      <animate
                        attributeName="y"
                        values="400;150"
                        dur="2s"
                        fill="freeze"
                      />
                    </rect>

                    {[0, 1, 2, 3].map((row) =>
                      [0, 1, 2].map((col) => (
                        <rect
                          key={`${row}-${col}`}
                          x={145 + col * 35}
                          y={175 + row * 40}
                          width="20"
                          height="25"
                          fill="#FFD700"
                          opacity="0.9"
                        >
                          <animate
                            attributeName="opacity"
                            values="0.5;1;0.5"
                            dur={`${2 + Math.random()}s`}
                            repeatCount="indefinite"
                            begin={`${row * 0.2 + col * 0.1}s`}
                          />
                        </rect>
                      ))
                    )}

                    <rect
                      x="175"
                      y="310"
                      width="50"
                      height="40"
                      fill="#771933"
                    />
                  </g>

                  <rect x="50" y="220" width="60" height="130" fill="#771933">
                    <animate
                      attributeName="y"
                      values="400;220"
                      dur="2.3s"
                      fill="freeze"
                    />
                  </rect>

                  <rect x="290" y="200" width="70" height="150" fill="#4a5568">
                    <animate
                      attributeName="y"
                      values="400;200"
                      dur="2.5s"
                      fill="freeze"
                    />
                  </rect>

                  <ellipse
                    cx="100"
                    cy="60"
                    rx="30"
                    ry="15"
                    fill="white"
                    opacity="0.7"
                  >
                    <animate
                      attributeName="cx"
                      values="100;420"
                      dur="30s"
                      repeatCount="indefinite"
                    />
                  </ellipse>
                  <ellipse
                    cx="250"
                    cy="50"
                    rx="40"
                    ry="20"
                    fill="white"
                    opacity="0.6"
                  >
                    <animate
                      attributeName="cx"
                      values="250;-50"
                      dur="40s"
                      repeatCount="indefinite"
                    />
                  </ellipse>

                  <g transform="translate(330, 280)">
                    <circle r="8" fill="#FFD700">
                      <animate
                        attributeName="cy"
                        values="0;-10;0"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <rect x="-2" y="8" width="4" height="15" fill="#FFD700">
                      <animate
                        attributeName="y"
                        values="8;-2;8"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </rect>
                    <rect x="-2" y="18" width="8" height="3" fill="#FFD700">
                      <animate
                        attributeName="y"
                        values="18;8;18"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </rect>
                  </g>

                  {/* Ground */}
                  <rect x="0" y="350" width="400" height="50" fill="#2d3748" />
                </svg>

                {/* Floating Stats */}
                <div
                  className="absolute top-10 right-0 bg-white rounded-lg shadow-lg p-4 animate-bounce"
                  style={{ animationDuration: "3s" }}
                >
                  <div
                    className="text-2xl font-bold"
                    style={{ color: "#771933" }}
                  >
                    500+
                  </div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>

                <div
                  className="absolute bottom-20 left-0 bg-white rounded-lg shadow-lg p-4"
                  style={{ animation: "bounce 3s infinite 1s" }}
                >
                  <div
                    className="text-2xl font-bold"
                    style={{ color: "#282b53" }}
                  >
                    95%
                  </div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* ======CEO's CORNER====== */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: "#282b53" }}
              >
                CEO's Corner: Leadership That Inspires Progress
              </h2>
              <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: "#771933" }}></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* CEO Image */}
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-2xl transform rotate-3"
                    style={{ backgroundColor: "#771933", opacity: 0.1 }}
                  ></div>
                  <Image
                    src="/CEO.JPG"
                    alt="Hon. Adesote Adebowale - CEO"
                    width={600}
                    height={700}
                    className="relative rounded-2xl shadow-2xl object-cover w-full h-[400px] md:h-[500px]"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 p-6 rounded-b-2xl"
                    style={{
                      background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                    }}
                  >
                    <h3 className="text-white text-2xl font-bold mb-1">
                      Hon. Adesote Adebowale
                    </h3>
                    <p className="text-gray-200 text-sm">
                      Founder & CEO, Sotab Continental Ltd
                    </p>
                  </div>
                </div>
              </div>

              {/* CEO Message */}
              <div className="order-1 lg:order-2">
                <div className="mb-8">
                  <h3
                    className="text-2xl font-bold mb-6"
                    style={{ color: "#282b53" }}
                  >
                    A Message from Honourable Adesote Adebowale
                  </h3>
                  <div
                    className="relative p-8 rounded-xl shadow-lg"
                    style={{ backgroundColor: "#f8f9fa" }}
                  >
                    <div
                      className="absolute top-4 left-4 text-6xl opacity-20"
                      style={{ color: "#771933" }}
                    >
                      "
                    </div>
                    <p
                      className="text-lg italic leading-relaxed relative z-10"
                      style={{ color: "#282b53" }}
                    >
                      Leadership is not about titles; it's about service, vision,
                      and creating opportunities that last for generations. At
                      Sotab, we're committed to building a company that doesn't
                      just deliver exceptional real estate and energy solutions but
                      also contributes to Africa's growth story.
                    </p>
                    <div className="mt-6 pt-6 border-t-2" style={{ borderColor: "#771933" }}>
                      <p className="font-semibold" style={{ color: "#771933" }}>
                        — Hon. Adesote Adebowale
                      </p>
                      <p className="text-sm text-gray-600">
                        Founder & CEO, Sotab Continental Ltd
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="p-6 rounded-xl shadow-md"
                  style={{ backgroundColor: "#ffffff", borderLeft: "4px solid #771933" }}
                >
                  <h4
                    className="text-xl font-bold mb-4"
                    style={{ color: "#282b53" }}
                  >
                    Meet Our CEO
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Honorable Adesote Adebowale is an internationally recognized
                    entrepreneur, humanitarian, and peace advocate whose leadership
                    has positioned Sotab Continental Ltd as one of Africa's most
                    innovative companies. With years of experience in real estate,
                    energy development, and corporate leadership, Adebowale has
                    become a respected voice in driving economic transformation,
                    youth empowerment, and sustainable growth across Nigeria and
                    beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>


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
