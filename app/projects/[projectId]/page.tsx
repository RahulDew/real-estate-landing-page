"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin, Home, Star, Ruler } from "lucide-react";
import { IProjectInfo, allProjectsInfo } from "@/data/projectsData";
import CalScheduler from "@/components/CalSheduler";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { replaceSpacesWithHyphens } from "@/lib/utils";
import { IconLoader2 } from "@tabler/icons-react";

const propertyData: IProjectInfo = {
  id: 1101,
  imgUrl:
    "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  title: "Modern Urban Apartment",
  description:
    "A stylish urban apartment in the city center. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae repellendus aperiam excepturi sint at soluta facilis numquam dignissimos, error vero iusto saepe eius nostrum asperiores consequuntur necessitatibus dolores nulla officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae repellendus aperiam excepturi sint at soluta facilis numquam dignissimos, error vero iusto saepe eius nostrum asperiores consequuntur necessitatibus dolores nulla officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae repellendus aperiam excepturi sint at soluta facilis numquam dignissimos, error vero iusto saepe eius nostrum asperiores consequuntur necessitatibus dolores nulla officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae repellendus aperiam excepturi sint at soluta facilis numquam dignissimos, error vero iusto saepe eius nostrum asperiores consequuntur necessitatibus dolores nulla officiis?",
  rating: "4.5/5",
  location: "New York City, NY",
  date: "2025-01-01",
  price: "$1,200,000",
  area: "1,200 sq. ft",
};

export default function ProjectDetails() {
  const [project, setProject] = useState<IProjectInfo | null>(null);
  const [loading, setLoading] = useState(true);

  const pathname = usePathname();
  const projectId = pathname ? pathname.split("/").pop() : null;

  console.log(projectId);

  useEffect(() => {
    // Simulate data fetching
    const fetchData = async () => {
      setLoading(true);
      if (!projectId) {
        setProject(null);
        setLoading(false);
        return;
      }
      const foundProject = allProjectsInfo.find(
        (p) =>
          replaceSpacesWithHyphens(p.title) ===
          replaceSpacesWithHyphens(projectId || "")
      );
      setProject(foundProject || null);
      setLoading(false);
    };

    fetchData();
  }, [projectId]);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <>
        {loading ? (
          <div className="flex items-center justify-center h-[80vh]">
            <IconLoader2
              size={30}
              className="w-12 h-12 text-primary animate-spin"
            />
          </div>
        ) : project === null || !projectId ? (
          <div className="mt-20 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Project Not Found
            </h1>
            <p className="text-lg text-foreground/75">
              The project you are looking for does not exist.
            </p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto bg-background text-foreground rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Hero Image */}
            <div className="relative h-[60vh] w-full">
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative h-full w-full"
              >
                <Image
                  src={project.imgUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/20" />
              </motion.div>

              {/* Price Tag */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute bottom-6 right-6 bg-background px-6 py-3 rounded-full shadow-lg"
              >
                <span className="text-2xl font-bold text-primary">
                  {project.price}
                </span>
              </motion.div>
            </div>

            <div className="p-8">
              {/* Title and Rating */}
              <div className="flex justify-between items-start mb-6">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-4xl font-bold text-foreground"
                >
                  {project.title}
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full"
                >
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="font-semibold">{project.rating}</span>
                </motion.div>
              </div>

              {/* Property Details Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
              >
                <div className="flex items-center gap-3 opacity-75">
                  <MapPin className="w-5 h-5" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-3 opacity-75">
                  <Calendar className="w-5 h-5" />
                  <span>Available from {project.date}</span>
                </div>
                <div className="flex items-center gap-3 opacity-75">
                  <Ruler className="w-5 h-5" />
                  <span>{project.area}</span>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <h2 className="text-2xl font-semibold mb-4">
                  About this property
                </h2>
                <p className=" opacity-75 leading-relaxed whitespace-pre-line">
                  {project.description}
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-8"
              >
                <CalScheduler
                  label="Schedule a call"
                  className="w-full md:w-auto bg-primary text-white px-8 rounded-lg text-lg font-semibold flex items-center justify-center gap-2"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </>
    </div>
  );
}
