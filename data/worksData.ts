interface WorkSection {
  id: number;
  title: string;
  description: string;
  icon: string; // Icon name or path
  imageUrl: string; // URL for a relevant image
}

export const ourWorkData: WorkSection[] = [
  {
    id: 1,
    title: "Property Buying Assistance",
    description:
      "We help you find your dream property by understanding your needs, budget, and location preferences. Our team ensures a hassle-free buying process with complete transparency.",
    icon: "home",
    imageUrl:
      "https://images.unsplash.com/photo-1560185007-5a036a0c98e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 2,
    title: "Property Selling Services",
    description:
      "Get the best market value for your property with our expert marketing strategies, professional listings, and negotiation skills.",
    icon: "sell",
    imageUrl:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 3,
    title: "Rental Management",
    description:
      "We manage rental properties, ensuring consistent occupancy, timely rent collection, and maintenance. Perfect for landlords looking for stress-free management.",
    icon: "key",
    imageUrl:
      "https://images.unsplash.com/photo-1518733057094-95b53151d6db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 4,
    title: "Real Estate Investment Consulting",
    description:
      "Our experts guide you in making the right investment decisions to maximize returns. Whether residential, commercial, or industrial, we provide tailored advice.",
    icon: "trending-up",
    imageUrl:
      "https://images.unsplash.com/photo-1557800636-894a64c1696f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 5,
    title: "Legal and Documentation Support",
    description:
      "We ensure all legal aspects, agreements, and paperwork are handled smoothly, providing you with peace of mind during property transactions.",
    icon: "document",
    imageUrl:
      "https://images.unsplash.com/photo-1564866657313-1026e0a51249?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 6,
    title: "Property Valuation and Market Analysis",
    description:
      "Our in-depth market analysis helps you understand the current trends and valuation of properties, enabling informed decision-making.",
    icon: "analytics",
    imageUrl:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 7,
    title: "Customer-Centric Approach",
    description:
      "We prioritize our clients by offering personalized services, constant communication, and dedicated support throughout the process.",
    icon: "smile",
    imageUrl:
      "https://images.unsplash.com/photo-1518169640858-0d622b058e5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
];

export const ourWorkHeading = {
  title: "What we Offer",
  description:
    "Discover how we simplify your property journey with our comprehensive services.",
};
