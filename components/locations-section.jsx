import { MapPin } from "lucide-react";

export default function LocationsSection() {
  return (
    <section className=" relative z-[10] text-white px-4 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our locations
          </h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-8">
            <LocationCard
              city="Sydney"
              address="123 Sample St, Sydney NSW 2000 AU"
            />
            <LocationCard
              city="New York"
              address="123 Sample St, New York NY 10000 USA"
            />
            <LocationCard
              city="London"
              address="123 Sample St, London W1C 1DE, United Kingdom"
            />
          </div>

          <div className="relative aspect-[4/3]  rounded-lg overflow-hidden">
            {/* <div className="absolute inset-0 flex items-center justify-center">
              <MapPin className="w-16 h-16 text-white" />
            </div> */}
            <img
              src="/image/location.png"
              alt="Location map"
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// interface LocationCardProps {
//   city: string
//   address: string
// }

function LocationCard({ city, address }) {
  return (
    <div className="space-y-2">
      <h3 className="text-2xl font-semibold">{city}</h3>
      <p className="text-white">{address}</p>
      <button className="text-white hover:text-gray-300 transition-colors">
        View Map
      </button>
    </div>
  );
}
