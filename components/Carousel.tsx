"use client";

import { useEffect, useState } from "react";
import { headerContents } from "../data/headerContentData";
import PropertyStack from "./PropertyStack";

import {
  IconPhoneCall,
  IconMail,
  IconLocationBolt,
  IconPremiumRights,
  IconMapPin,
} from "@tabler/icons-react";
import Link from "next/link";

// Define the button type
type ButtonType = {
  id: number;
  label: string;
  icon: any;
  ariaLabel: string;
  link?: string;
};

// Array of button data
const buttons: ButtonType[] = [
  {
    id: 1,
    label: "Call",
    icon: <IconPhoneCall size={20} className="text-white" />,
    ariaLabel: "Call",
    link : "tel:+1234567890"
  },
  {
    id: 2,
    label: "Email",
    icon: <IconMail size={20} className="text-white" />,
    ariaLabel: "Email",
    link : "mailto: heyrahulbro@gmail.com"
  },
  {
    id: 3,
    label: "Other",
    icon: <IconLocationBolt size={20} className="text-white" />,
    ariaLabel: "Other",
    link : "https://www.google.com/maps/place/Magneto+The+Mall/@21.236388,81.661667,17z/data=!3m1!4b1"
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide((prevSlide) => (prevSlide + 1) % headerContents.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval
  }, []);

  useEffect(() => {
    if (isTransitioning) {
      setTimeout(() => {
        setIsTransitioning(false);
      }, 700); // Wait for the transition to complete
    }
  }, [isTransitioning]);

  // Handle paginator dot click
  const handleDotClick = (index: number) => {
    setIsTransitioning(true);
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background Image with immediate Blur Animation */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-all duration-700 rounded-3xl ${
          isTransitioning ? "animate-blurIn" : ""
        }`}
        style={{
          backgroundImage: `url(${headerContents[currentSlide].backgroundUrl})`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-custom-gradient rounded-3xl"></div>

      <div className="absolute top-[35vh] right-5">
        <IconButtons isTransitioning={isTransitioning} />
      </div>

      <div className="absolute w-full flex items-end justify-between gap-2 bottom-5">
        <div className="relative z-10 flex flex-col items-start justify-center gap-7 w-1/2 h-full px-10">
          <div className="space-y-4">
            <h1 className=" text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              {headerContents[currentSlide].title}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/60">
              {headerContents[currentSlide].description}
            </p>
            <p className="text-bold flex items-center gap-2 font-extrabold text-white">
              <IconMapPin size={25} className="text-white" />
              {headerContents[currentSlide].location}
            </p>
          </div>
          {/* paginator */}
          <div className=" flex items-center justify-center gap-2">
            {headerContents.map((_, index) => (
              <div
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  index === currentSlide ? "bg-white" : "bg-gray-400"
                } transition-all duration-500`}
              ></div>
            ))}
          </div>
        </div>
        <div className="absolute right-20 space-y-4 w-72">
          <p className="text-bold flex items-center gap-2 font-extrabold text-white">
            <IconPremiumRights size={24} className="text-white" />
            {"Premium properties"}
          </p>
          <div>
            <PropertyStack />
            <p className="text-bold flex items-center gap-2 opacity-60 text-white">
              {"Explore premium properties at Wallfort"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

const IconButtons = ({ isTransitioning }: { isTransitioning: boolean }) => {
  return (
    <div
      className={`flex flex-col gap-4 text-white transition-opacity duration-700`}
    >
      {buttons.map((button) => (
        <Link
          href={button.link || "#"}
          target="_blank"
          key={button.id}
          className="p-2 border-2 border-white/100 rounded-full bg-white/25 hover:bg-primary transition duration-300"
          aria-label={button.ariaLabel}
        >
          {button.icon}
        </Link>
      ))}
    </div>
  );
};
