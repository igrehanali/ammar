import { Card, CardContent } from "@/components/ui/card"
import { Layers, Palette, Monitor, Smartphone } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      title: "Branding",
      icon: Layers,
      description: "Design as you know it is out the door. Design as you want it just arrived.",
    },
    {
      title: "Design",
      icon: Palette,
      description: "Design as you know it is out the door. Design as you want it just arrived.",
    },
    {
      title: "Web Development",
      icon: Monitor,
      description: "Design as you know it is out the door. Design as you want it just arrived.",
    },
    {
      title: "App Development",
      icon: Smartphone,
      description: "Design as you know it is out the door. Design as you want it just arrived.",
    },
  ]

  return (
    (<section className="max-w-6xl mx-auto px-4 py-12">
      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">What I Offer</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            My focus is on creating unique and effective brand identities that support my clients&apos; goals. I offer a full range of branding, design and development services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-muted/50 transition-all duration-300 hover:bg-[#DEFF4E] hover:scale-[1.02] hover:shadow-lg group">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="p-2 bg-black rounded-full transition-transform duration-300 group-hover:rotate-12">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transform rotate-45 transition-transform duration-300 group-hover:rotate-90">
                      <path
                        d="M3.33337 12.6667L12.6667 3.33333M12.6667 3.33333H3.33337M12.6667 3.33333V12.6667"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <p className="text-muted-foreground group-hover:text-muted-foreground/80">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>)
  );
}

