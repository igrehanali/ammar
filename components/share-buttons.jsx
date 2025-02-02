"use client";

import { Facebook, Linkedin, Twitter, LinkIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import { toast } from "../hooks/use-toast";

export function ShareButtons() {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleShare = async (platform) => {
    const shareData = {
      title: "What is energy resilience?",
      url: shareUrl,
    };

    switch (platform) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            shareUrl
          )}`
        );
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            shareUrl
          )}`
        );
        break;
      case "copy":
        try {
          await navigator.clipboard.writeText(shareUrl);
          toast({
            title: "Link copied",
            description: "The article link has been copied to your clipboard",
          });
        } catch (err) {
          console.error("Failed to copy:", err);
        }
        break;
    }
  };
  // fixed left-4 top-1/3
  return (
    <div className="  fixed left-4 top-1/3  flex flex-col gap-4">
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full bg-white"
        onClick={() => handleShare("twitter")}
      >
        <Twitter className="h-5 w-5" />
        <span className="sr-only">Share on Twitter</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full  bg-white"
        onClick={() => handleShare("linkedin")}
      >
        <Linkedin className="h-5 w-5" />
        <span className="sr-only">Share on LinkedIn</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full  bg-white"
        onClick={() => handleShare("facebook")}
      >
        <Facebook className="h-5 w-5" />
        <span className="sr-only">Share on Facebook</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full  bg-white"
        onClick={() => handleShare("copy")}
      >
        <LinkIcon className="h-5 w-5" />
        <span className="sr-only ">Copy link</span>
      </Button>
    </div>
  );
}
