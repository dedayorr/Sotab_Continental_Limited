"use client";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Instagram,
  Linkedin,
  MessageSquare,
  Building2,
  CheckCircle,
} from "lucide-react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (
      formData.name &&
      formData.email &&
      formData.subject &&
      formData.message
    ) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }, 3000);
    }
  };

  const offices = [
    {
      title: "Head Office - Lagos",
      address: "Plot 123, Victoria Island, Lagos, Nigeria",
      icon: <Building2 className="w-6 h-6" />,
      color: "#771933",
    },
    // {
    //   title: "Regional Office - Abuja",
    //   address: "Suite 45, Central Business District, Abuja, Nigeria",
    //   icon: <Building2 className="w-6 h-6" />,
    //   color: "#282b53",
    // },
    // {
    //   title: "Branch Office - Port Harcourt",
    //   address: "15 Trans-Amadi Industrial Layout, Port Harcourt, Nigeria",
    //   icon: <Building2 className="w-6 h-6" />,
    //   color: "#1f3693",
    // },
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+2347047155693", "+2348104542063"],
      color: "#771933",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@sotabltd.com.ng"],
      color: "#282b53",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 4:00 PM"],
      color: "#1f3693",
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      url: "https://www.instagram.com/reel/DQToaYjiOdS/?igsh=MW5rMHdveGRtY2tjMw==",
      handle: "@sotab_continental_ltd",
      color: "#E4405F",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/sotab-realestate-limited-realestate-oil-and-gas-company-179931386?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      handle: "Sotab Realestate Limited Realestate,oil And Gas Company",
      color: "#0A66C2",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative min-h-[400px] flex items-center justify-center"
        style={{
          background:
            "linear-gradient(135deg, #282b53 0%, #1f3693 50%, #771933 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)",
            }}
          ></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            We're here to help you with your real estate and energy solutions
            needs
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#771933" }}
                >
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold" style={{ color: "#282b53" }}>
                  Send Us a Message
                </h2>
              </div>

              {isSubmitted ? (
                <div
                  className="py-12 text-center rounded-xl"
                  style={{ backgroundColor: "#f0fdf4" }}
                >
                  <CheckCircle
                    className="w-16 h-16 mx-auto mb-4"
                    style={{ color: "#22c55e" }}
                  />
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ color: "#282b53" }}
                  >
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600">
                    We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <label
                      className="block text-sm font-semibold mb-2"
                      style={{ color: "#282b53" }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-sm font-semibold mb-2"
                        style={{ color: "#282b53" }}
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label
                        className="block text-sm font-semibold mb-2"
                        style={{ color: "#282b53" }}
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none transition-all"
                        placeholder="+234 800 000 0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-sm font-semibold mb-2"
                      style={{ color: "#282b53" }}
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none transition-all"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm font-semibold mb-2"
                      style={{ color: "#282b53" }}
                    >
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none transition-all resize-none"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full py-4 rounded-lg text-white font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    style={{ backgroundColor: "#771933" }}
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: method.color }}
                    >
                      <div className="text-white">{method.icon}</div>
                    </div>
                    <div>
                      <h3
                        className="font-bold text-lg mb-2"
                        style={{ color: "#282b53" }}
                      >
                        {method.title}
                      </h3>
                      {method.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 mb-1">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3
                className="font-bold text-xl mb-4"
                style={{ color: "#282b53" }}
              >
                Connect With Us
              </h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg hover:shadow-md transition-all duration-300 border-2 border-gray-100"
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: social.color }}
                    >
                      <div className="text-white">{social.icon}</div>
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: "#282b53" }}>
                        {social.name}
                      </p>
                      <p className="text-sm text-gray-600">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div>
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#282b53" }}
            >
              Our Office Locations
            </h2>
            <p className="text-gray-600 text-lg">
              Visit us at any of our offices across Nigeria
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: office.color }}
                >
                  <div className="text-white">{office.icon}</div>
                </div>
                <h3
                  className="font-bold text-xl mb-3"
                  style={{ color: "#282b53" }}
                >
                  {office.title}
                </h3>
                <div className="flex items-start gap-2 text-gray-600">
                  <MapPin
                    className="w-5 h-5 shrink-0 mt-1"
                    style={{ color: office.color }}
                  />
                  <p>{office.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div
              className="w-full h-96 relative"
              style={{
                background: "linear-gradient(135deg, #282b53 0%, #771933 100%)",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-xl font-semibold">
                    Interactive Map Coming Soon
                  </p>
                  <p className="text-gray-300 mt-2">
                    Google Maps integration will be added here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        className="py-20"
        style={{
          background: "linear-gradient(135deg, #282b53 0%, #771933 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Real Estate Journey?
          </h2>
          <p className="text-gray-200 text-lg mb-8">
            Let's discuss how Sotab Continental can help you achieve your
            property goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-4 bg-white rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              style={{ color: "#771933" }}
            >
              Schedule a Consultation
            </button>
            <button
              className="px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-white"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#771933";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "white";
              }}
            >
              View Our Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
