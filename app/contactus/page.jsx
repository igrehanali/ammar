import ContactForm from "../../components/contact-us";

import Footer from "../../components/footer";
import LocationsSection from "../../components/locations-section";
import Navbar from "../../components/Navbar";
import TestimonialsSection from "../../components/testimonials-section";

const page = () => {
  return (
    <div className="bg-black overflow-hidden">
      <Navbar />
      <ContactForm />
      <TestimonialsSection />
      <LocationsSection />

      <Footer />
    </div>
  );
};

export default page;
