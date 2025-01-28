"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Calendar,
  MapPin,
  Home,
  Star,
  Ruler,
  ArrowRight,
  Tag,
  User,
} from "lucide-react";
import { IProjectInfo, allProjectsInfo } from "@/data/projectsData";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { replaceSpacesWithHyphens } from "@/lib/utils";
import { IconLoader2, IconUser } from "@tabler/icons-react";
import { blogPosts, IBlogPost } from "@/data/blogpostData";

export default function ProjectDetails() {
  const [blogDetails, setBlogDetails] = useState<IBlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  const pathname = usePathname();
  const blogId = pathname ? pathname.split("/").pop() : null;

  console.log(blogId);

  useEffect(() => {
    // Simulate data fetching
    const fetchData = async () => {
      setLoading(true);
      if (!blogId) {
        setBlogDetails(null);
        setLoading(false);
        return;
      }
      const foundBlog = blogPosts.find(
        (blog) =>
          replaceSpacesWithHyphens(blog.title) ===
          replaceSpacesWithHyphens(blogId || "")
      );
      setBlogDetails(foundBlog || null);
      setLoading(false);
    };

    fetchData();
  }, [blogId]);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <>
        {loading ? (
          <div className="flex items-center justify-center h-[80vh]">
            <IconLoader2
              size={30}
              className="w-12 h-12 text-primary animate-spin"
            />
          </div>
        ) : blogDetails === null || !blogId ? (
          <div className="mt-20 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Project Not Found
            </h1>
            <p className="text-lg text-foreground/75">
              The project you are looking for does not exist.
            </p>
          </div>
        ) : (
          // main content
          <main className="pt-24 pb-16 text-foreground bg-background">
            {/* Featured Article */}
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <span className="px-4 py-1 bg-secondary text-black font-semibold rounded-full text-sm">
                        {blogDetails.category}
                      </span>
                      <span className="flex items-center text-foregroundSecondary text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {blogDetails.location}
                      </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                      {blogDetails.title}
                    </h1>
                    <p className="text-xl text-foregroundSecondary">
                      {blogDetails.description}
                    </p>
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <IconUser size={28} className="text-white" />
                        <div className="space-y-1">
                          <p className="text-sm font-medium ">
                            {blogDetails.author}
                          </p>
                          <p className="text-sm text-foregroundSecondary">
                            Property Expert
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center ">
                        <Calendar className="w-5 h-5 mr-2" />
                        <span className="text-sm">
                          {new Date(blogDetails.createdAt).toLocaleDateString(
                            "en-US",
                            {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            }
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                      <img
                        src={blogDetails.featuredImage}
                        alt={blogDetails.title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -bottom-4 -left-4 bg-secondary p-4 rounded-xl shadow-lg">
                      <Tag className="w-6 h-6 text-black" />
                      <p className="mt-2 font-medium text-black">
                        {blogDetails.propertyType}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Article Content */}
                <div className="mt-16 max-w-4xl mx-auto">
                  <div className="prose prose-lg">
                    {blogDetails.content.split("\n").map((paragraph, index) => (
                      <p key={index}>{paragraph.trim()}</p>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="mt-12 flex flex-wrap gap-3">
                    {blogDetails.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-4 py-2 rounded-full bg-secondary cursor-pointer"
                      >
                        <span className="text-sm text-black">#{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        )}
      </>
    </div>
  );
}
