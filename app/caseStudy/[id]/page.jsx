"use client";
import { useParams } from "next/navigation";
import React from "react";
import projects from "../../../data/caseStudy.json";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/footer";
const Page = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="bg-black">
      <Navbar />
      <div className="max-w-6xl  mx-auto p-6 lg:pt-[5rem] space-y-8">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="text-sm text-muted-foreground  text-white mb-2">
              the client
            </div>
            <h1 className="text-4xl md:text-5xl text-white font-bold tracking-tight">
              SELECTED CLIENT
            </h1>
          </div>
          <div className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna pellentesque sit.
          </div>
        </div>
        {/* Project Image Card  bg-gradient-to-br from-blue-50 to-orange-50*/}
        <div className="overflow-hidden ">
          <div className="relative ">
            <div className="absolute top-4 left-4 flex gap-2">
              <Badge
                variant="secondary"
                className="bg-white/80 hover:bg-white/90"
              >
                brand identity
              </Badge>
              <Badge
                variant="secondary"
                className="bg-white/80 hover:bg-white/90"
              >
                design & development
              </Badge>
            </div>
            <Image
              src="/image/Slide1.svg"
              alt="Project visualization"
              width={1600}
              height={900}
              className="object-cover"
            />
          </div>
        </div>
        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <div className="text-sm text-white mb-2">the scope</div>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm text-white">Industry:</dt>
                  <dd className="font-medium text-white">Digital Building</dd>
                </div>
                <div>
                  <dt className="text-sm text-white">Market:</dt>
                  <dd className="font-medium text-white">United Kingdom</dd>
                </div>
                <div>
                  <dt className="text-sm text-white">Deliverables:</dt>
                  <dd className="font-medium text-white">
                    Brand Assets, Responsive Website
                  </dd>
                </div>
              </dl>
            </div>
            <div>
              <div className="w-[17rem] h-[0.1rem] bg-black mb-4" />
              <div className="text-sm text-white mb-2">Visit Live Site</div>
              <Button variant="outline" className="gap-2">
                clientwebsite.com
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="text-muted-foreground text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue!
          </div>
        </div>

        <div className="w-full bg-white ">
          <Image
            src={project.img}
            alt="Project visualization"
            width={1600}
            height={900}
            className="max-w-6xl w-full"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <Card className="relative bg-black text-white p-8 flex-1">
            {/* <Quote className="absolute text-gray-700 w-12 h-12 -left-2 -top-2" /> */}
            <blockquote className="relative text-2xl font-light leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
              auctor ornare leo, non suscipit magna interdum eu.
            </blockquote>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12">
                  <Image
                    src="/image/Rectangle111.png"
                    alt="Client avatar"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Client Name</div>
                  <div className="text-sm text-gray-400">Client Position</div>
                </div>
              </div>
              <Image
                src="/image/logo.png"
                alt="Lightbox logo"
                width={100}
                height={24}
                className="opacity-80"
              />
            </div>
          </Card>
          <div className="space-y-4 w-full lg:w-80  ">
            <div className="mb-[16rem]">
              <div className="text-sm font-medium text-[#AAFF00]">
                the result
              </div>
              <h2 className="text-3xl text-white font-bold">
                Lorem ipsum dolor
              </h2>
            </div>
            <Button
              variant="outline"
              className="group bg-white text-black border-none rounded-full px-6"
            >
              next case study
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
