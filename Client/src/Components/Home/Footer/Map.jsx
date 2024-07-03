import React from "react";

const Map = () => {
  return (
    <div className="flex justify-center px- pb-8 overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.005448583397!2d-0.9474701235215719!3d50.84958337167107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48744548d3570e03%3A0x55ddc8ffcd02adef!2sBosmere%20Gardens%2C%20Emsworth%20PO10%207NR%2C%20UK!5e0!3m2!1sen!2sin!4v1718885249895!5m2!1sen!2sin"
        className="w-full rounded-sm"
        height="250"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
