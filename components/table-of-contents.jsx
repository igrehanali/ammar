"use client";
import { Button } from "../components/ui/button";

import { Clock } from "lucide-react";

export function TableOfContents() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className=" space-y-8 border rounded-2xl p-4 bg-gradient-to-r from-[#090909] via-[#181818] to-[#181818] ">
      <div className="flex items-center gap-4 ">
        <img
          src="/image/avatar1.png"
          alt="Author avatar"
          className="h-10 w-10 rounded-full"
        />
        <div>
          <p className="font-medium text-white">Emma Johnson</p>
          <p className="text-sm text-white">Founder & CEO, Innovatech</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Table of contents</h2>
        <nav className="space-y-2">
          <button
            onClick={() => scrollToSection("first-steps")}
            className="text-sm text-white hover:text-[#DEFF4E] w-full text-left"
          >
            1. First steps
          </button>
          <button
            onClick={() => scrollToSection("main-steps")}
            className="text-sm text-white hover:text-[#DEFF4E] w-full text-left"
          >
            2. The main steps of product development
          </button>
          <button
            onClick={() => scrollToSection("real-life")}
            className="text-sm text-white hover:text-[#DEFF4E] w-full text-left"
          >
            3. How the product development process works in real life
          </button>
          <button
            onClick={() => scrollToSection("conclusion")}
            className="text-sm text-white hover:text-[#DEFF4E] w-full text-left"
          >
            4. Conclusion
          </button>
        </nav>
      </div>

      <div className="flex text-white items-center gap-2 text-sm text-muted-foreground">
        <Clock className="h-4 w-4" />
        <span>18 MIN READ</span>
      </div>

      <Button className="w-full" variant="outline">
        Contact an expert
        <span className="ml-2">→</span>
      </Button>
    </div>
    // <div className=" fixed right-4  bottom-0 w-72 overflow-y-auto py-4">
    //   <div className="mb-6 flex items-center gap-4">
    //     <Avatar>
    //       <AvatarImage src="/placeholder.svg" alt="Emma Johnson" />
    //       <AvatarFallback>EJ</AvatarFallback>
    //     </Avatar>
    //     <div>
    //       <div className="font-semibold">Emma Johnson</div>
    //       <div className="text-sm text-muted-foreground">
    //         Founder & CEO, Innovatech
    //       </div>
    //     </div>
    //   </div>
    //   <Card>
    //     <CardHeader>
    //       <CardTitle>Table of contents</CardTitle>
    //     </CardHeader>
    //     <CardContent>
    //       <nav className="flex flex-col space-y-2">
    //         <a href="#first-steps" className="text-sm hover:underline">
    //           1. First steps
    //         </a>
    //         <a href="#main-stages" className="text-sm hover:underline">
    //           2. The main stages of product development
    //         </a>
    //         <a href="#real-life" className="text-sm hover:underline">
    //           3. How the product development process works in real life
    //         </a>
    //         <a href="#conclusion" className="text-sm hover:underline">
    //           4. Conclusion
    //         </a>
    //       </nav>
    //     </CardContent>
    //   </Card>
    //   <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
    //     <Clock className="h-4 w-4" />
    //     <span>18 MIN READ</span>
    //   </div>
    //   <Button className="mt-6 w-full" variant="outline">
    //     Contact an expert
    //   </Button>
    // </div>
  );
}
