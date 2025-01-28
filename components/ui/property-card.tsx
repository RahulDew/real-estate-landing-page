import React from "react";
import { Star } from "lucide-react";
import { Property } from "@/types";

interface PropertyCardProps {
  property: Property;
  position: "top" | "middle" | "bottom" | "hidden";
  index: number;
}

export default function PropertyCard({
  property,
  position,
}: PropertyCardProps) {
  const getStyles = () => {
    switch (position) {
      case "top":
        return {
          transform: "translateY(-20px) scale(0.9) translateZ(-100px)",
          opacity: 0.8,
          zIndex: 1,
        };
      case "middle":
        return {
          transform: "translateY(-10px) scale(0.95) translateZ(-50px)",
          opacity: 0.9,
          zIndex: 2,
        };
      case "bottom":
        return {
          transform: "translateY(0) scale(1) translateZ(0)",
          opacity: 1,
          zIndex: 3,
        };
      default:
        return {
          transform: "translateY(-60px) scale(0.85) translateZ(-150px)",
          opacity: 0,
          zIndex: 0,
        };
    }
  };

  return (
    <div
      className="absolute flex justify-between items-start gap-3 left-0 right-0 bg-white backdrop-blur-sm rounded-lg p-4 shadow-xl w-80 transition-all duration-700 ease-in-out"
      style={{
        ...getStyles(),
        transformStyle: "preserve-3d",
      }}
    >
      <div className="flex items-start justify-between flex-col">
        <h3 className="text-[20px] font-semibold text-primary ">
          {property.title}
        </h3>
        <p className="text-sm text-foregroundSecondary absolute bottom-4">
          {property.location}
        </p>
      </div>
      <div className="w-32 h-20 flex items-center justify-center">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
