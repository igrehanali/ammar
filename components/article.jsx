import Image from "next/image";
import { ShareButtons } from "./share-buttons";
import { TableOfContents } from "./table-of-contents";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export function Article() {
  return (
    // <div className="min-h-screen bg-[#F0F1EA] text-black">
    //   <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
    //     <div className="relative">
    //       <ShareButtons />
    //       <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
    //         <div className="lg:col-span-8 lg:col-start-3">
    //           <div className="prose prose-invert max-w-none">
    //             <h1 className="mb-8 text-4xl font-bold">
    //               What is energy resilience?
    //             </h1>
    //             <p className="text-lg leading-relaxed">
    //               Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
    //               suspendisse morbi eleifend faucibus eget vestibulum felis.
    //               Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
    //               Mauris posuere vulputate arcu amet, vitae nisi, tellus
    //               tincidunt. At feugiat sapien varius id.
    //             </p>

    //             <h2 id="first-steps" className="text-2xl font-bold mt-12 mb-6">
    //               1. First steps
    //             </h2>
    //             <p className="text-lg leading-relaxed">
    //               Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
    //               suspendisse morbi eleifend faucibus eget vestibulum felis.
    //               Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
    //               Mauris posuere vulputate arcu amet, vitae nisi, tellus
    //               tincidunt.
    //             </p>

    //             <h2 id="main-steps" className="text-2xl font-bold mt-12 mb-6">
    //               2. The main steps of product development
    //             </h2>
    //             <p className="text-lg leading-relaxed">
    //               Eget quis mi enim, leo lacinia pharetra, semper. Eget in
    //               volutpat mollis at volutpat lectus velit, sed auctor.
    //               Porttitor fames arcu quis fusce augue enim. Quis at habitant
    //               diam at.
    //             </p>

    //             <figure className="my-8">
    //               <img
    //                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-10%20at%2011.27.38%E2%80%AFAM-Un1GqBwNoqWMJSmfNGMGiQ49XvbqVp.png"
    //                 alt="Two people discussing in an office"
    //                 className="aspect-video w-full rounded-lg object-cover"
    //               />
    //               <figcaption className="mt-2 text-center text-sm text-gray-400">
    //                 Image caption goes here
    //               </figcaption>
    //             </figure>

    //             <h2 id="real-life" className="text-2xl font-bold mt-12 mb-6">
    //               3. How the product development process works in real life
    //             </h2>
    //             <p className="text-lg leading-relaxed">
    //               Suscipit tristique risus, at donec. In turpis vel et quam
    //               imperdiet. Ipsum molestie aliquet sodales id. Mi tincidunt
    //               elit, id quisque ligula ac diam, amet. Vel etiam suspendisse
    //               morbi eleifend faucibus eget vestibulum felis.
    //             </p>

    //             <h2 id="conclusion" className="text-2xl font-bold mt-12 mb-6">
    //               4. Conclusion
    //             </h2>
    //             <p className="text-lg leading-relaxed">
    //               Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
    //               Mauris posuere vulputate arcu amet, vitae nisi, tellus
    //               tincidunt. At feugiat sapien varius id. Eget quis mi enim, leo
    //               lacinia pharetra, semper.
    //             </p>
    //           </div>
    //         </div>

    //         <div className="lg:col-span-2 lg:col-start-11">
    //           <div className="sticky top-8">
    //             <TableOfContents />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="min-h-screen  text-black">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="relative">
          <ShareButtons />
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="col-span-2">
              <div className="prose prose-invert max-w-none">
                <h1 className="mb-8 text-4xl text-white font-bold">
                  What is energy resilience?
                </h1>
                <p className="text-lg text-white leading-relaxed">
                  Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
                  suspendisse morbi eleifend faucibus eget vestibulum felis.
                  Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
                  Mauris posuere vulputate arcu amet, vitae nisi, tellus
                  tincidunt. At feugiat sapien varius id.
                </p>

                <h2
                  id="first-steps"
                  className="text-2xl text-white font-bold mt-12 mb-6"
                >
                  1. First steps
                </h2>
                <p className="text-lg  text-white leading-relaxed">
                  Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
                  suspendisse morbi eleifend faucibus eget vestibulum felis.
                  Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
                  Mauris posuere vulputate arcu amet, vitae nisi, tellus
                  tincidunt.
                </p>

                <h2
                  id="main-steps"
                  className="text-2xl text-white font-bold mt-12 mb-6"
                >
                  2. The main steps of product development
                </h2>
                <p className="text-lg text-white leading-relaxed">
                  Eget quis mi enim, leo lacinia pharetra, semper. Eget in
                  volutpat mollis at volutpat lectus velit, sed auctor.
                  Porttitor fames arcu quis fusce augue enim. Quis at habitant
                  diam at.
                </p>

                <figure className="my-8">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-10%20at%2011.27.38%E2%80%AFAM-Un1GqBwNoqWMJSmfNGMGiQ49XvbqVp.png"
                    alt="Two people discussing in an office"
                    className="aspect-video w-full rounded-lg object-cover"
                  />
                  <figcaption className="mt-2 text-center text-sm text-white">
                    Image caption goes here
                  </figcaption>
                </figure>

                <h2
                  id="real-life"
                  className="text-2xl text-white font-bold mt-12 mb-6"
                >
                  3. How the product development process works in real life
                </h2>
                <p className="text-lg text-white leading-relaxed">
                  Suscipit tristique risus, at donec. In turpis vel et quam
                  imperdiet. Ipsum molestie aliquet sodales id. Mi tincidunt
                  elit, id quisque ligula ac diam, amet. Vel etiam suspendisse
                  morbi eleifend faucibus eget vestibulum felis.
                </p>

                <h2 id="conclusion" className="text-2xl font-bold mt-12 mb-6">
                  4. Conclusion
                </h2>
                <p className="text-lg text-white leading-relaxed">
                  Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
                  Mauris posuere vulputate arcu amet, vitae nisi, tellus
                  tincidunt. At feugiat sapien varius id. Eget quis mi enim, leo
                  lacinia pharetra, semper.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky  top-[4rem]">
                <TableOfContents />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
