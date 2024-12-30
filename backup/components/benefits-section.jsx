import { Users2, Infinity } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function BenefitsSection() {
  return (
    (<section className="py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">What Benefits</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            As a dedicated freelancer, I offer reliable, personalized, and high-quality services designed to bring your ideas to life. Here's how I can add value to your project:
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">$530M</h3>
                <h4 className="font-semibold">Tailored Solutions</h4>
                <p className="text-sm text-muted-foreground">
                  I provide personalized web and app development, as well as UI/UX design services, crafted to meet your unique business needs and goals.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="space-y-2">
                <Users2 className="w-6 h-6" />
                <h4 className="font-semibold">Expertise You Can Rely On</h4>
                <p className="text-sm text-muted-foreground">
                  With 14+ years of experience, I deliver top-notch solutions using the latest technologies, ensuring modern, scalable, and efficient results.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="space-y-2">
                <div className="w-6 h-6 flex items-center justify-center rounded-full border">
                  <span className="text-sm font-medium">UX</span>
                </div>
                <h4 className="font-semibold">Seamless User Experience</h4>
                <p className="text-sm text-muted-foreground">
                  My focus on UI/UX ensures your projects have intuitive designs that engage users and enhance customer satisfaction.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="space-y-2">
                <Infinity className="w-6 h-6" />
                <h4 className="font-semibold">Affordable and Reliable</h4>
                <p className="text-sm text-muted-foreground">
                  As a freelancer, I offer cost-effective services with a commitment to timely delivery, ensuring quality without breaking your budget.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>)
  );
}

