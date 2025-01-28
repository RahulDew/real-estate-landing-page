import { Building2, Home, Building, Castle, Hotel } from "lucide-react";
import { Property } from "@/types";

export const properties: Property[] = [
  {
    title: "Luxury Villa",
    price: "$2.5M",
    location: "Beverly Hills",
    icon: Home,
    imageUrl:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1767&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Modern Apartment",
    price: "$850K",
    location: "Downtown",
    icon: Building2,
    imageUrl:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1767&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Penthouse Suite",
    price: "$1.8M",
    location: "Oceanfront",
    icon: Building,
    imageUrl:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1767&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Historic Mansion",
    price: "$4.2M",
    location: "Heritage District",
    icon: Castle,
    imageUrl:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1767&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Sky Residence",
    price: "$3.1M",
    location: "City Center",
    icon: Hotel,
    imageUrl:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1767&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
