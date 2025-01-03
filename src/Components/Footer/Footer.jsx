import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

function Footer() {
  return (
    <footer className="py-8">
      <div className=" grid grid-cols-1 md:grid-cols-2 text-center md:text-left text-white">
        {/* Contact Us Section */}
        <div className="bg-gray-800 text-center py-20">
          <h3 className="text-lg font-bold mb-4">CONTACT US</h3>
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>

        {/* Follow Us Section */}
        <div className="bg-gray-900 text-center py-20">
          <h3 className="text-lg font-bold mb-4">Follow US</h3>
          <p>Join us on social media</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-white hover:text-gray-400">
              <FaFacebook></FaFacebook>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaLinkedin></FaLinkedin>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaSquareXTwitter></FaSquareXTwitter>
            </a>{" "}
            <a href="#" className="text-white hover:text-gray-400">
              <IoLogoInstagram></IoLogoInstagram>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center bg-gray-950 text-gray-400 text-sm py-5">
        Copyright &copy; 2024. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
