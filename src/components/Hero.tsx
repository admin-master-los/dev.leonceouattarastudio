import React from 'react';
import { ArrowRight, Star, Award, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
      {/* Subtle gradient overlay on black */}
      <div className="absolute inset-0 from-cyan-500/5 via-transparent to-purple-500/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 backdrop-blur-sm">
              <TrendingUp size={16} className="text-cyan-400" />
              <span className="text-sm text-cyan-400 font-medium">Création de portail web sur Mesure</span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-white font-bold leading-[0.9] tracking-tight">
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  CRÉONS VOTRE
                </span>
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  RÉUSSITE
                </span>
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  EN LIGNE 
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-xl">
              Opération Votre site sur mesure, Des sites au design professionnel pour générer plus de prospects, de ventes et de fans !
            </p>

            {/* Target Audience */}
            <div className="flex flex-wrap items-center gap-3 text-gray-400">
              <span className="text-sm font-medium">Spécialisés pour :</span>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/5 rounded-full text-sm border border-cyan-500/20 text-cyan-400">
                  Restaurants
                </span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-sm border border-purple-500/20 text-purple-400">
                  Hôtels 
                </span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-sm border border-cyan-500/20 text-cyan-400">
                  Magasin de vêtements
                </span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-sm border border-cyan-500/20 text-cyan-400">
                  E-commerce
                </span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-sm border border-cyan-500/20 text-cyan-400">
                  Coach & Formateur en ligne
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('#contact')}
                className="group bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-2 hover:scale-105"
              >
                Demander un devis
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => scrollToSection('#portfolio')}
                className="group border-2 border-white/20 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                Nos réalisations
              </button>
            </div>

            {/* Credibility Badges */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-white/10">
              {/* Badge 1 - Experience */}
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-400">+10 ans d'expertise</p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px bg-white/10" />

              {/* Badge 2 - Projects */}
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-lg font-bold text-white">50+</p>
                  <p className="text-xs text-gray-400">Projets réussis</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Professional Photo */}
          <div className="relative hidden lg:block h-[700px]">
            
            {/* Main Photo Container */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[700px] overflow-hidden transition-all duration-700 hover:scale-[1.03]"
              style={{
                transform: 'translate(-50%, -50%)',
                zIndex: 3,
              }}
            >
              <img 
                src="https://aruoiqvgxoxhdlnerwww.supabase.co/storage/v1/object/public/portfolio-images/avatars/Leonce_Ouattara.png"
                alt="Leonce Ouattara - Fondateur lOS"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Enhanced Floating Elements with glow */}
            <div className="absolute top-20 right-32 w-24 h-24 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-3xl opacity-10 blur-2xl animate-float" />
            <div className="absolute bottom-32 left-20 w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-500 rounded-3xl opacity-10 blur-2xl animate-float-delayed" />
            
            {/* Additional glow effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none" />
          </div>

        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite 1s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
