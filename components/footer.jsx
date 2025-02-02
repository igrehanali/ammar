import { Instagram, Twitter, Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const navigation = {
    home: [
      { name: "Home", href: "/" },
      { name: "Key Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Testimonials", href: "#" },
      { name: "FAQ'S", href: "#" },
    ],
    app: [
      { name: "App", href: "#" },
      { name: "Mobile APP", href: "#" },
      { name: "Desktop App", href: "#" },
    ],
    allPage: [
      { name: "All Page", href: "#" },
      { name: "Home", href: "#" },
      { name: "App", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Blog Open", href: "#" },
      { name: "Contact", href: "#" },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-transparent  via-[#657524] to-[#C9EB42] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-16">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">krisp</span>
            </div>
            <p className="text-sm text-white">
              Empowering Your Projects,
              <br />
              Enhancing Your Success, Every Step
              <br />
              of the Way.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-white hover:text-[#DEFF4E] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-[#DEFF4E] transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-[#DEFF4E] transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="space-y-4">
            <h3 className="font-semibold">Home</h3>
            <ul className="space-y-2">
              {navigation.home.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white hover:text-[#DEFF4E] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">App</h3>
            <ul className="space-y-2">
              {navigation.app.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white hover:text-[#DEFF4E] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">All Page</h3>
            <ul className="space-y-2">
              {navigation.allPage.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white hover:text-[#DEFF4E] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white ">
            © 2024 Sap. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-white hover:text-[#DEFF4E] transition-colors"
            >
              Privacy policy
            </Link>
            <Link
              href="#"
              className="text-sm text-white hover:text-[#DEFF4E] transition-colors"
            >
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
