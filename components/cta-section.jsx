"use client";
import { Button } from "../components/ui/button";
import { useRouter } from "next/navigation";

export default function CTASection() {
  const router = useRouter();
  return (
    <section className="relative z-[10] max-w-6xl mx-auto px-4 py-12">
      <div className="bg-gradient-to-t border border-zinc-500 from-[#181818] via-[#181818] to-[#090909] text-white rounded-3xl p-12 text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Ready to discuss
          <br />
          your project with us?
        </h2>
        <p className="text-gray-100 max-w-xl mx-auto">
          Get a guided tour through Designjoy, and find out how you and your
          team can change the way you source design, forever.
        </p>
        <Button
          className="bg-[#DEFF4E] text-black hover:bg-[#DEFF4E]/90 transition-colors duration-300 rounded-2xl px-6 py-4 "
          onClick={() => router.push("/contactus")}
        >
          CONTACT US
        </Button>
        <div className="flex items-center justify-center gap-8 pt-4">
          <div className="flex items-center gap-2">
            <img src="/image/clutch.png" alt="Clutch" className="h-10" />
          </div>
          <div className="flex items-center gap-2">
            <img src="/image/upwork.png" alt="Upwork" className="h-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
