"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const data = [
  {
    name: "Zuhair Younas",
    title: "UI/UX Designer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    image1: ["avatar1"],
    tag: ["Offers consultations", "Development", "Wordpress", "Webflow"],
    image: ["p1", "p2"],
    review: "653",
    orders: "799",
    servicesFrom: "US$150",
  },
  {
    name: "Ammar Younas",
    title: "App Developer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    image1: ["avatar1"],
    tag: ["Offers consultations", "Development", "Wordpress", "Webflow"],
    image: ["p3", "p4"],
    review: "653",
    orders: "799",
    servicesFrom: "US$150",
  },
  {
    name: "Hammd Younas",
    title: "Website Developer",
    image1: ["avatar1"],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    tag: ["Offers consultations", "Development", "Wordpress", "Webflow"],
    image: ["p5", "p6"],
    review: "653",
    orders: "799",
    servicesFrom: "US$150",
  },
];

const StatusItem = ({ item, isActive }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: isActive ? 1 : 0.5, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className={`cursor-pointer flex  items-center ${
      isActive ? "scale-105" : ""
    }`}
  >
    <div
      className={`w-[6rem] h-[0.1rem] ${
        isActive ? "bg-green-500" : "bg-gray-500"
      } rounded-full mb-1`}
    />
    {/* <p className="text-xs text-center">{item.name.split(" ")[0]}</p> */}
  </motion.div>
);

export default function ProfilePage() {
  const [currentWord, setCurrentWord] = useState(0);
  const [currentStatus, setCurrentStatus] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % 4);
    }, 3000); // Changed to 3 seconds for better readability
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatus((prev) => (prev + 1) % data.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen  text-white lg:pt-[6rem] p-4 md:p-8">
      <div className=" relative z-[10] max-w-7xl mx-auto  grid lg:grid-cols-3 gap-8 items-center">
        {/* Left Column - Hero Section */}

        <div className="relative   overflow-hidden space-y-8  lg:col-span-2 bg-gradient-to-r from-[#090909] via-[#181818] to-[#181818] lg:pt-[4rem] p-8 rounded-lg h-[600px] flex flex-col justify-between">
          <div className=" absolute left-[10%] top-0 w-[40rem] h-[0.1rem] bg-gradient-to-r from-[#090909]  via-white to-[#181818]" />
          <div className="relative flex-grow">
            <h1 className="relative z-30  text-4xl lg:text-7xl md:text-6xl font-bold leading-10">
              CREATE THE NEXT
              <br />
              {[
                "BIG THING",
                "SMART IDEA",
                "TECH INNOVATION",
                "COOL PROJECT",
              ].map((phrase, index) => (
                <span
                  key={phrase}
                  className={`transition-opacity duration-500 ${
                    currentWord === index ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ position: "absolute", left: 0 }}
                >
                  {phrase}
                </span>
              ))}
              <br />
              YOUR VISION,
              <br />
              OUR EXPERTISE
            </h1>

            <div className="absolute  right-0 bottom-[10rem] translate-y-1/4 w-[300px] h-[300px]">
              {[
                "/image/horse.png",
                "/image/robot.png",
                "/image/square.png",
                "/image/cool.png",
              ].map((src, index) => (
                <Image
                  key={src}
                  src={src}
                  alt={`Animation ${index + 1}`}
                  fill
                  className={`object-contain transition-opacity duration-500 ${
                    currentWord === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="w-full h-[0.1rem] bg-gradient-to-r from-[#181818]  via-white to-[#181818]" />
          <div className="space-y-4 flex justify-between items-center">
            <div className="text-xl lg:flex sm:flex-col md:text-2xl">
              <h1 className="text-4xl  md:text-6xl  font-bold">10Y</h1>
              <span className="text-xl pl-0 lg:pl-4  md:text-xl font-normal">
                OF DESIGN-DRIVEN
                <br />
                PRODUCT DEVELOPMENT
              </span>
            </div>

            <Button className="bg-[#BFFF00] text-black hover:bg-[#A6E600] px-8 py-6 text-lg rounded-full">
              Book a call
            </Button>
          </div>
        </div>

        {/* Right Column - Profile Card */}
        <Card className=" overflow-hidden relative  rounded-lg p-[0.04rem] border-none bg-gradient-to-t from-[#090909] via-[#F6F6F6] to-[#BBBBBB]">
          <div className="rounded-lg bg-gradient-to-b from-[#090909] via-[#181818] to-[#181818] border-zinc-800">
            <CardContent className="p-6 space-y-6 h-[37rem]">
              <div className="flex items-center justify-around   pb-2 h-5">
                {data.map((item, index) => (
                  <StatusItem
                    key={item.name}
                    item={item}
                    isActive={index === currentStatus}
                  />
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStatus}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Image
                        src={`/image/${data[currentStatus].image1[0]}.png`}
                        alt={`Profile picture of ${data[currentStatus].name}`}
                        width={64}
                        height={64}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl text-white font-semibold">
                        {data[currentStatus].name}
                      </h2>
                      <div className="flex items-center px-2 gap-2 border border-gray-500 rounded-md">
                        <span
                          className="w-2 h-2 bg-green-500 rounded-full"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-white">
                          Available now
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-lg text-white font-semibold mb-2">
                      {data[currentStatus].title}
                    </h3>
                    <p className="text-zinc-200">{data[currentStatus].text}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {data[currentStatus].tag.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-zinc-800 text-white hover:bg-zinc-700"
                      >
                        {skill}
                      </Badge>
                    ))}
                    <Badge
                      variant="secondary"
                      className="bg-zinc-800 text-white hover:bg-zinc-700"
                    >
                      +9
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-2 w-full max-w-[20rem] mt-4">
                    {data[currentStatus].image.map((img, index) => (
                      <div key={index} className="relative aspect-square">
                        <Image
                          src={`/image/${img}.png`}
                          alt={`Portfolio item ${index + 1}`}
                          fill
                          className="rounded-lg object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-300 mt-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Star
                          className="w-4 h-4 fill-[#BFFF00] text-[#BFFF00]"
                          // aria-hidden="true"
                        />
                        <span className="font-semibold text-white">5.0</span>
                      </div>
                      <div className="text-sm text-white">
                        {data[currentStatus].review} reviews
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-white">
                        {data[currentStatus].orders}
                      </div>
                      <div className="text-sm text-white">Orders</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-white">
                        {data[currentStatus].servicesFrom}
                      </div>
                      <div className="text-sm text-white">Services from</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </div>
        </Card>
        {/* <Card className="relative rounded-lg  p-[0.04rem]  border-none   bg-gradient-to-t from-[#090909] via-[#F6F6F6] to-[#BBBBBB]">
          <div className=" rounded-lg   bg-gradient-to-b from-[#090909] via-[#181818] to-[#181818]  border-zinc-800">
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Image
                    src="/image/avatar1.png"
                    alt="Profile picture"
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
               
                </div>
                <div>
                  <h2 className="text-xl text-white  font-semibold">
                    Ammar Younas
                  </h2>
                  <div className="flex items-center px-2 gap-2 border border-gray-500 rounded-md">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-sm text-white ">Available now</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg text-white  font-semibold mb-2">
                  Website developer
                </h3>
                <p className="text-zinc-200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="bg-zinc-800 text-white   hover:bg-zinc-700"
                >
                  Offers consultations
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-zinc-800 text-white  hover:bg-zinc-700"
                >
                  Development
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-zinc-800 text-white  hover:bg-zinc-700"
                >
                  Wordpress
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-zinc-800 text-white  hover:bg-zinc-700"
                >
                  Webflow
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-zinc-800 text-white  hover:bg-zinc-700"
                >
                  +9
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-2 w-[20rem]">
                <div className="relative  aspect-square">
                  <Image
                    src="/image/p1.png"
                    alt="Portfolio item 1"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="relative aspect-square">
                  <Image
                    src="/image/p2.png"
                    alt="Portfolio item 2"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-300">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Star className="w-4 h-4 fill-[#BFFF00] text-[#BFFF00]" />
                    <span className="font-semibold text-white">5.0</span>
                  </div>
                  <div className="text-sm text-white">653 reviews</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-white">799</div>
                  <div className="text-sm text-white">Orders</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-white">US$150</div>
                  <div className="text-sm text-white">Services from</div>
                </div>
              </div>
            </CardContent>
          </div>
        </Card> */}
      </div>
    </div>
  );
}

// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent } from "@/components/ui/card";
// import { Star } from "lucide-react";

// export default function ProfilePage() {
//   return (
//     <div className="min-h-screen bg-black text-white lg:pt-[10rem] p-4 md:p-8">
//       <div className="max-w-7xl mx-auto  grid lg:grid-cols-3 gap-8 items-center">
//         {/* Left Column - Hero Section */}
//         <div className="space-y-8 lg:col-span-2 bg-[#181818] p-8 rounded-lg h-[600px] flex flex-col justify-between">
//           <div className="relative flex-grow">
//             <h1 className="text-4xl md:text-6xl font-bold leading-tight">
//               CREATE THE NEXT
//               <br />
//               BIG THING <span className="text-[#BFFF00]">SMART</span>
//               <br />
//               YOUR VISION,
//               <br />
//               OUR EXPERTISE
//             </h1>
//             <div className="absolute right-10 bottom-10 translate-y-1/4">
//               <Image
//                 src="/image/horse.png"
//                 alt="Golden chess knight"
//                 width={300}
//                 height={300}
//                 className="object-contain"
//               />
//             </div>
//           </div>
//           <div className="space-y-4 flex justify-between items-center ">
//             <div className="text-xl flex md:text-2xl">
//               <h1 className="text-4xl  md:text-6xl  font-bold">10Y</h1>
//               <span className="text-xl pl-4 md:text-xl font-normal">
//                 OF DESIGN-DRIVEN
//                 <br />
//                 PRODUCT DEVELOPMENT
//               </span>
//             </div>

//             <Button className="bg-[#BFFF00] text-black hover:bg-[#A6E600] px-8 py-6 text-lg rounded-full">
//               Book a call
//             </Button>
//           </div>
//         </div>

//         {/* Right Column - Profile Card */}
//         <Card className="bg-zinc-900 border-zinc-800">
//           <CardContent className="p-6 space-y-6">
//             <div className="flex items-center gap-4">
//               <div className="relative">
//                 <Image
//                   src="/placeholder.svg"
//                   alt="Profile picture"
//                   width={64}
//                   height={64}
//                   className="rounded-full"
//                 />
//                 {/* <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-zinc-900" /> */}
//               </div>
//               <div>
//                 <h2 className="text-xl text-white  font-semibold">
//                   Zuhair Younas
//                 </h2>
//                 <div className="flex items-center gap-2">
//                   <span className="w-2 h-2 bg-green-500 rounded-full" />
//                   <span className="text-sm text-zinc-400">Available now</span>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <h3 className="text-lg text-white  font-semibold mb-2">
//                 Website developer
//               </h3>
//               <p className="text-zinc-400">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
//                 massa mi. Aliquam in hendrerit urna.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               <Badge
//                 variant="secondary"
//                 className="bg-zinc-800 text-white   hover:bg-zinc-700"
//               >
//                 Offers consultations
//               </Badge>
//               <Badge
//                 variant="secondary"
//                 className="bg-zinc-800 text-white  hover:bg-zinc-700"
//               >
//                 Development
//               </Badge>
//               <Badge
//                 variant="secondary"
//                 className="bg-zinc-800 text-white  hover:bg-zinc-700"
//               >
//                 Wordpress
//               </Badge>
//               <Badge
//                 variant="secondary"
//                 className="bg-zinc-800 text-white  hover:bg-zinc-700"
//               >
//                 Webflow
//               </Badge>
//               <Badge
//                 variant="secondary"
//                 className="bg-zinc-800 text-white  hover:bg-zinc-700"
//               >
//                 +9
//               </Badge>
//             </div>

//             <div className="grid grid-cols-2 gap-2 w-[20rem]">
//               <div className="relative  aspect-square">
//                 <Image
//                   src="/image/p1.png"
//                   alt="Portfolio item 1"
//                   fill
//                   className="rounded-lg object-cover"
//                 />
//               </div>
//               <div className="relative aspect-square">
//                 <Image
//                   src="/image/p2.png"
//                   alt="Portfolio item 2"
//                   fill
//                   className="rounded-lg object-cover"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-800">
//               <div className="text-center">
//                 <div className="flex items-center justify-center gap-1">
//                   <Star className="w-4 h-4 fill-[#BFFF00] text-[#BFFF00]" />
//                   <span className="font-semibold">5.0</span>
//                 </div>
//                 <div className="text-sm text-zinc-400">653 reviews</div>
//               </div>
//               <div className="text-center">
//                 <div className="font-semibold">799</div>
//                 <div className="text-sm text-zinc-400">Orders</div>
//               </div>
//               <div className="text-center">
//                 <div className="font-semibold">US$150</div>
//                 <div className="text-sm text-zinc-400">Services from</div>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }
