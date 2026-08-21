import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Button from '../../components/common/Button';

export default function Experience() {
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
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden px-6">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-primary/20 z-10"></div>
            <img 
              alt="Tubed Courtyard Entrance" 
              className="w-full h-full object-cover transform scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLWU0ucK1X9oePR0r4HqsZ22k_rNeZcS-RfMlYKojppaUt-4MwbwoNtgi_PjQhoCDZlVv6QeJkwP3vb3llGPXkRuhknI8faTF7nm0q23JCi4LwhVhrav9-XWfcINul_mw2Gu9iHYeFXE61Wn5IVH8TUpckCo-7ZsZK5Sq1ssr8bpw4UlW0ouJXeQG-In9fbCgXRihfxmEtXDvgKESTTK2XWOoFgPztbCRrXyAChucraiCzJmXO5T7xdzr64b18_iTV4ICiJzg9zkx1"
            />
          </div>
          <div className="relative z-20 text-center max-w-3xl text-white">
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white font-sans text-xs font-semibold tracking-wider mb-6">
              A NEW DIMENSION OF DINING
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white mb-6">
              Circular Harmony, Organic Elegance
            </h1>
            <p className="font-sans text-base sm:text-lg text-white/90">
              Experience a sensory journey where modern architecture meets botanical serenity in our unique courtyard escape.
            </p>
          </div>
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-white" />
          </div>
        </section>

        {/* Philosophy of the Arc */}
        <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center scroll-reveal transition-all duration-1000 opacity-0 translate-y-10">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-primary mb-8">The Philosophy of the Arc</h2>
              <p className="font-sans text-sm sm:text-base text-text-secondary mb-6 leading-relaxed">
                Inspired by the infinite loops found in nature, Tubed Courtyard redefines the dining threshold. Our circular architecture isn't just a design choice; it's an invitation to step out of the linear world and into a space of fluid connection.
              </p>
              <p className="font-sans text-sm sm:text-base text-text-secondary mb-10 leading-relaxed">
                Each element, from the warm terracotta tones to the rhythmic placement of stepping stones, is curated to ground you in the present moment, surrounded by lush botanical life.
              </p>
              <div className="flex gap-4 items-center">
                <div className="flex flex-col">
                  <span className="font-serif text-3xl text-secondary">360°</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-outline">Immersive View</span>
                </div>
                <div className="w-px h-12 bg-outline-variant/30 mx-4"></div>
                <div className="flex flex-col">
                  <span className="font-serif text-3xl text-secondary">100%</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-outline">Organic Flow</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden border-[12px] border-surface-container-low">
                <img 
                  alt="Detailed View of Architectural Entrance" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLWU0ucK1X9oePR0r4HqsZ22k_rNeZcS-RfMlYKojppaUt-4MwbwoNtgi_PjQhoCDZlVv6QeJkwP3vb3llGPXkRuhknI8faTF7nm0q23JCi4LwhVhrav9-XWfcINul_mw2Gu9iHYeFXE61Wn5IVH8TUpckCo-7ZsZK5Sq1ssr8bpw4UlW0ouJXeQG-In9fbCgXRihfxmEtXDvgKESTTK2XWOoFgPztbCRrXyAChucraiCzJmXO5T7xdzr64b18_iTV4ICiJzg9zkx1"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-44 h-44 rounded-full bg-[#eac076]/10 backdrop-blur-xl flex items-center justify-center text-center p-6 border border-primary/10">
                <span className="font-sans text-xs text-primary font-semibold italic leading-relaxed">
                  "Where the sky meets the earth in a perfect circle."
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Pod Dining Experience */}
        <section className="bg-surface-low py-24 border-t border-b border-outline-variant/20">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <div className="text-center mb-16 scroll-reveal transition-all duration-1000 opacity-0 translate-y-10">
              <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">The Pod Dining Experience</h2>
              <div className="w-24 h-1 bg-secondary/30 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 scroll-reveal transition-all duration-1000 opacity-0 translate-y-10">
                <div className="relative group overflow-hidden rounded-xl">
                  <img 
                    alt="Interior of a Dining Pod" 
                    className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-[1.02]" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUx-N5QaB8Jk9Dmeqqzm1EvVwqX4cvU76E83_jbR1f8c8T6XuBvfuJwjmjMleyzFeUVoWTP1kREBjPWFBvAPeTOTBZCT9YW6eb9Tl1bbSdXDvTuLFA2Be-q-7IYtX09iuo8V9Ymc_bjTxkChgvrMJTaNky0gZCt3S3rOpJwruhWZCdPBVnnGPKXNY5N5hpc-Kmc112jGsxT1u3214bAitbXut8sj5908XCoxLcQfhvYIKdvYAyuyU3CfMpk4gpidK8HBVf7iGOOFl1"
                  />
                </div>
              </div>
              <div className="lg:col-span-5 space-y-10 scroll-reveal transition-all duration-1000 opacity-0 translate-y-10">
                <div className="lg:w-1/2 space-y-6">
                  <div className="inline-block px-3 py-1 bg-surface-low rounded text-xs font-bold uppercase tracking-widest text-secondary border border-outline-variant/30">
                    01. The Tube Pods
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl text-primary">Intimate Dining</h2>
                  <p className="font-sans text-sm md:text-base text-text-secondary leading-relaxed">
                    Our signature circular booths form the heart of Tubed Courtyard. These semi-private pods offer an intimate space for couples or small families to dine, shielded from the hustle yet completely immersed in the open-air vibe of our gardens.
                  </p>
                  <ul className="space-y-3 font-sans text-sm text-text-secondary">
                    <li className="flex items-center gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-secondary"></div>
                      Semi-private acoustic design
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-secondary"></div>
                      Ambient warm lighting for evening vibes
                    </li>
                  </ul>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 text-white">
                    <span className="font-semibold text-base">02</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-primary mb-2">Ambient Illumination</h3>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">Soft, recessed LED strips follow the arch's contour, mimicking the gentle glow of a setting sun year-round.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 text-white">
                    <span className="font-semibold text-base">03</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-primary mb-2">The Portal View</h3>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">Large circular glass apertures frame the courtyard as a living painting, evolving with every season.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Courtyard Soul */}
        <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-12 text-center scroll-reveal transition-all duration-1000 opacity-0 translate-y-10">The Courtyard Soul</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px] scroll-reveal transition-all duration-1000 opacity-0 translate-y-10">
            {/* Large Highlight */}
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-xl group">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCf2GHYC_0-Mck8BxQ7UyfJFk0j3YYBvq8AVV86Cg5bwmhN5YU5Qp162NUrjlFPTTWYqpVt5LuSpCqMfqWIaOmeDHMPt6c64GveYRuYdcsAab0uJYGCFCkfR3uo89K2L8bymEQN5jghulPWsRMhKJ1EB-2McdIaR0Q2DjaAk0TbqquRptHcUR0zvo1FNawdFixtVCUiuPdeULgAbDbYQex3J-g4iHez71QH1fvCdLFR8LRF3KL711v8tACvg0rzsLQtBxiMNMOpJmmp')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-8 flex flex-col justify-end text-white">
                <h4 className="font-serif text-xl font-bold">Nightfall Reflection</h4>
                <p className="text-white/80 font-sans text-xs">Experience the rhythmic shift from daylight to moonlight.</p>
              </div>
            </div>
            {/* Top Right */}
            <div className="md:col-span-2 relative overflow-hidden rounded-xl group">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBEZoeBDQZrim3YPgOckaHNAHl19Nsjb2usaBPdcmRlauSoDtvKLRIXTvdViMSJxlPkb-YdBGvupT46_qRbKTCnM73xo-TlSBk4fWxMqiX_X_XYeRPD3XpzHTQ2XFT8moCwwxh8jiybOkzaghteuUH3wzASuXX34T7z_ZMABjehw1eKYL5aoMHb2haYk1j1KLNtU-YllmT3mjYbCeU5FJBGCWmT7QZCg68sB3v5YHEOLzHvq5H0gbezpWoc6NJDXMNjtZ7er4MECSiA')" }}
              ></div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute top-4 right-4 bg-white/95 px-4 py-1 rounded-full text-primary font-sans text-xs font-semibold">Culinary Sanctuary</div>
            </div>
            {/* Bottom Right 1 */}
            <div className="relative overflow-hidden rounded-xl group">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD6kaVcqPEmpBodnfDZWuxteVk5ZEHLGdOFnqlXe6YJ_5T2kra6a0Sjk_qwSA7tMg1YopD9-9ATRuLxP-dPOARPJ6SbSpp5XO7IgYslRtyCUt89MdqJSP32mdgg_tReTBrZeR4x4PH6KdnZgNY1P_8d2tthzWT0VLtxir9Qzx1IDu6gTi_bCq3GXTjnzpajGqRL-s8-zAVM9io3UTKiB3pNasE06ESoZKqJ-H3UNXnyHpx6YBvCxpQ04esKemydCYPiNjn-47mlf2BD')" }}
              ></div>
            </div>
            {/* Bottom Right 2 */}
            <div className="relative overflow-hidden rounded-xl group">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDdJgHE77Ov0V-Q3tonZKFLcbk7GJ_VnGkG2z1jdgkksZlbCz3ZJejro9__w5H7nFqrU2XBIQiK7S2_f3nbSNf_03TWV4aPnL0uhQSc_KLhBnB8yZEIEEtNc-yWJI2Y7CsMCz-UD60fIaipEHzZTCSi1WYQKpgcfPSLtAQorvFFdk3ysVXDt9G7qDpzSp3q0ouKR2O36fXhFrZau8pGYxuWYCil_NZ7a6kQ7MEgTc6-VLlttANXXKcAkE-L3eFqRCDkAEwE3bCFdwK5')" }}
              ></div>
            </div>
          </div>
        </section>

        {/* AD testimonial quote */}
        <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto px-6 scroll-reveal transition-all duration-1000 opacity-0 translate-y-10">
            <p className="font-serif text-2xl md:text-3xl italic mb-10 leading-relaxed">
              "Dining here feels like being cradled by the earth itself. The geometry of the space changes your heart rate; everything slows down until only the flavor and the company remain."
            </p>
            <div className="flex flex-col items-center">
              <div className="w-16 h-px bg-white/30 mb-4"></div>
              <span className="font-sans text-xs font-bold tracking-widest uppercase text-[#d3ebad]">The Architectural Digest</span>
            </div>
          </div>
        </section>

        {/* Begin Journey CTA */}
        <section className="py-24 px-6 scroll-reveal transition-all duration-1000 opacity-0 translate-y-10">
          <div className="max-w-4xl mx-auto rounded-3xl bg-surface-low border border-outline-variant/30 p-12 md:p-20 text-center">
            <span className="font-sans text-xs font-bold text-secondary tracking-widest uppercase">The Vartej Sanctuary</span>
            <h1 className="font-serif text-5xl md:text-6xl text-primary leading-tight mb-6">A Dining Oasis <br/>Like No Other</h1>
            <p className="font-sans text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Step away from the noise of the city. Tubed Courtyard offers an open-air environment with unique tube pods, providing the perfect atmosphere for both families and couples in Vartej, Gujarat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link to="/reserve">
                <button className="bg-primary text-white hover:bg-primary-hover px-8 py-3.5 rounded-lg font-sans text-xs font-bold uppercase tracking-widest transition-transform duration-200">
                  Book Your Pod
                </button>
              </Link>
              <Link to="/contact">
                <button className="border border-primary text-primary hover:bg-primary/5 px-8 py-3.5 rounded-lg font-sans text-xs font-bold uppercase tracking-widest transition-transform duration-200">
                  View Private Events
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
