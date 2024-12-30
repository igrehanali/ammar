"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const blogPosts = [
  {
    title: "Optimizing Workflow Processes for Maximum Efficiency",
    description:
      "Understand the importance of optimizing workflow processes to enhance efficiency. Learn techniques f...",
    image: "/image/project1.png",
    author: {
      name: "Joel Keneby",
      avatar: "https://i.pravatar.cc/48?img=1",
    },
  },
  {
    title: "Best Practices for Effective Project Documentation",
    description:
      "Understand the importance of optimizing workflow processes to enhance efficiency. Learn techniques f...",
    image: "/image/project2.png",
    author: {
      name: "Sarah Denis",
      avatar: "https://i.pravatar.cc/48?img=4",
    },
  },
  {
    title: "Managing Stakeholder Expectations for Project Success",
    description:
      "Understand the importance of optimizing workflow processes to enhance efficiency. Learn techniques f...",
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
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="space-y-16">
        {/* Blog Section */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Explore Our Blog</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dive into our blog for expert insights, tips, and industry trends
              to elevate your project management journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative aspect-[3/2]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-semibold text-lg leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span className="text-sm font-medium">
                      {post.author.name}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Commonly asked questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-muted-foreground/20"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="text-lg font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="bg-black text-white p-8 rounded-lg flex flex-col items-center text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
              <Plus className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-semibold">
              Book a 15-minute intro call
            </h3>
            <Button className="bg-[#DEFF4E] text-black hover:bg-[#DEFF4E]/90 transition-colors duration-300">
              Schedule now
            </Button>
            <p className="text-sm text-gray-400">
              Prefer to email? BlackBite@gmail
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
