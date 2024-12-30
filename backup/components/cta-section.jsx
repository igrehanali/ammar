import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="bg-black text-white rounded-3xl p-12 text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Ready to discuss
          <br />
          your project with us?
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Get a guided tour through Designjoy, and find out how you and your
          team can change the way you source design, forever.
        </p>
        <Button className="bg-[#DEFF4E] text-black hover:bg-[#DEFF4E]/90 transition-colors duration-300 rounded-2xl px-6 py-4">
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
