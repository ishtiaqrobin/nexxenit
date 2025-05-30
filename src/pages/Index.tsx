import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";
import { About } from "@/components/About";
import { Clients } from "@/components/Clients";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { ScrollToTop } from "@/components/ScrollToTop";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="nexxenit-theme">
      <div className="min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden">
        <Header />
        <Hero />
        <Services />
        <TechStack />
        <About />
        <FeaturedProjects />
        <Clients />
        <Contact />
        <Footer />
        {/* <ScrollToTop />  */}
      </div>
    </ThemeProvider>
  );
};

export default Index;
