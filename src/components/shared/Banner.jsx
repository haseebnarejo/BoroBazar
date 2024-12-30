import React from "react";
import Textinput from '../../components/ui/Textinput';

function Banner({
  image,
  title,
  subtitle,
  buttonText,
  buttonLink,
  extraContent,
  titleClass = "text-2xl md:text-4xl xl:text-5xl 2xl:text-[55px] font-extrabold text-[#0b4635] leading-[45px] xl:leading-[50px] 2xl:leading-[70px] mb-3",
  subtitleClass = "text-lg leading-9",
  containerClass = "sm:w-[90%] md:w-[75%] lg:w-[65%] xl:w-[55%] mx-auto text-center",
  buttonClass = "bg-theme text-white px-6 py-3 rounded-full font-semibold",
  heightClass = "h-[650px]", // Default height
  showStoreLinks = false, // New prop to enable app store links
  appStoreLinks = [], // Array of image links for app stores
  extraImage = null, // Extra image for banner2
}) {
  return (
    <div className={`relative mb-8 ${heightClass} bg-[#f2f2f2]`}>
      {image && (
        <img src={image} className="w-full h-full object-cover" alt="Banner" />
      )}
      <div className="container flex justify-center md:justify-between absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 items-center 2xl:gap-16">
        <div className={containerClass}>
          <h1 className={titleClass}>{title}</h1>
          <p className={`${subtitleClass} mb-5`}>{subtitle}</p>
          {buttonText && buttonLink && (
            <a href={buttonLink} className={buttonClass}>
              {buttonText}
            </a>
          )}
          {showStoreLinks && (
            <div className="flex gap-4 items-center justify-center md:justify-start mt-4">
              {appStoreLinks.map((link, index) => (
                <img
                  key={index}
                  src={link}
                  alt={`store-link-${index}`}
                  className="w-[40%] lg:w-auto "
                />
              ))}
            </div>
          )}
          {extraContent}
        </div>
        {extraImage && (
          <img
            src={extraImage}
            alt="Extra Banner"
            className="hidden md:block h-full "
          />
        )}
      </div>
    </div>
  );
}

export default Banner;
