import React from "react";
import { Eye, Tag } from "lucide-react";
import { IconTag, IconUser } from "@tabler/icons-react";
import Link from "next/link";
import { replaceSpacesWithHyphens } from "@/lib/utils";

interface BlogCardProps {
  title: string;
  description: string;
  author: string;
  category: string;
  tags: string[];
  createdAt: Date;
  featuredImage: string;
}

export function BlogCard({
  title,
  description,
  author,
  category,
  tags,
  createdAt,
  featuredImage,
}: BlogCardProps) {
  return (
    <Link
      href={`/blogs/${replaceSpacesWithHyphens(title)}`}
      className="w-[400px] overflow-hidden rounded-xl shadow-lg border-2 border-transparent hover:border-primary duration-300"
    >
      <div className="relative">
        <img
          src={featuredImage}
          alt={title}
          className="w-full h-64 object-cover"
        />
        <span className="absolute top-4 right-4 bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
          {category}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="text-sm text-foregroundSecondary">
            {createdAt.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <div className="flex items-center gap-1">
            <IconUser size={23} className="text-white" />
            <span className="font-semibold">{author}</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-3">{title}</h2>
        <p className="text-foregroundSecondary mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 bg-secondary text-white font-semibold rounded-full text-xs"
            >
              <IconTag size={17} className="mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
