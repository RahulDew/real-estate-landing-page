export interface IProject {
  id: number; // Unique identifier for each project
  imgUrl: string; // Image URL
  title: string; // Project title
  description: string; // Short description of the project
  rating: string; // Project rating (e.g., "4.5/5")
  location: string; // Location of the project
}

export const projects: IProject[] = [
  {
    id: 1,
    imgUrl:
      "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    title: "Modern Urban Apartment",
    description: "A stylish urban apartment in the city center.",
    rating: "4.5/5",
    location: "New York City, NY",
  },
  {
    id: 2,
    imgUrl:
      "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
    title: "Beachside Villa",
    description: "A luxurious villa with stunning beach views.",
    rating: "4.8/5",
    location: "Malibu, CA",
  },
  {
    id: 3,
    imgUrl:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    title: "Countryside Retreat",
    description: "A peaceful retreat in the heart of the countryside.",
    rating: "4.7/5",
    location: "Napa Valley, CA",
  },
  {
    id: 4,
    imgUrl:
      "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    title: "Mountain Cabin",
    description: "A cozy cabin with breathtaking mountain views.",
    rating: "4.9/5",
    location: "Aspen, CO",
  },
  {
    id: 5,
    imgUrl:
      "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    title: "Modern Suburban House",
    description: "A spacious house in a quiet suburban area.",
    rating: "4.6/5",
    location: "Seattle, WA",
  },
];

export const projectsHeading = {
  title: "Our Projects",
  description: "Discover some of our amazing properties and designs",
};

// // // ORIGINAL FULL DATA FOR PROJECTS

// // follow below instructions to add more projects
// 1. data should be an array of objects
// 2. each object should have the following properties:
// 3. id: number (unique identifier for each project)
// 4. title of each projec should be very unique

export interface IProjectInfo {
  id: number; // Unique identifier for each project
  imgUrl: string; // Image URL
  title: string; // Project title
  description: string; // Short description of the project
  rating: string; // Project rating (e.g., "4.5/5")
  location: string; // Location of the project
  date: string; // Date of the projects
  price: string; // Price of the project
  area: string; // Area of the project

  // Add more properties here as needed
}

export const allProjectsInfo: IProjectInfo[] = [
  {
    id: 1101,
    imgUrl:
      "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    title: "Modern Urban Apartment",
    description: "A stylish urban apartment in the city center.",
    rating: "4.5/5",
    location: "New York City, NY",
    date: "2025-01-01",
    price: "$1,200,000",
    area: "1,200 sq. ft",
  },
  {
    id: 1102,
    imgUrl:
      "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
    title: "Beachside Villa",
    description: "A luxurious villa with stunning beach views.",
    rating: "4.8/5",
    location: "Malibu, CA",
    date: "2025-01-10",
    price: "$3,500,000",
    area: "3,500 sq. ft",
  },
  {
    id: 1103,
    imgUrl:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    title: "Countryside Retreat",
    description: "A peaceful retreat in the heart of the countryside.",
    rating: "4.7/5",
    location: "Napa Valley, CA",
    date: "2025-02-15",
    price: "$1,800,000",
    area: "2,500 sq. ft",
  },
  {
    id: 1104,
    imgUrl:
      "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    title: "Mountain Cabin",
    description: "A cozy cabin with breathtaking mountain views.",
    rating: "4.9/5",
    location: "Aspen, CO",
    date: "2025-03-20",
    price: "$2,100,000",
    area: "1,800 sq. ft",
  },
  {
    id: 1105,
    imgUrl:
      "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    title: "Modern Suburban House",
    description: "A spacious house in a quiet suburban area.",
    rating: "4.6/5",
    location: "Seattle, WA",
    date: "2025-04-05",
    price: "$1,500,000",
    area: "2,000 sq. ft",
  },
  {
    id: 1106,
    imgUrl:
      "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    title: "Luxury Penthouse",
    description: "An exclusive penthouse with panoramic city views.",
    rating: "5.0/5",
    location: "Chicago, IL",
    date: "2025-05-01",
    price: "$4,200,000",
    area: "4,000 sq. ft",
  },
  {
    id: 1107,
    imgUrl:
      "https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2640&q=80",
    title: "Lakefront Property",
    description: "A serene property located by the lake.",
    rating: "4.7/5",
    location: "Lake Tahoe, NV",
    date: "2025-06-10",
    price: "$2,800,000",
    area: "3,000 sq. ft",
  },
];
