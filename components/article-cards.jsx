import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import Image from "next/image";

export default function ArticleCards() {
  return (
    <section className="max-w-7xl mx-auto lg:pt-[5rem] px-4 py-10">
      <div className="grid gap-6 p-4   md:grid-cols-2 lg:p-8">
        <Card className="bg-zinc-950 text-white overflow-hidden">
          <CardContent className="p-6">
            <h2 className="text-5xl font-bold tracking-tighter mb-12">
              USEFUL
              <br />
              ARTICLES
            </h2>
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/placeholder.svg"
                alt="Profile"
                width={48}
                height={48}
                className="rounded-full"
              />
              <p className="text-xl">
                Stay in the loop and keep up with all our news and updates!
              </p>
            </div>
            <div className="flex gap-2 mt-4">
              <Input placeholder="Join us" className="bg-white text-black" />
              <Button className="bg-[#D2F34C] text-black hover:bg-[#bfdf45]">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="bg-zinc-950 text-white border border-[#F0F1EA] rounded-md">
          <CardContent className="relative p-6 pt-10 ">
            {/* <div
              className="absolute top-0 left-0 right-0 h-10 bg-[#F0F1EA]"
              style={{
                clipPath:
                  "polygon(0 0, 20% 0, 25% 100%, 100% 100%, 100% 0, 0 0)",
              }}
            /> */}
            <p className="text-sm mb-4">Website developer</p>
            <h2 className="text-4xl font-bold mb-6">Leading Brand</h2>
            <p className="text-gray-300 mb-8">
              Design as you know it is out the door. Design as you want it just
              arrived. We were looking for an agency that would help design and
              build the job platform of the future with us. Cut the Code was
              able to perfectly translate our needs into a digital experience
              that seamlessly aligns with the modern employer and jobseeker.We
              were looking for an agency that would help design and build the
              job platform of the future with us. Cut the Code was able to
              perfectly.
            </p>
            <div className="space-y-4">
              <div className="h-px bg-gray-800" />
              <div className="h-px bg-gray-800" />
              <div className="h-px bg-gray-800" />
            </div>
          </CardContent>
        </div>
      </div>
    </section>
  );
}
