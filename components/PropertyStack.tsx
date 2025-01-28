"use client";

import React, { useState, useEffect } from "react";
import PropertyCard from "./ui/property-card";
import { properties } from "@/data/propertiesData";

export default function PropertyStack() {
  const [activeIndex, setActiveIndex] = useState(0);

  const getPosition = (index: number) => {
    const diff = (index - activeIndex + properties.length) % properties.length;
    if (diff === 0) return "bottom";
    if (diff === 1) return "middle";
    if (diff === 2) return "top";
    return "hidden";
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % properties.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-72 h-[150px] perspective-1000">
      <div className="p-4">
        {properties.map((property: any, index: number) => (
          <PropertyCard
            key={property.title}
            property={property}
            position={getPosition(index)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
