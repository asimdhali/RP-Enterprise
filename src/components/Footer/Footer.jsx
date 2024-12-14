import React from "react";

const Footer = () => {
  return (
    <div>
  <footer className="bg-gray-900 text-gray-200 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Brand Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white">RP Enterprise</h2>
        <p className="mt-4 text-gray-400">
          Dedicated to delivering excellence in services and customer satisfaction.
        </p>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Product Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Order Tracking
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Shipping & Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Returns
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Subscribe</h3>
          <p className="text-gray-400 mb-4">
            Get the latest updates and offers.
          </p>
          <form>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-gray-900 rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-500 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} RR Enterprise. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</div>

  );
};

export default Footer;