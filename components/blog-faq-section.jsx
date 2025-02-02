"use client";

import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Button } from "@/components/ui/button";
// import { Plus } from "lucide-react";

const blogPosts = [
  {
    title: "Optimizing Workflow Processes for Maximum Efficiency",
    description:
      "Understand the importance of optimizing workflow processes to enhance efficiency...",
    image: "/image/project1.png",
    author: {
      name: "Joel Keneby",
      avatar: "https://i.pravatar.cc/48?img=1",
    },
  },
  {
    title: "Best Practices for Effective Project Documentation",
    description:
      "Understand the importance of optimizing workflow processes to enhance efficiency...",
    image: "/image/project2.png",
    author: {
      name: "Sarah Denis",
      avatar: "https://i.pravatar.cc/48?img=4",
    },
  },
  {
    title: "Managing Stakeholder Expectations for Project Success",
    description:
      "Understand the importance of optimizing workflow processes to enhance efficiency...",
    image: "/image/project3.png",
    author: {
      name: "Joel Keneby",
      avatar: "https://i.pravatar.cc/48?img=6",
    },
  },
];

const faqs = [
  {
    question: "Why wouldn't I just hire a full-time designer?",
    answer:
      "Hiring a full-time designer comes with additional overhead costs and long-term commitments. Our service provides flexibility, specialized expertise, and cost-effectiveness for your specific project needs.",
  },
  {
    question: "Is there a limit to how many requests I can have?",
    answer:
      "The number of requests depends on your chosen plan. Each plan comes with different request limits designed to meet various business needs.",
  },
  {
    question: "How fast will I receive my designs?",
    answer:
      "Typically, you'll receive initial designs within 48-72 hours. Complex projects may require additional time, which we'll communicate upfront.",
  },
  {
    question: "What will I receive in 48 hours?",
    answer:
      "Within 48 hours, you'll receive initial design concepts, mockups, or requested revisions depending on your project specifications.",
  },
  {
    question: "Who are the designers?",
    answer:
      "Our designers are experienced professionals with diverse backgrounds in various design disciplines, carefully selected for their expertise and creativity.",
  },
  {
    question: "How does the pause feature work?",
    answer:
      "The pause feature allows you to temporarily suspend your subscription while maintaining your account. You can resume services at any time.",
  },
];

export default function BlogFAQSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Blog Section */}
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl text-white  font-bold">
            Explore Our Blog
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Dive into our blog for expert insights, tips, and industry trends to
            elevate your project management journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl p-[0.1rem]  bg-gradient-to-t from-black via-[#F6F6F6] to-[#BBBBBB] hover:scale-[1.02]"
            >
              <div className=" bg-gradient-to-t from-[#181818] via-[#181818] to-[#090909] rounded-xl pt-1 pl-1 pr-1">
                <div className="relative   h-[16rem] w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                <div className=" space-y-4 pl-4 pb-4 pr-4 pt-4">
                  <h3 className="font-medium text-white text-[1rem] leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-sm text-white">{post.description}</p>
                  <div className="flex items-center gap-3  border-t-[0.1rem] border-dotted pt-2">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span className="text-sm text-white font-medium">
                      {post.author.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
