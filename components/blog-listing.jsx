"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ChevronRight } from "lucide-react";
import { categories, posts } from "../data";
import { useRouter } from "next/navigation";

export default function BlogListing() {
  const [activeCategory, setActiveCategory] = useState("explore all");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filter posts based on active category
  const filteredPosts = posts.filter((post) =>
    activeCategory === "explore all" ? true : post.category === activeCategory
  );

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const router = useRouter();
  return (
    <div className="min-h-screen  mx-auto max-w-7xl  p-6">
      {/* Categories */}
      <div className="flex gap-3 mb-8 flex-wrap justify-center items-center">
        {categories.map((category) => (
          <Button
            key={category}
            variant={category === activeCategory ? "default" : "ghost"}
            className={
              category === activeCategory
                ? "bg-[#c8ff00] rounded-full text-black hover:bg-[#c8ff00]/90"
                : "text-white border rounded-full"
            }
            onClick={() => {
              setActiveCategory(category);
              setCurrentPage(1); // Reset to first page when changing category
            }}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentPosts.map((post, index) => (
          <Card
            key={index}
            className="bg-zinc-900 border-zinc-100 text-white"
            onClick={() => router.push("/article")}
          >
            <div className="p-1 rounded-md">
              <div className="relative h-[16rem] w-full ">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </div>
            <div className="flex  flex-col  items-start gap-4 p-4">
              <Button className="bg-white text-black  rounded-full  hover:bg-[#c8ff00]">
                READ {post.readTime}
              </Button>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg leading-tight">
                  {post.title}
                </h3>
                <p className="text-sm text-zinc-400">{post.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      {filteredPosts.length > 0 && (
        <div className="flex justify-center items-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant="ghost"
              size="icon"
              className={
                page === currentPage
                  ? "bg-[#c8ff00] text-black hover:bg-[#c8ff00]/90 h-8 w-8"
                  : "text-white hover:bg-white/10 h-8 w-8"
              }
              onClick={() => handlePageChange(page)}
            >
              {page}
            </Button>
          ))}
          {currentPage < totalPages && (
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 h-8 w-8"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
          <Button
            variant="outline"
            size="sm"
            className="ml-2 bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700"
          >
            {totalPages} pages
          </Button>
        </div>
      )}
    </div>
  );
}
