import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center">
      <p className="text-[12px] dark:text-zinc-400 font-serif text-gray-950">
        &copy; {new Date().getFullYear()} BhojGC. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
