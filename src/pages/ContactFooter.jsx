import React, { useState } from "react";
export default function ContactFooter() {
  const [date, setDate] = useState(new Date().getFullYear())
  return (
    <div className="bg-[#0b0b0b] text-white py-16 px-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

      <p className="text-gray-400 mb-6">Do you have a project or partnership in mind?</p>

      <form className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded bg-[#1a1a1a] border border-gray-700 text-white"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-3 rounded bg-[#1a1a1a] border border-gray-700 text-white"
        />

        <textarea
          placeholder="Message"
          className="w-full px-4 py-3 h-28 rounded bg-[#1a1a1a] border border-gray-700 text-white"
        ></textarea>

        <button className="bg-[#ff7b00] text-black px-6 py-3 rounded font-semibold w-full hover:bg-orange-500 transition">
          Send Message
        </button>
      </form>

      <p className="text-gray-500 mt-8 text-sm">
        {/* © 2025 VyomGarud • All Rights Reserved Developed By Utitbest */}
        {`© ${date} VyomGarud • All Rights Reserved Developed By Utitbest`}
      </p>
    </div>
  );
}
