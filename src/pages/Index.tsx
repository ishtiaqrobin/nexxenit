
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";
import { About } from "@/components/About";
import { Clients } from "@/components/Clients";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="nexxenit-theme">
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <Hero />
        <Services />
        <TechStack />
        <About />
        <Clients />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
