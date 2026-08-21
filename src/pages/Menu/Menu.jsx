import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const MENU_DATA = {
  starters: [
    { name: "Hara Bhara Kabab", price: 180, desc: "Crispy spinach & green pea patties with mint chutney.", spicy: false, veg: true, popular: true },
    { name: "Paneer Tikka", price: 220, desc: "Tandoor-grilled cottage cheese with bell peppers & spices.", spicy: true, veg: true, popular: true },
    { name: "Veg Spring Rolls", price: 160, desc: "Crispy rolls stuffed with spiced vegetables & noodles.", spicy: false, veg: true, popular: false },
    { name: "Corn Cheese Balls", price: 190, desc: "Golden fried balls with sweet corn & melted cheese inside.", spicy: false, veg: true, popular: true },
    { name: "Dahi Puri", price: 120, desc: "Crisp puris filled with tangy yoghurt, tamarind & sev.", spicy: true, veg: true, popular: false },
    { name: "Mushroom Crispy", price: 200, desc: "Indo-Chinese crispy mushrooms tossed in chilli sauce.", spicy: true, veg: true, popular: false },
  ],
  mains: [
    { name: "Paneer Rollar Makhani", price: 350, desc: "Rolled paneer stuffed with dry fruits in rich brown gravy.", spicy: false, veg: true, popular: true },
    { name: "Kofta Sanj Savera", price: 320, desc: "Spinach paneer koftas in velvety tomato cashew sauce.", spicy: false, veg: true, popular: true },
    { name: "Dal Makhani", price: 260, desc: "Slow-cooked black lentils simmered overnight in butter.", spicy: false, veg: true, popular: true },
    { name: "Shahi Paneer", price: 300, desc: "Cottage cheese in rich onion tomato and cashew gravy.", spicy: false, veg: true, popular: false },
    { name: "Vilaiti Sabzi", price: 280, desc: "Exotic vegetables cooked with aromatic Indian spices.", spicy: true, veg: true, popular: false },
    { name: "Kadai Paneer", price: 310, desc: "Paneer & peppers in bold spiced tomato kadai masala.", spicy: true, veg: true, popular: true },
    { name: "Palak Paneer", price: 290, desc: "Cottage cheese in creamy pureed spinach gravy.", spicy: false, veg: true, popular: false },
    { name: "Chole Bhature", price: 220, desc: "Spicy chickpea curry with fluffy fried bread.", spicy: true, veg: true, popular: true },
  ],
  fastfood: [
    { name: "Arrabiatta Pasta", price: 250, desc: "Penne in spicy garlic tomato sauce with fresh basil.", spicy: true, veg: true, popular: true },
    { name: "Cheesy Lasagna", price: 290, desc: "Layered pasta with white sauce and mozzarella cheese.", spicy: false, veg: true, popular: false },
    { name: "Mexican Tacos", price: 240, desc: "Crunchy tacos with spiced beans, salsa and sour cream.", spicy: true, veg: true, popular: true },
    { name: "Veg Pizza", price: 280, desc: "Hand-tossed pizza with seasonal veggies and cheese.", spicy: false, veg: true, popular: false },
    { name: "Peri Peri Fries", price: 150, desc: "Crispy fries seasoned with smoky peri-peri spice mix.", spicy: true, veg: true, popular: true },
    { name: "Loaded Nachos", price: 220, desc: "Tortilla chips with jalapenos, cheese sauce and guacamole.", spicy: true, veg: true, popular: false },
  ],
  mocktails: [
    { name: "Virgin Mojito", price: 150, desc: "Fresh mint, lime juice, sugar syrup and soda over ice.", spicy: false, veg: true, popular: true },
    { name: "Blue Lagoon", price: 160, desc: "Blue curacao syrup, lemon and soda - a visual delight.", spicy: false, veg: true, popular: true },
    { name: "Fruit Punch", price: 180, desc: "Seasonal fruit blend with vanilla ice cream and cream.", spicy: false, veg: true, popular: false },
    { name: "Watermelon Cooler", price: 160, desc: "Fresh watermelon juice with mint and a dash of lime.", spicy: false, veg: true, popular: true },
    { name: "Mango Mania", price: 170, desc: "Chilled mango pulp blended with cream and cardamom.", spicy: false, veg: true, popular: false },
    { name: "Rose Sharbat", price: 140, desc: "Traditional rose syrup with sabja seeds and milk.", spicy: false, veg: true, popular: false },
  ],
  desserts: [
    { name: "Sizzling Brownie", price: 220, desc: "Warm walnut brownie on hot plate with vanilla ice cream.", spicy: false, veg: true, popular: true, img: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80" },
    { name: "Gulab Jamun Ice Cream", price: 180, desc: "Warm gulab jamuns with a scoop of vanilla ice cream.", spicy: false, veg: true, popular: true, img: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=600&q=80" },
    { name: "Nutella Waffles", price: 250, desc: "Golden waffles with Nutella, banana and whipped cream.", spicy: false, veg: true, popular: false, img: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80" },
    { name: "Mango Cheesecake", price: 260, desc: "No-bake cheesecake with fresh Alphonso mango topping.", spicy: false, veg: true, popular: true, img: "https://images.unsplash.com/photo-1567171466295-4afa63d45416?auto=format&fit=crop&w=600&q=80" },
    { name: "Kulfi Falooda", price: 200, desc: "Indian ice cream with rose milk and vermicelli.", spicy: false, veg: true, popular: false, img: "https://images.unsplash.com/photo-1605197161470-5f5d83e1ff74?auto=format&fit=crop&w=600&q=80" },
    { name: "Choco Lava Cake", price: 240, desc: "Molten chocolate cake with flowing centre and ice cream.", spicy: false, veg: true, popular: true, img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80" },
  ],
};

const TABS = [
  { key: "starters", label: "Starters" },
  { key: "mains", label: "Mains" },
  { key: "fastfood", label: "Fast Food" },
  { key: "mocktails", label: "Mocktails" },
  { key: "desserts", label: "Desserts" },
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState("starters");
  const gridRef = useRef(null);

  // Re-run observer when tab changes
  useEffect(() => {
    // Observer for scroll-reveal sections
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    document.querySelectorAll('.scroll-reveal').forEach(el => revealObserver.observe(el));

    // Observer for menu cards with stagger
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          cardObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    const timer = setTimeout(() => {
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.menu-card');
        cards.forEach((card, i) => {
          card.classList.remove('opacity-100', 'translate-y-0');
          card.classList.add('opacity-0', 'translate-y-10');
          card.style.transitionDelay = `${i * 70}ms`;
          cardObserver.observe(card);
        });
      }
    }, 30);

    return () => {
      clearTimeout(timer);
      revealObserver.disconnect();
      cardObserver.disconnect();
    };
  }, [activeTab]);

  const items = MENU_DATA[activeTab] || [];

  return (
    <div className="bg-background text-text-primary">
      <main className="mt-20 sm:mt-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-16 overflow-hidden text-left">

        {/* Hero */}
        <header className="py-10 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-4 sm:space-y-5">
            <span className="font-sans text-xs font-bold text-secondary tracking-widest uppercase">Pure Veg &amp; Multicuisine</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-primary leading-tight">A Feast for<br />Every Craving</h1>
            <p className="font-sans text-sm sm:text-base text-text-secondary max-w-md leading-relaxed">
              Authentic North Indian curries, sizzling fast food, and refreshing mocktails. A full menu for every taste in Vartej.
            </p>
            <a className="inline-flex items-center gap-2 font-sans text-sm font-bold text-primary group" href="#menu-sections">
              EXPLORE THE MENU <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="hidden sm:block relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
            <img alt="Indian food spread" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
          </div>
        </header>

        {/* Sticky Tab Bar */}
        <div id="menu-sections" className="sticky top-14 sm:top-16 z-30 bg-background/95 backdrop-blur-md border-b border-outline-variant/20 mb-6 sm:mb-10">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            {TABS.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`shrink-0 px-5 py-2 rounded-full font-sans text-sm font-semibold transition-all duration-200 ${activeTab === tab.key
                    ? 'bg-primary text-white shadow-md scale-105'
                    : 'bg-surface-low text-text-secondary hover:bg-primary/10 hover:text-primary'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <section className="pb-24">
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, idx) => (
              <div
                key={`${activeTab}-${idx}`}
                className="menu-card group bg-white border border-outline-variant/20 rounded-xl p-5 hover:shadow-lg hover:border-primary/30 flex flex-col gap-3 opacity-0 translate-y-10 transition-all duration-700"
              >
                {item.img && (
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif text-lg text-primary group-hover:text-secondary transition-colors leading-tight">{item.name}</h3>
                  <span className="font-bold text-secondary text-base shrink-0">&#8377;{item.price}</span>
                </div>
                <p className="font-sans text-sm text-text-secondary leading-relaxed flex-1">{item.desc}</p>
                <div className="flex gap-2 flex-wrap mt-1">
                  {item.veg && <span className="text-[10px] font-bold uppercase tracking-wider text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">Veg</span>}
                  {item.spicy && <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">Spicy</span>}
                  {item.popular && <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">Popular</span>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-primary p-10 md:p-20 rounded-3xl text-center mb-24 relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 space-y-6">
            <h2 className="font-serif text-3xl md:text-5xl text-white">An Unforgettable Evening Awaits</h2>
            <p className="font-sans text-base text-white/80 max-w-xl mx-auto">Dine at Tubed Courtyard, Vartej - where every meal is a celebration.</p>
            <Link to="/reserve">
              <button className="bg-white text-primary hover:bg-surface-low px-8 py-3.5 rounded-lg font-sans text-sm font-bold uppercase tracking-widest transition-colors duration-200 mt-2">
                BOOK A TABLE
              </button>
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
