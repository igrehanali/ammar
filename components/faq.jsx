"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

export default function FAQSection() {
  // const [openItems, setOpenItems] = useState<{[key: string]: boolean}>({})

  // const toggleItem = (id: string) => {
  //   setOpenItems(prev => ({
  //     ...prev,
  //     [id]: !prev[id]
  //   }))
  // }
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const faqs = [
    {
      id: "1",
      question: "Why wouldn't I just hire a full-time designer?",
      answer:
        "Our service provides flexible design solutions without the overhead of a full-time hire. Get professional designs when you need them.",
    },
    {
      id: "2",
      question: "Is there a limit to how many requests I can have?",
      answer:
        "We offer different plans with varying request limits to suit your needs.",
    },
    {
      id: "3",
      question: "How fast will I receive my designs?",
      answer: "Most designs are delivered within 24-48 hours of submission.",
    },
    {
      id: "4",
      question: "What will I receive in 48 hours?",
      answer:
        "You'll receive the initial design concepts and assets for your review.",
    },
    {
      id: "5",
      question: "Who are the designers?",
      answer:
        "Our designers are experienced professionals vetted through a rigorous selection process.",
    },
    {
      id: "6",
      question: "How does the pause feature work?",
      answer: "You can pause your subscription anytime and resume when needed.",
    },
  ];
  // min - h - screen;
  return (
    <div className=" relative z-[10] text-white px-6 py-16 md:p-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Commonly
          <br />
          asked questions
        </h2>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
          {/* Left column */}
          <div className="space-y-4 ">
            {faqs.slice(0, 6).map((faq) => (
              <div
                key={faq.id}
                className="border border-white rounded-md bg-gradient-to-r from-[#090909] via-[#181818] to-[#181818] "
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full flex items-center justify-between py-3 px-5 text-left group"
                >
                  <span className="text-base">{faq.question}</span>
                  <Plus
                    className={`h-5 w-5 flex-shrink-0 transition-transform duration-200 
                    ${openItems[faq.id] ? "rotate-45" : ""}`}
                  />
                </button>
                {openItems[faq.id] && (
                  <div className="pb-5 px-5 text-zinc-100">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="space-y-4">
            {faqs.slice(0, 6).map((faq) => (
              <div
                key={`right-${faq.id}`}
                className="border border-white rounded-md bg-gradient-to-r from-[#090909] via-[#181818] to-[#181818] "
              >
                <button
                  onClick={() => toggleItem(`right-${faq.id}`)}
                  className="w-full flex items-center justify-between py-3  px-5 text-left group"
                >
                  <span className="text-base">{faq.question}</span>
                  <Plus
                    className={`h-5 w-5 flex-shrink-0 transition-transform duration-200 
                    ${openItems[`right-${faq.id}`] ? "rotate-45" : ""}`}
                  />
                </button>
                {openItems[`right-${faq.id}`] && (
                  <div className="pb-5 px-5 text-zinc-100 ">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
