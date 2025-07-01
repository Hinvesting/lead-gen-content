import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Lightbulb, Bot, Calendar } from "lucide-react";
import EmailModal from "@/components/email-modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="bg-midnight-blue text-white font-opensans overflow-x-hidden">
      {/* Header */}
      <header className="w-full py-8">
        <div className="container mx-auto px-4 flex justify-center">
          <img 
            src="/images/logo.png" 
            alt="New Money Millionaires Logo" 
            className="h-36 md:h-44 w-auto max-w-xs md:max-w-md"
          />
        </div>
      </header>
      {/* Hero Section */}
      <section className="container mx-auto px-4 text-center py-16 max-w-4xl">
        <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
          Stop Staring at a Blank Page. <span className="text-vibrant-gold">Start Generating Daily Content</span> in 5 Minutes.
        </h1>
        <p className="font-opensans text-lg md:text-xl text-light-gray mb-8 max-w-3xl mx-auto leading-relaxed">
          Get our free Multi-Content Generator that uses AI to brainstorm, write, and organize a week of social media content for you. 100% Free.
        </p>
        <Button 
          onClick={openModal}
          className="bg-vibrant-gold text-midnight-blue font-montserrat font-bold text-lg px-12 py-4 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Get the Free Tool Now
        </Button>
      </section>
      {/* Demo Video Section */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <video 
              src="/videos/demo.mp4" 
              autoPlay 
              loop 
              muted 
              className="w-full h-auto rounded-2xl border-2 border-vibrant-gold shadow-2xl"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1: Lightbulb */}
          <div className="text-center">
            <div className="w-20 h-20 bg-vibrant-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-10 h-10 text-midnight-blue" />
            </div>
            <h3 className="font-montserrat font-bold text-xl mb-3">Endless Ideas</h3>
            <p className="text-light-gray leading-relaxed">Generate unique angles and topics for your niche on demand.</p>
          </div>
          
          {/* Feature 2: Robot */}
          <div className="text-center">
            <div className="w-20 h-20 bg-vibrant-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <Bot className="w-10 h-10 text-midnight-blue" />
            </div>
            <h3 className="font-montserrat font-bold text-xl mb-3">Automated Writing</h3>
            <p className="text-light-gray leading-relaxed">Create engaging social media copy, hashtags, and titles in seconds.</p>
          </div>
          
          {/* Feature 3: Calendar */}
          <div className="text-center">
            <div className="w-20 h-20 bg-vibrant-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-10 h-10 text-midnight-blue" />
            </div>
            <h3 className="font-montserrat font-bold text-xl mb-3">Effortless Organization</h3>
            <p className="text-light-gray leading-relaxed">Keep all your content perfectly organized inside a simple Google Sheet.</p>
          </div>
        </div>
      </section>
      {/* Creator Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-center">
          <img 
            src="/images/sam-stacks-creator.png" 
            alt="Sam Stacks - Creator of Multi-Content Generator" 
            className="max-w-2xl w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>
      </section>
      {/* Final CTA Section */}
      <section className="container mx-auto px-4 text-center py-16">
        <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-8">
          Your Audience is <span className="text-vibrant-gold">Waiting.</span>
        </h2>
        <Button 
          onClick={openModal}
          className="bg-vibrant-gold text-midnight-blue font-montserrat font-bold text-lg px-12 py-4 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Download Your Free Generator
        </Button>
      </section>
      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center border-t border-gray-700">
        <p className="text-light-gray mb-4">© 2025 New Money Millionaires L.L.C. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-light-gray hover:text-vibrant-gold transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="text-light-gray hover:text-vibrant-gold transition-colors duration-300">Terms of Service</a>
        </div>
      </footer>
      {/* Email Modal */}
      <EmailModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
