
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              REVOLUTIONIZING BUSINESS TRAINING WITH AI-POWERED PERSONALIZATION
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
              Interactive courses, personalized experiences, and cutting-edge features like virtual avatars and LTS.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-brand-blue-600 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Watch Demo Video</span>
            </Button>
          </div>

          {/* Right illustration */}
          <div className="relative animate-float">
            <div className="relative z-10">
              <img 
                src="/lovable-uploads/57754bfc-7a7a-4fee-a86e-7e1823ca2da4.png" 
                alt="AI-powered learning illustration" 
                className="w-full h-auto"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
              <span className="text-2xl">😊</span>
            </div>
            <div className="absolute bottom-10 right-10 w-12 h-12 bg-green-400 rounded-lg animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 left-0 w-8 h-8 bg-purple-400 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
          </div>
        </div>
      </div>
      
      {/* Wave shape */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
