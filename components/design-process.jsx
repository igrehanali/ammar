import { Card, CardContent } from "../components/ui/card";

const processSteps = [
  {
    number: 1,
    title: "Research & Concepts",
    duration: "4-5 days",
    description:
      "At the outset, we explore your goals, analyze competitors, and study how customers interact with similar products.",
    deliverables: ["Style visualization", "Design concepts"],
  },
  {
    number: 2,
    title: "Wireframes",
    duration: "1.5-2 weeks",
    description:
      "Putting users first, our specialists visualize each screen of the product and turn it into a clickable prototype.",
    deliverables: ["Page structure", "Approximate layout"],
  },
  {
    number: 3,
    title: "Web/App Design & Style guide",
    duration: "1.5-2 weeks",
    description:
      "Putting users first, our specialists visualize each screen of the product and turn it into a clickable prototype.",
    deliverables: ["Page structure", "Approximate layout"],
  },
];

export default function DesignProcess() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8">
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Black folder background */}
        <div className="bg-black border rounded-3xl p-8 sm:p-12">
          {/* Header */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold tracking-tighter mb-8 sm:mb-10">
            OUR
            <br />
            EXPERTISE
          </h1>

          {/* Process Steps */}
          <div className="space-y-3">
            {processSteps.map((step) => (
              <Card
                key={step.number}
                className="border-0 lg:h-[11rem]  md:h-[12rem]  h-[20rem] overflow-hidden rounded-2xl bg-[#C9EB42]"
              >
                <CardContent className="py-4 px-6">
                  <div className="lg:grid lg:grid-cols-[2fr,2fr] gap-6 items-start">
                    <div
                      className=" lg:flex lg:flex-row
                     sm:flex-col  gap-4 items-start"
                    >
                      <div className="flex h-8 w-8 p-2 items-center justify-center rounded-full bg-black text-white text-sm font-bold">
                        {step.number}
                      </div>
                      <div>
                        <h2 className="lg:text-2xl lg:mt-0 md:mt-6 mt-6 sm:text-1xl   font-semibold leading-tight mb-0.5">
                          {step.title}
                        </h2>
                        <p className="text-sm  text-black/80">
                          {step.duration}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2 ">
                      <p className="text-sm  leading-snug">
                        {step.description}
                      </p>
                      <div className="lg:flex lg:flex-row justify-between pt-5 ">
                        <p className="text-sm mb-1.5">Deliverables:</p>
                        <div className="flex flex-wrap gap-2">
                          {step.deliverables.map((deliverable) => (
                            <span
                              key={deliverable}
                              className="inline-flex px-3 py-0.5 rounded-full border border-black/20 text-sm"
                            >
                              {deliverable}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>

    // <div className="min-h-screen text-black p-8">
    //   <div className="max-w-4xl mx-auto space-y-5">
    //     <div className="relative  min-h-[50rem]  min-w-[50rem] ">
    //       <div className="absolute inset-0">
    //         <img
    //           src="/image/blackfolder.png"
    //           className="h-full w-full object-cover"
    //           width={630}
    //           height={750}
    //           alt="robot"
    //         />
    //       </div>
    //       <h1 className=" relative z-10 text-6xl text-white font-bold tracking-tighter mb-12">
    //         DESIGN
    //         <br />
    //         PROCESS
    //       </h1>
    //       <div className="absolute top-10 inset-0 space-y-4 ">
    //         {processSteps.map((step) => (
    //           <Card
    //             key={step.number}
    //             className="relative z-10 border-0 bg-[#C9EB42] "
    //           >
    //             <CardContent className="p-6">
    //               <div className="grid gap-4 md:grid-cols-[auto,1fr]">
    //                 <div className="flex items-start gap-4">
    //                   <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#C9EB42] text-black font-bold">
    //                     {step.number}
    //                   </div>
    //                   <div className="space-y-1">
    //                     <h2 className="text-xl font-semibold">{step.title}</h2>
    //                     <p className="text-sm text-black">{step.duration}</p>
    //                   </div>
    //                 </div>
    //                 <div className="space-y-4">
    //                   <p className="text-black0">{step.description}</p>
    //                   <div className="space-y-2">
    //                     <p className="text-sm text-black">Deliverables:</p>
    //                     <div className="flex flex-wrap gap-2">
    //                       {step.deliverables.map((deliverable) => (
    //                         <span
    //                           key={deliverable}
    //                           className="px-3 py-1 text-sm rounded-full border border-[#2A2A2A] text-black]"
    //                         >
    //                           {deliverable}
    //                         </span>
    //                       ))}
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </CardContent>
    //           </Card>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
//  <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
//       <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
//         <div className="relative bg-n-8 rounded-[1rem]">
//           <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
//           <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
//             <div className="absolute inset-0 flex flex-col items-start justify-center space-y-10 z-10 p-5">
//               <h1 className="text-6xl text-white font-bold tracking-tighter text-center mb-12">
//                 DESIGN
//                 <br />
//                 PROCESS
//               </h1>
//               <div className="space-y-4">
//                 {processSteps.map((step) => (
//                   <Card
//                     key={step.number}
//                     className="relative z-10 border-0 bg-[#C9EB42] text-black"
//                   >
//                     <CardContent className="p-6">
//                       <div className="grid gap-4 md:grid-cols-[auto,1fr]">
//                         <div className="flex items-start gap-4">
//                           <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#C9EB42] text-black font-bold">
//                             {step.number}
//                           </div>
//                           <div className="space-y-1">
//                             <h2 className="text-xl font-semibold">
//                               {step.title}
//                             </h2>
//                             <p className="text-sm">{step.duration}</p>
//                           </div>
//                         </div>
//                         <div className="space-y-4">
//                           <p>{step.description}</p>
//                           <div className="space-y-2">
//                             <p className="text-sm">Deliverables:</p>
//                             <div className="flex flex-wrap gap-2">
//                               {step.deliverables.map((deliverable) => (
//                                 <span
//                                   key={deliverable}
//                                   className="px-3 py-1 text-sm rounded-full border border-[#2A2A2A]"
//                                 >
//                                   {deliverable}
//                                 </span>
//                               ))}
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
//         <img
//           src="/image/blackfolder.png"
//           className="w-full"
//           width={1558}
//           height={1288}
//         />
//       </div>
//     </div>
