import React from "react";

const Input = ({ className, label, ...props }) => {
  return (
    <div>
      <input {...props} className={` peer w-full h-12 rounded-xl border border-[#2E3228] bg-[#111111] outline-none transition-all  text-[#C5C8BA] focus:border-primary p-4 ${className}`} />
      <label style={{ letterSpacing: "0.5px" }} className=" mb-2 text-xs font-medium text-[#2E3228] capitalize  transition-all peer-focus:!text-[#C5C8BA] -translate-y-[70px] block">
        {label}
      </label>
    </div>
  );
};

export default Input;
