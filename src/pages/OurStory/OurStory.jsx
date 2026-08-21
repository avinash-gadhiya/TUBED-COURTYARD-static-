import React, { useEffect } from 'react';
import { Leaf, Award, Sparkles } from 'lucide-react';
import Card from '../../components/common/Card';

export default function OurStory() {
  useEffect(() => {
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
    <div className="bg-background text-text-primary">
      <main className="pt-24 text-left">
        {/* Page Header */}
        <div className="relative pt-20 pb-16 bg-surface-low border-b border-outline-variant/20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-16 text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">Our Story</h1>
            <p className="text-text-secondary text-base md:text-lg max-w-xl mx-auto font-sans leading-relaxed">
              Cultivating connections and fine cuisine through architectural circular design and botanical heritage.
            </p>
          </div>
        </div>

        {/* Heritage / Design Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-8 md:px-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div className="space-y-6 scroll-reveal transition-all duration-1000 opacity-0 translate-y-10">
              <h2 className="font-serif text-3xl md:text-4xl text-primary">The Concept of the Tube</h2>
              <p className="font-sans text-sm md:text-base text-text-secondary leading-relaxed">
                The striking cylindrical booths that define our courtyard are more than just an architectural novelty. They were designed to provide a semi-private oasis where families and couples can enjoy their meals without distraction.
              </p>
              <p className="font-sans text-sm md:text-base text-text-secondary leading-relaxed">
                By combining this unique structural design with open-air natural lighting, we've created a vibrant ambiance that comes alive in the evening. At Tubed Courtyard, every meal is an event, and every pod holds a new memory.
              </p>
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden scroll-reveal transition-all duration-1000 opacity-0 translate-y-10 delay-200">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" 
                alt="Tubed Courtyard Architecture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Pillars of Philosophy */}
        <section className="py-24 px-6 md:px-16 bg-surface-low">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 scroll-reveal transition-all duration-1000 opacity-0 translate-y-10">
              <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">Our Philosophy</h2>
              <p className="font-sans text-sm md:text-base text-text-secondary max-w-2xl mx-auto">
                What drives us every day to provide the best dining experience in Gujarat.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-3">
                <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-primary/5 text-primary">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-serif text-primary font-bold">Privacy First</h3>
                <p className="text-text-secondary text-sm leading-relaxed">Our tube architecture ensures every party has their own personal space to dine comfortably.</p>
              </div>
              <div className="text-center space-y-3">
                <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-primary/5 text-primary">
                  <Leaf className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl text-primary mb-3">Authentic Taste</h3>
                <p className="font-sans text-sm text-text-secondary">
                  We use authentic spices and recipes to ensure every North Indian and Continental dish hits the perfect flavor notes.
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-primary/5 text-primary">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl text-primary mb-3">Memorable Gatherings</h3>
                <p className="font-sans text-sm text-text-secondary">
                  We focus on creating a space where families, friends, and couples can celebrate life's moments together in joy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
