import React, { useState, useEffect } from 'react';
import Modal from '../../components/common/Modal';
import logoImg from '../../assets/logo/logo-image.png';
import img1 from '../../assets/gallery-image/WhatsApp Image 2026-07-08 at 8.19.43 PM.jpeg';
import img2 from '../../assets/gallery-image/WhatsApp Image 2026-07-08 at 8.20.03 PM.jpeg';
import img3 from '../../assets/gallery-image/WhatsApp Image 2026-07-08 at 8.20.13 PM.jpeg';
import img4 from '../../assets/gallery-image/WhatsApp Image 2026-07-08 at 8.20.27 PM.jpeg';
import img5 from '../../assets/gallery-image/WhatsApp Image 2026-07-08 at 8.20.39 PM.jpeg';
import img6 from '../../assets/gallery-image/WhatsApp Image 2026-07-08 at 8.20.46 PM.jpeg';
import img7 from '../../assets/gallery-image/WhatsApp Image 2026-07-08 at 8.20.57 PM.jpeg';
import img8 from '../../assets/gallery-image/WhatsApp Image 2026-07-08 at 8.21.05 PM.jpeg';
import img9 from '../../assets/gallery-image/WhatsApp Image 2026-07-08 at 8.21.20 PM.jpeg';
import img10 from '../../assets/gallery-image/WhatsApp Image 2026-07-08 at 8.21.36 PM.jpeg';
import img11 from '../../assets/gallery-image/WhatsApp Image 2026-07-08 at 8.21.43 PM.jpeg';

const IMAGES = [
  { id: 1,  title: "The Courtyard",       category: "Architecture", src: img1  },
  { id: 2,  title: "Tube Pods",           category: "Architecture", src: img2  },
  { id: 3,  title: "Evening Ambience",    category: "Ambience",     src: img3  },
  { id: 4,  title: "Signature Cuisine",   category: "Cuisine",      src: img4  },
  { id: 5,  title: "Private Dining",      category: "Ambience",     src: img5  },
  { id: 6,  title: "Garden View",         category: "Architecture", src: img6  },
  { id: 7,  title: "Special Dishes",      category: "Cuisine",      src: img7  },
  { id: 8,  title: "Night Vibes",         category: "Ambience",     src: img8  },
  { id: 9,  title: "Fresh Plates",        category: "Cuisine",      src: img9  },
  { id: 10, title: "Cozy Corner",         category: "Ambience",     src: img10 },
  { id: 11, title: "Our Space",           category: "Architecture", src: img11 },
];

const CATEGORIES = ["All", "Architecture", "Cuisine", "Ambience"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

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

  const filteredImages = activeCategory === "All"
    ? IMAGES
    : IMAGES.filter(img => img.category === activeCategory);

  return (
    <div className="bg-background text-text-primary">
      <main className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-16 text-left">
        {/* Header & Filters */}
        <header className="mb-10 sm:mb-16 text-center scroll-reveal transition-all duration-1000 opacity-0 translate-y-10">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-primary mb-4 sm:mb-6">Our Gallery</h1>
          <p className="font-sans text-sm sm:text-base md:text-lg text-text-secondary max-w-2xl mb-8 sm:mb-12">
            A visual journey through our botanical oasis, where gourmet cuisine meets architectural serenity.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-sans text-sm font-semibold transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-secondary/10 text-secondary hover:bg-secondary/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </header>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 scroll-reveal transition-all duration-1000 opacity-0 translate-y-10">
          {filteredImages.map(img => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img)}
              className="group relative cursor-pointer aspect-[4/3] rounded-lg overflow-hidden border border-outline-variant/20 bg-surface-lowest shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Hover overlay with title */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-sans text-sm font-bold uppercase tracking-wider">{img.title}</span>
              </div>
              {/* Logo watermark at bottom */}
              <div className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm rounded-full px-2 py-1">
                <img src={logoImg} alt="logo" className="h-4 w-4 object-contain brightness-0 invert" />
                <span className="text-white text-[10px] font-serif tracking-wide">Tubed Courtyard</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Image Zoom Modal */}
      <Modal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        title={selectedImage?.title || ""}
        className="max-w-2xl"
      >
        {selectedImage && (
          <div className="space-y-4">
            <div className="aspect-[16/10] overflow-hidden rounded border border-outline-variant/30">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-between items-center text-xs text-text-secondary">
              <span className="uppercase font-bold tracking-wider bg-surface-low px-2.5 py-1 rounded">
                Category: {selectedImage.category}
              </span>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
