import React from "react";
import {
  Shield,
  TrendingUp,
  Users,
  Award,
  Leaf,
  Hammer,
  CheckCircle,
  Target,
} from "lucide-react";
import Image from "next/image";

const WhyUs = () => {
  const coreValues = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Premium Quality",
      description:
        "Every property we develop meets the highest standards of construction, design, and functionality",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client Focus",
      description:
        "Your satisfaction drives everything we do. We listen, understand, and deliver solutions tailored to your needs",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Innovation Hub",
      description:
        "We embrace cutting-edge technology and modern approaches to deliver exceptional results",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Customer Care",
      description:
        "Our dedicated support team ensures you receive personalized attention throughout your journey",
    },
  ];

  const ingredients = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable Design",
      description:
        "Our projects are designed with the future in mind. We prioritize eco-friendly materials, energy-efficient systems, and sustainable practices that reduce environmental impact while creating lasting value for our clients.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic Locations",
      description:
        "We carefully select prime locations that offer excellent accessibility, strong appreciation potential, and proximity to essential amenities. Every site is chosen to maximize your investment returns.",
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Expert Craftsmen",
      description:
        "We partner with highly skilled professionals who bring decades of experience. From architects to contractors, our team ensures world-class execution at every stage of development.",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Quality Assurance",
      description:
        "Our commitment to quality extends beyond just construction. We implement rigorous quality control measures at every phase to ensure your property exceeds expectations and stands the test of time.",
    },
  ];

  const sustainability = [
    {
      number: "01",
      title: "Responsible Investment Sourcing",
      description:
        "We select our capital judiciously from trusted investors who share our values of sustainable development and ethical practices.",
    },
    {
      number: "02",
      title: "Eco-Friendly Development",
      description:
        "Our production processes are designed to minimize waste and reduce our carbon footprint through innovative building techniques.",
    },
    {
      number: "03",
      title: "Community Protection",
      description:
        "We are committed to protecting indigenous and preserving the natural ecosystem of the area where we build. It's our priority.",
    },
    {
      number: "04",
      title: "Green Initiatives",
      description:
        "We continually seek out technology and sustainable partnerships. From energy-efficient fixtures to recycling programs, we're building a better tomorrow.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative min-h-[250px] md:min-h-[300px] lg:min-h-[400px]">
        <div className="absolute inset-0 bg-linear-to-br from-gray-400 to-gray-600">
          <Image
            src="/business.jpg"
            alt="sotabImage"
            width={1200}
            height={800}
            className="object-cover w-full h-[250px] md:h-[300px] lg:h-[400px] "
          />
        </div>
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(40, 43, 83, 0.75)" }}
        />
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Why Choose Us
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              We see enormous potential in Africa's real estate and energy
              sectors, and we're proud to be part of this exciting story of
              growth. For us, every project is a chance to create sustainable
              solutions, empower communities, and help shape a brighter future
              for generations to come.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: "#282b53" }}
            >
              We take pride in delivering exceptional real estate solutions that
              create lasting value
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Experience Sotab Continental Ltd as a partner of forward-thinking,
              meticulously planned developments, combining cutting-edge
              innovation and timeless design. Here's why clients choose us for
              their real estate journey.
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl">
            <div className="h-[300px] md:h-[400px] bg-linear-to-br from-gray-300 to-gray-500 flex items-center justify-center">
              <span className="text-white text-xl font-semibold">
                Business Image
              </span>
            </div>
          </div>

          {/* Core Values Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 border-2"
                style={{
                  backgroundColor: "#f8f9fa",
                  borderColor: index % 2 === 0 ? "#1f3693" : "#771933",
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center"
                  style={{
                    backgroundColor: index % 2 === 0 ? "#1f3693" : "#771933",
                  }}
                >
                  <div className="text-white">{value.icon}</div>
                </div>
                <h3 className="font-bold mb-2" style={{ color: "#282b53" }}>
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          {/* Ingredients Section */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-4 gap-8 mb-12">
              <div
                className="lg:col-span-1 p-8 rounded-2xl"
                style={{ backgroundColor: "#f3e5f5" }}
              >
                <h2
                  className="text-3xl font-bold mb-4"
                  style={{ color: "#282b53" }}
                >
                  Our Ingredients
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Here are some of our ingredients that make us one of the best
                  in the region.
                </p>
              </div>

              <div className="lg:col-span-3 grid md:grid-cols-2 gap-6">
                {ingredients.map((ingredient, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div
                      className="w-14 h-14 rounded-lg mb-4 flex items-center justify-center"
                      style={{
                        backgroundColor:
                          index % 2 === 0 ? "#1f3693" : "#771933",
                      }}
                    >
                      <div className="text-white">{ingredient.icon}</div>
                    </div>
                    <h3
                      className="text-xl font-bold mb-3"
                      style={{ color: "#282b53" }}
                    >
                      {ingredient.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {ingredient.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sustainability Section */}
          <div>
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: "#282b53" }}
              >
                Sustainability
              </h2>
              <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                At Sotab, sustainability is at the heart of everything we do. We
                are committed to making a positive impact on the environment,
                communities, and the world at large as we strive to push the
                real estate industry forward in a way that creates a brighter
                and greener future for the generations ahead of us.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 mt-6 font-semibold hover:gap-4 transition-all"
                style={{ color: "#771933" }}
              >
                View Products <span>→</span>
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {sustainability.map((item, index) => (
                <div
                  key={index}
                  className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4"
                  style={{
                    borderLeftColor: index % 2 === 0 ? "#1f3693" : "#771933",
                  }}
                >
                  <div
                    className="text-5xl font-bold mb-4 opacity-20"
                    style={{ color: index % 2 === 0 ? "#1f3693" : "#771933" }}
                  >
                    {item.number}
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
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
      </div>
    </div>
  );
};

export default WhyUs;
