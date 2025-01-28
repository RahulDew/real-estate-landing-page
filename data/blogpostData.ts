export interface IBlogPost {
  title: string;
  description: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  featuredImage: string;
  isPublished: boolean;
  location: string;
  propertyType: string;
}

export const blogPosts: IBlogPost[] = [
  {
    title: "Luxury Villa for Sale in Prime Location",
    description:
      "A modern villa with breathtaking views in a prestigious neighborhood.",
    content: `
      This spacious villa features 5 bedrooms, a private pool, and an expansive garden. The perfect home for those seeking luxury and comfort in a highly desirable location.
      - 5 Bedrooms
      - 6 Bathrooms
      - Smart home technology
      - Spacious terrace with panoramic views

      Contact us today for more details and to schedule a private showing!`,
    author: "John Doe",
    category: "For Sale",
    tags: ["villa", "luxury", "real estate"],
    createdAt: new Date("2025-01-10T10:00:00Z"),
    updatedAt: new Date("2025-01-13T12:00:00Z"),
    featuredImage:
      "https://images.unsplash.com/photo-1522049706244-89c107bbc968?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isPublished: true,
    location: "Downtown, City Center, Country",
    propertyType: "Villa",
  },
  {
    title: "Understanding Property Investment in 2025",
    description:
      "A comprehensive guide to property investment strategies and trends for 2025.",
    content: `
      Investing in property remains one of the most reliable ways to build wealth. In this article, we break down the key strategies to maximize returns on your property investments this year.
      - Choosing the right location
      - Residential vs commercial properties
      - Understanding market trends
      - The importance of property management

      Learn how to make informed decisions for long-term growth in the real estate market.`,
    author: "Emily Green",
    category: "Investment Advice",
    tags: ["investment", "real estate"],
    createdAt: new Date("2025-01-15T08:00:00Z"),
    updatedAt: new Date("2025-01-15T08:30:00Z"),
    featuredImage:
      "https://images.unsplash.com/photo-1523281865257-87b910862edf?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isPublished: true,
    location: "Citywide, Country",
    propertyType: "Investment",
  },
  {
    title: "Building a Dream Home: Key Considerations",
    description:
      "Planning your dream home? Here's what to keep in mind when working with a building company.",
    content: `
      Building a home is a major undertaking, and it's essential to work with professionals who can bring your vision to life. In this article, we highlight key considerations when planning your dream home:
      - Budget and financing options
      - Choosing the right materials
      - Timeframe and project management
      - Working with architects and contractors

      Our team is ready to help turn your dream home into reality.`,
    author: "Sarah Lee",
    category: "Home Building",
    tags: ["dream home", "building company", "construction"],
    createdAt: new Date("2025-01-18T11:00:00Z"),
    updatedAt: new Date("2025-01-18T11:30:00Z"),
    featuredImage:
      "https://images.unsplash.com/photo-1462396240927-52058a6a84ec?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isPublished: true,
    location: "Nationwide",
    propertyType: "Building",
  },
  {
    title: "Affordable Housing Projects in the City",
    description:
      "Discover new affordable housing projects that cater to various budgets and needs.",
    content: `
      Our company is committed to providing affordable housing solutions for individuals and families. Explore some of our latest projects that balance cost with quality:
      - 2-3 Bedroom Apartments
      - Energy-efficient designs
      - Community-centered amenities

      Reach out to us for more information on availability and pricing.`,
    author: "Laura Brown",
    category: "For Sale",
    tags: ["affordable housing", "apartments"],
    createdAt: new Date("2025-01-20T10:30:00Z"),
    updatedAt: new Date("2025-01-20T11:00:00Z"),
    featuredImage:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isPublished: true,
    location: "Citywide, Country",
    propertyType: "Apartment",
  },
  {
    title: "Renovating Your Kitchen: Top Design Trends",
    description:
      "Thinking of renovating your kitchen? Here are the top design trends for 2025.",
    content: `
      From smart appliances to minimalist designs, kitchen renovations are evolving. Here are some of the top trends for this year:
      - Smart kitchens with integrated technology
      - Open shelving and modern finishes
      - Eco-friendly materials

      Let us help you renovate your dream kitchen today!`,
    author: "Thomas Green",
    category: "Renovation",
    tags: ["kitchen renovation", "home improvement"],
    createdAt: new Date("2025-01-12T14:00:00Z"),
    updatedAt: new Date("2025-01-12T14:30:00Z"),
    featuredImage:
      "https://images.unsplash.com/photo-1547420242-96597f83190f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
    isPublished: true,
    location: "Citywide",
    propertyType: "Kitchen",
  },
];
