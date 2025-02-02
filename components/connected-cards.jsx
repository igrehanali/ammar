import { ArrowUpRight } from "lucide-react";
import { Button } from "../components/ui/button";

export default function ConnectedCards() {
  return (
    <div className=" relative min-h-0  p-4   md:p-8">
      <div className="absolute z-[0] w-[60%] h-[60%] rounded-full  top-[10%] left-[-20%]  bottom-20 blur-[10rem]  bg-[#C9EB42] opacity-40 " />
      <div className="mx-auto max-w-7xl pb-[5rem] ">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          {/* Design Card */}
          <div className="relative rounded-3xl bg-gradient-to-r from-[#090909] via-[#181818] to-[#181818]  border border-gray-500 p-8 w-full md:w-[32rem] pentagon-corner">
            <div className="mb-6">
              <h2 className="mb-4 text-3xl font-bold text-white">Design</h2>
              <p className="text-white">
                Pellentesque sit amet sapien fringilla, mattis ligula
                consectetur, ultrices mauris. Maecenas vitae mattis tellus.
                Nullam quis imperdiet augue. Vestibulum auctor ornare leo.
              </p>
            </div>
            <Button className="bg-[#D1F366] text-black hover:bg-[#bfdf5c]">
              LET&apos;S DISCUSS
            </Button>
          </div>

          {/* Development Card */}
          <div className="relative rounded-3xl bg-gradient-to-r from-[#090909] via-[#181818] to-[#181818]  border border-gray-500 p-8 w-full md:w-[23rem]">
            <div className="mb-4 flex gap-2">
              <Button
                size="icon"
                variant="ghost"
                className="h-10 w-10 rounded-full bg-white text-black hover:bg-white/90"
              >
                <ArrowUpRight className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="h-10 w-10 rounded-full bg-white text-black hover:bg-white/90"
              >
                <ArrowUpRight className="h-5 w-5" />
              </Button>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-white">Development</h2>
            <p className="text-white">
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
              ultrices mauris. Maecenas vitae mattis tellus.
            </p>
          </div>

          {/* Marketing Card */}
          <div className="relative rounded-3xl bg-gradient-to-r from-[#090909] via-[#181818] to-[#181818]  border border-gray-500 p-8 w-full md:w-[23rem]">
            <div className="mb-4 flex gap-2">
              <Button
                size="icon"
                variant="ghost"
                className="h-10 w-10 rounded-full bg-white text-black hover:bg-white/90"
              >
                <ArrowUpRight className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="h-10 w-10 rounded-full bg-white text-black hover:bg-white/90"
              >
                <ArrowUpRight className="h-5 w-5" />
              </Button>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-white">Marketing</h2>
            <p className="text-white">
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
              ultrices mauris. Maecenas vitae mattis tellus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
