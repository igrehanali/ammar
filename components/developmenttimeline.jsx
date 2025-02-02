import { Button } from "./ui/button";

export default function DevelopmentTimeline({ text, workshop }) {
  return (
    <div className=" relative max-w-7xl mx-auto">
      <div className="absolute z-[0] w-[60%] h-[60%] rounded-full  top-[-10%] right-[-40%]  bottom-20 blur-[10rem]  bg-[#C9EB42] opacity-40 " />
      <div className=" relative z-[10] space-y-6">
        {/* Header Section */}
        {text && (
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-16 md:mb-24 max-w-5xl mx-auto leading-tight">
            Quick process
            <br /> to transform your ideas into impactful results
          </h1>
        )}
        <div className=" lg:flex lg:flex-row sm:flex-col justify-between items-start">
          <div className="inline-block border rounded-full">
            <div className="px-6 py-2 text-white rounded-full border border-black text-sm">
              DEVELOPMENT PROCESS
            </div>
          </div>

          <h2 className="text-4xl text-white  font-medium max-w-3xl">
            Our structured and systematic approach allows us to streamline
            workflows, maintain transparency, and consistently deliver
            outstanding results for each project.
          </h2>
        </div>
        {/* Timeline Section */}
        <div className="relative mt-16 pb-16">
          {/* Vertical line */}
          <div className=" hidden sm:block absolute left-0 top-0 bottom-0 w-px bg-gray-700" />
          <div className="hidden sm:block absolute left-[13rem] top-0 bottom-0 w-px bg-gray-700" />
          <div className="hidden sm:block  absolute left-[38rem] top-0 bottom-0 w-px bg-gray-700" />
          <div className="hidden sm:block absolute left-[52rem] top-0 bottom-0 w-px bg-gray-700" />
          <div className=" hidden sm:block absolute left-[68rem] top-0 bottom-0 w-px bg-gray-700" />

          {/* Timeline Items */}
          <div className="relative grid lg:grid-cols-6 grid-cols-1 ">
            {/* Column 1: Design */}
            <div className="flex flex-col items-center">
              <div className="text-sm font-medium  text-white  mb-2">
                DESIGN
              </div>
              <div className="inline-flex items-center justify-center w-[6rem] h-10 rounded-full bg-gradient-to-r from-blue-400 to-green-400 text-white">
                <PlusIcon className="w-5 h-5 text-black bg-white rounded-full" />
              </div>
            </div>

            {/* Column 2-3: Testing and Development */}
            <div className="col-span-2 flex flex-col items-end  space-y-4">
              <div className="">
                <div className="text-sm text-center text-white  font-medium mb-2">
                  TESTING
                </div>
                <div className="inline-flex items-center justify-center w-[18rem] h-10 rounded-full bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 text-white">
                  <PlusIcon className="w-5 h-5 text-black bg-white rounded-full" />
                </div>
              </div>
              <div className="w-full">
                <div className="inline-flex items-center justify-center w-full h-10 rounded-full bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 text-white">
                  <PlusIcon className="w-5 h-5 text-black bg-white rounded-full" />
                </div>
                <div className="text-sm text-center text-white  font-medium mb-2">
                  DEVELOPMENT
                </div>
              </div>
            </div>

            {/* Column 4: Release */}
            <div className="flex flex-col justify-end items-center">
              <div className="inline-flex items-center justify-center w-[8rem] h-10 rounded-full bg-gradient-to-r from-blue-400 to-green-400 text-white">
                <PlusIcon className="w-5 h-5 text-black bg-white rounded-full" />
              </div>
              <div className="text-sm font-medium text-white  mb-2">
                RELEASE
              </div>
            </div>

            {/* Column 5: Users' Feedback */}
            <div className="flex flex-col justify-end  items-center">
              <div className="inline-flex items-center justify-center w-[10rem] h-10 rounded-full bg-gradient-to-r from-green-400 to-yellow-400 text-white">
                <PlusIcon className="w-5 h-5 text-black bg-white rounded-full" />
              </div>
              <div className="text-sm font-medium text-white  mb-2">
                USERS' FEEDBACK
              </div>
            </div>

            {/* Column 6: Scaling */}
            <div className="flex flex-col items-center">
              <div className="text-sm font-medium text-white  mb-2">
                SCALING
              </div>
              <div className="inline-flex items-center justify-center w-[10rem] h-10 rounded-full bg-gradient-to-r from-orange-400 to-red-400 text-white">
                <PlusIcon className="w-5 h-5 text-black bg-white rounded-full" />
              </div>
            </div>
          </div>
        </div>
        {workshop && (
          <div className="  p-4 flex items-center justify-center">
            <div
              className="w-full max-w-7xl rounded-[32px] bg-[#C9EB42] p-12 text-center"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="space-y-8">
                <p className="text-sm font-medium uppercase tracking-wider">
                  STEP 1: FREE WORKSHOP
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-5xl mx-auto">
                  Join our expert-led workshop to map a clear path for your
                  business growth. We offer a tailored strategy so you can move
                  forward with your success.
                </h2>
                <Button
                  variant="default"
                  className="bg-black text-white hover:bg-black/90 rounded-full px-8"
                >
                  LET'S DISCUSS
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function PlusIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
//  <div className="max-w-6xl mx-auto p-6 ">
//    <div className="space-y-12">
//      {/* Header Section */}
//      <div className="space-y-6">
//        <div className="inline-block">
//          <div className="px-6 py-2 rounded-full border border-black text-sm">
//            DEVELOPMENT PROCESS
//          </div>
//        </div>
//        <h2 className="text-4xl font-medium max-w-3xl">
//          Our structured and systematic approach allows us to streamline
//          workflows, maintain transparency, and consistently deliver outstanding
//          results for each project.
//        </h2>
//      </div>

//      {/* Timeline Section */}
//      <div className="relative mt-16 pb-16">
//        {/* Vertical line */}
//        <div className="absolute left-24 top-0 bottom-0 w-px bg-gray-200" />

//        {/* Timeline Items */}
//        <div className="relative grid grid-cols-5 gap-4">
//          {/* Column 1: Design */}
//          <div className="flex flex-col items-center">
//            <div className="text-sm font-medium mb-2">DESIGN</div>
//            <div className="inline-flex items-center justify-center w-[6rem] h-10 rounded-full bg-gradient-to-r from-blue-400 to-green-400 text-white">
//              <PlusIcon className="w-6 h-6" />
//            </div>
//          </div>

//          {/* Column 2: Testing and Development */}
//          <div className="flex flex-col items-end justify-end   space-y-4">
//            <div>
//              <div className="text-sm font-medium mb-2">TESTING</div>
//              <div className="inline-flex items-center justify-center w-[16rem] h-10 rounded-full bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 text-white">
//                <PlusIcon className="w-6 h-6" />
//              </div>
//            </div>
//            <div>
//              <div className="inline-flex items-center justify-center w-[20rem] h-10 rounded-full bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 text-white">
//                <PlusIcon className="w-6 h-6" />
//              </div>
//              <div className="text-sm font-medium mb-2">DEVELOPMENT</div>
//            </div>
//          </div>

//          {/* Column 3: Release */}
//          <div className="flex flex-col justify-end mb-7  items-center">
//            <div className="text-sm font-medium mb-2">RELEASE</div>
//            <div className="inline-flex items-center justify-center w-[8rem] h-10 rounded-full bg-gradient-to-r from-blue-400 to-green-400 text-white">
//              <PlusIcon className="w-6 h-6" />
//            </div>
//          </div>

//          {/* Column 4: Users' Feedback */}
//          <div className="flex flex-col justify-end mb-7 items-center">
//            <div className="text-sm font-medium mb-2">USERS' FEEDBACK</div>
//            <div className="inline-flex items-center justify-center w-[10rem] h-10 rounded-full bg-gradient-to-r from-green-400 to-yellow-400 text-white">
//              <PlusIcon className="w-6 h-6" />
//            </div>
//          </div>

//          {/* Column 5: Scaling */}
//          <div className="flex flex-col items-center">
//            <div className="text-sm font-medium mb-2">SCALING</div>
//            <div className="inline-flex items-center justify-center w-[10rem] h-10 rounded-full bg-gradient-to-r from-orange-400 to-red-400 text-white">
//              <PlusIcon className="w-6 h-6" />
//            </div>
//          </div>
//        </div>
//      </div>
//    </div>
//  </div>;
