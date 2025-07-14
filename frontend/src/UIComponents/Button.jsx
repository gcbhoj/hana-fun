import React from "react";

const Button = ({
  label = "",
  width = "",
  height = "",
  borderAttributes = "",
  backgroundColor = "",
  fontColor = "",
  fontSize = "",
  hoverAttributes = "",
  iconImage = null,
  hoverLabel = "",
  onClick,
}) => {
  return (
    <>
      <div className="relative group">
        <button
          onClick={onClick}
          className={`${borderAttributes} ${width} ${height} capitalize ${backgroundColor} ${fontColor} ${fontSize} font-[Roboto] tracking-[1.25px] dark:shadow-gray-300 shadow-lg/20 hover:text-xl hover:underline hover:underline-offset-8 hover:scale-110 ${hoverAttributes} `}
        >
          {iconImage && (
            <span className="text-4xl flex items-center justify-center">
              {iconImage}
            </span>
          )}
          {label}
        </button>
        <span className="absolute bottom-full right-1/5 -translate-y-1/2 ml-1 px-1 py-1 text-[10px] text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10 italic tracking-[1.75px]">
          {hoverLabel}
        </span>
      </div>
    </>
  );
};
export default Button;
