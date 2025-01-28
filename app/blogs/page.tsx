import React from "react";
import { blogPosts, IBlogPost } from "@/data/blogpostData";
import { BlogCard } from "@/components/ui/blog-card";

export default function BlogsSection() {
  return (
    <section
      id="services"
      className="w-full space-y-5 py-16 px-5 md:px-16 bg-bgSecondary mt-14"
    >
      {/* Heading */}
      <div className="text-left mx-auto mb-14 text-foreground">
        <h2 className="text-4xl font-extrabold ">Our Blogs</h2>
        <p className="mt-4 text-lg font-semibold text-foregroundSecondary">
          Helps you to get the best deals, knowlage and much more
        </p>
      </div>
      {/* Blogs */}
      <div className="flex justify-center items-center flex-wrap gap-5 md:gap-10">
        {blogPosts.map((blog: IBlogPost, index) => (
          <div key={index} className="flex flex-col items-start gap-5">
            <BlogCard
              author={blog.author}
              category={blog.category}
              createdAt={blog.createdAt}
              description={blog.description}
              featuredImage={blog.featuredImage}
              tags={blog.tags}
              title={blog.title}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
