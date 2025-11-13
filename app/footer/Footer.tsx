import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

function Footer() {
  return (
    <footer
      className="w-full text-white"
      style={{ backgroundColor: "#282b53" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                className="SotabLogo"
                src="/SotabLTD.PNG"
                alt="Sotab logo"
                width={100}
                height={20}
                priority
              />
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Your trusted partner in finding the perfect property.
            </p>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-3">
            <h3
              className="text-lg font-bold mb-6 pb-2 border-b-2 inline-block"
              style={{ borderColor: "#771933" }}
            >
              Contact Us
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <div
                  className="p-2 rounded-lg shrink-0"
                  style={{ backgroundColor: "#771933" }}
                >
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-blue-200 mb-1">Phone</div>
                  <a
                    href="tel:+2347047155693"
                    className="text-white hover:text-blue-300 transition-colors font-medium"
                  >
                    07047155693
                  </a>
                  <br />
                  <a
                    href="tel:+2348104542063"
                    className="text-white hover:text-blue-300 transition-colors font-medium"
                  >
                    08104542063
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div
                  className="p-2 rounded-lg shrink-0"
                  style={{ backgroundColor: "#771933" }}
                >
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-blue-200 mb-1">Email</div>
                  <a
                    href="mailto:info@sotabltd.com.ng"
                    className="text-white hover:text-blue-300 transition-colors font-medium break-all"
                  >
                    info@sotabltd.com.ng
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div
                  className="p-2 rounded-lg shrink-0"
                  style={{ backgroundColor: "#771933" }}
                >
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-blue-200 mb-1">Address</div>
                  <p className="text-white font-medium">
                  70b kusenla road, ikate
                    <br />
                    Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-200 text-sm text-center md:text-left">
              © 2025 Sotab Continental Limited. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm">
              <a
                href="#privacy"
                className="text-blue-200 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-blue-200 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
