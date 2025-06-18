// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 text-sm px-8 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="space-y-2">
          <p>FAQ</p>
          <p>Investor Relations</p>
          <p>Privacy</p>
          <p>Speed Test</p>
        </div>
        <div className="space-y-2">
          <p>Help Center</p>
          <p>Jobs</p>
          <p>Cookie Preferences</p>
          <p>Legal Notices</p>
        </div>
        <div className="space-y-2">
          <p>Account</p>
          <p>Ways to Watch</p>
          <p>Corporate Info</p>
          <p>Only on Netflix</p>
        </div>
        <div className="space-y-2">
          <p>Media Center</p>
          <p>Terms of Use</p>
          <p>Contact Us</p>
        </div>
      </div>
      <p className="text-center mt-6">© 2025 Netflix Clone</p>
    </footer>
  );
};

export default Footer;
