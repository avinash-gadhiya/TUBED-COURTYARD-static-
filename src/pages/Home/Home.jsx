import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Setup scroll observer matching Stitch landing page
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="overflow-x-hidden bg-background">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGZH9jlGCqXNiS6lmYXW41FSV6GNYpQImZK55it1KTf6Oa2Nfvml18a2SnSWzDMsaCHaSBXly152IMm9guXk98KNIktw_CSQuUMfrjMyPsRGN0ERNFP_9_hyBgVNYguEa74j0mwH0sATirHt1-x3ADfVZ0TylnEyeNwzPZlU_87qe-bbq1yQ4Rylhrxp9d0Pv2JBILkn1a3qPQFsyeunsswy43ckR4VX9HePVmxY6nAOxJYnRFTJkxzorBGTeegLcX7Y3vP29Dq8JR" 
            alt="Hero background"
          />
        </div>
        <div className="relative z-20 px-5 sm:px-8 md:px-16 max-w-4xl text-left">
          <h1 className="font-serif text-[36px] sm:text-[48px] md:text-6xl lg:text-7xl text-white mb-6 sm:mb-10 leading-[1.2]">
            Experience Unique <br className="block" /><span className="block mt-2 sm:mt-3">Tube Dining in Vartej</span>
          </h1>
          <p className="font-sans text-sm sm:text-base md:text-lg text-white/80 max-w-lg mb-6 sm:mb-8 leading-relaxed mt-3 sm:mt-6">
            Welcome to Tubed Courtyard. Step into our aesthetically designed private tube pods and enjoy a multicuisine feast under the open sky. Perfect for families, couples, and unforgettable celebrations.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Link to="/reserve">
              <button className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 font-sans text-xs font-bold rounded-[4px] hover:bg-primary/90 transition-all uppercase tracking-widest">
                Reserve Your Table
              </button>
            </Link>
            <Link to="/menu">
              <button className="border border-white text-white px-6 sm:px-8 py-3 sm:py-4 font-sans text-xs font-bold rounded-[4px] hover:bg-white/10 transition-all uppercase tracking-widest">
                View Menu
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <ChevronDown className="h-8 w-8 text-primary" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 md:px-16 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center scroll-reveal transition-all duration-1000 opacity-0 translate-y-10">
          <div className="relative group">
            <div className="absolute -inset-4 border border-primary/20 rounded-xl transition-all duration-700 group-hover:-inset-2"></div>
            <img 
              className="w-full aspect-[4/5] object-cover rounded-lg shadow-2xl relative z-10 grayscale-[30%] hover:grayscale-0 transition-all duration-1000" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcgZJNfWNnHBjwUMaZLlXWdNEOAgjezG0-vdqsEGKRTYhZwIPEiL1aaKSnm0AsK2NmsvDH-AVafvK6T0rtDIgs-PmoBGQchT7Kob2it_RSWUq7Kna31wIXTVajwXfIRAD5KITbPNDca-Ka02m5rGoaRIvT2i7I--j8MSFS-0QM8rsJVoJQS1cBdkbqZAFH67eheqXXuXtOL2ndeSCkzi_xrDbcEjvUfaFPqfQ0k-7MiqYm9zGhLVZBQdlf-NIsC8QHq5FMRwsnoEpS" 
              alt="About image"
            />
          </div>
          <div className="lg:pl-12 text-left">
            <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight mb-8">Where Great Food <br/>Meets Great Vibes</h2>
            <div className="space-y-6">
              <p className="font-sans text-base md:text-lg text-text-secondary leading-relaxed">
                Located in Vartej, Tubed Courtyard was born out of a desire to create something truly different. We wanted a space where families and friends could gather for delicious food in an environment that feels magical.
              </p>
              <p className="font-sans text-base md:text-lg text-text-secondary leading-relaxed">
                Our iconic tube seating, open courtyard, and vibrant ambiance make every dinner feel like a celebration. Follow us on Instagram to see the love our guests share every day.
              </p>
              <div className="pt-6 grid grid-cols-2 gap-8 border-t border-outline-variant/30">
                <div>
                  <div className="text-primary font-serif text-4xl mb-1">12</div>
                  <div className="font-sans text-xs font-semibold uppercase tracking-tighter opacity-60">Private Pods</div>
                </div>
                <div>
                  <div className="text-primary font-serif text-4xl mb-1">Live</div>
                  <div className="font-sans text-xs font-semibold uppercase tracking-tighter opacity-60">Music & Vibe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Environments Section */}
      <section className="py-24 px-6 md:px-16 bg-surface-lowest">
        <div className="max-w-7xl mx-auto scroll-reveal transition-all duration-1000 opacity-0 translate-y-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="font-serif text-2xl md:text-3xl text-primary mb-4">The Tube Pods</h3>
            <p className="font-sans text-sm md:text-base text-text-secondary leading-relaxed">
              Our signature cylindrical booths offer a semi-private, cozy dining atmosphere. Beautifully lit at night, these pods create the perfect Instagram-worthy backdrop for your special moments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-xl bg-surface-low border border-outline-variant/20 p-8 hover:border-primary/40 hover:shadow-md transition-all duration-500 text-left">
              <div className="mb-8 overflow-hidden rounded-lg">
                <img 
                  className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8dj3oBkQBRFnuVhSy3pJgb7TvG3309xToRdchrFvfyRa8LkOnMu10Vsj3gbjyggB70tZkBO5AwaGk3N0vZVDtk17T7bb78iohSGQs8bla4YRlPJr_i7gzCQoFcGH4x2nH5ZScwQgIu-IvOvY6bDrk1-TlFDAktkGhiW4uBw5O1BiElEvit0m4OOwYBHTtDJpIzYIk4plKzo1m5jHP-88aFdd3qz9L9eC0lLS_hFzAx0UnamQSs-rXK4B-l7mhruB71I8lE3KZIGUU" 
                  alt="Fine Dining"
                />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-primary mb-4">Unique Ambiance</h3>
              <p className="font-sans text-sm md:text-base text-text-secondary mb-6">Experience dining like nowhere else. Our circular pods provide a blend of privacy and open-air charm that defines the Tubed Courtyard aesthetic.</p>
              <Link to="/experience" className="inline-flex items-center gap-2 text-primary font-sans text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                Explore Interiors <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-xl bg-surface-low border border-outline-variant/20 p-8 hover:border-primary/40 hover:shadow-md transition-all duration-500 text-left">
              <div className="mb-8 overflow-hidden rounded-lg">
                <img 
                  className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPIE4yZ2jW9BA5y9oNML64Smo88S5sFQK3ohHjJT7qj6yN2idQYGrAzKoAQnen6qsLb8dIy2L4U27_v-K_czAJDZeE5GL3UPC-phJMijCFYq2HFENDI6TfUcppYZhtnxyW2BteKpwD0ASx5hN8TI3YuXWBnXju3dv_XHBEfvJ8N3PpccGvuJ5L1XX123HHCCxaSPeQsEnTe2PCeJD-ZUg_M3R1DrwV23LEavFay9KaFAvKXYFCHiOnr2Umcz_TE8X6o0Mu0fBa5eMk" 
                  alt="Outdoor Courtyard"
                />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-primary mb-4">Multicuisine Delights</h3>
              <p className="font-sans text-sm md:text-base text-text-secondary mb-6">
                From rich North Indian gravies to sizzling Continental starters and vibrant mocktails, our menu is crafted to satisfy every craving. Taste the passion in every bite.
              </p>
              <Link to="/experience" className="inline-flex items-center gap-2 text-primary font-sans text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                View Menu <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative py-24 bg-[#110e09] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 scroll-reveal transition-all duration-1000 opacity-0 translate-y-10 text-left">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-12">Our Story</h2>
            <div className="space-y-8">
              <p className="font-serif text-2xl md:text-3xl text-white leading-snug">
                "Tubed Courtyard was born from a vision to redefine the dining landscape through bold, circular architecture."
              </p>
              <div className="w-24 h-[1px] bg-primary/45"></div>
              <p className="font-sans text-base text-white/80 leading-relaxed">
                What started as a single courtyard has evolved into a destination where every 'tube' offers a private sanctuary for celebration, quiet dates, and family gatherings. We believe that architecture influences emotion—that the soft curve of a room can foster a deeper connection between people.
              </p>
              <p className="font-sans text-base text-white/80 leading-relaxed">
                Our commitment is to the art of the moment. We strip away the noise of the city, replacing it with the rhythmic patterns of wood, the softness of light, and the excellence of the table.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
