"use client";

import { useState, useEffect } from "react";
import { headerContents } from "../data/headerContentData";

export default function HeaderBackground({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % headerContents.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <header className="relative h-screen overflow-hidden bg-black">
      {headerContents.map((content, index) => (
        <div
          key={content.backgroundUrl}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentIndex
              ? "opacity-100 blur-none"
              : "opacity-0 blur-md"
          }`}
          style={{
            backgroundImage: `url(${content.backgroundUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-custom-gradient" />
        </div>
      ))}

      <div className="absolute inset-0 flex justify-between items-center ">
        {/* <div className="w-1/2 relative bg-red-950">
          {headerContents.map((content, index) => (
            <div
              key={index}
              className={`absolute bg-red-700 inset-x-0 flex flex-col items-center transition-all duration-1000 ease-in-out ${
                index === currentIndex
                  ? "opacity-100 blur-none"
                  : "opacity-0 blur-sm"
              }`}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                {content.title}
              </h1>
              <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto text-center animate-slide-up">
                {content.description}
              </p>
            </div>
          ))}
        </div> */}
        <div className="absolute bottom-0 right-0">{children}</div>
      </div>
      {/* <div className="mb-10 w-full h-full flex items-center justify-center px-4 bg-red-400">
        <div className="absolute w-full text-center">
          {headerContents.map((content, index) => (
            <div
              key={index}
              className={`transition-all duration-700  ${
                index === currentIndex
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform -translate-y-4"
              }`}
            >
              <h1 className=" text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                {content.title}
              </h1>
              <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto text-center animate-slide-up">
                {content.description}
              </p>
            </div>
          ))}
        </div>

        <div className="">{children}</div>
      </div> */}
    </header>
  );
}
