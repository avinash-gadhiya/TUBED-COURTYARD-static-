import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import Textarea from '../../components/common/Textarea';
import Modal from '../../components/common/Modal';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const validate = () => {
    let err = {};
    if (!formData.firstName.trim()) err.firstName = 'First name is required.';
    if (!formData.lastName.trim()) err.lastName = 'Last name is required.';
    if (!formData.email.trim()) {
      err.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      err.email = 'Email address is invalid.';
    }
    if (!formData.message.trim()) err.message = 'Message content is required.';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSuccessOpen(true);
    }
  };

  const resetForm = () => {
    setIsSuccessOpen(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: 'General Inquiry',
      message: ''
    });
  };

  return (
    <div className="bg-background text-text-primary">
      <main className="pt-24 pb-24 text-left">
        
        {/* Hero Section / Map Header */}
        <section className="w-full h-[45vh] sm:h-[50vh] md:h-[60vh] relative overflow-hidden">
          <img 
            className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1920&q=80" 
            alt="Hero / map placeholder"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
          <div className="absolute bottom-6 sm:bottom-12 left-4 sm:left-8 md:left-16 text-white z-10 pr-4">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-sm text-white">Visit the Courtyard</h1>
            <p className="font-sans text-sm sm:text-base md:text-lg max-w-xl mt-3 sm:mt-4 text-white/90">A botanical sanctuary in the heart of the city, where every meal is an escape into nature.</p>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 mt-12 sm:mt-20 md:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-surface-lowest p-5 sm:p-8 md:p-12 rounded-xl border border-outline-variant/15 shadow-sm text-left">
            <h2 className="font-serif text-3xl text-primary mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Input
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  error={errors.firstName}
                  placeholder="Evelyn"
                />
                <Input
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  error={errors.lastName}
                  placeholder="Rivers"
                />
              </div>

              <Input
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
                placeholder="e.rivers@example.com"
              />

              <div className="flex flex-col space-y-1.5 w-full">
                <label className="text-xs font-bold uppercase tracking-wider text-text-secondary font-sans">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-surface-low border-b-2 border-outline-variant focus:border-primary px-3 py-2.5 text-sm text-text-primary outline-none transition-colors duration-250 cursor-pointer"
                >
                  <option>General Inquiry</option>
                  <option>Private Events</option>
                  <option>Media &amp; Press</option>
                  <option>Feedback</option>
                </select>
              </div>

              <Textarea
                label="Your Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                error={errors.message}
                placeholder="How can we help you today?"
                rows={4}
              />

              <Button type="submit" className="w-full md:w-auto flex items-center justify-center gap-2">
                Send Message
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Right Column: Info & Details */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Hours & Location Bento Box */}
            <div className="bg-primary text-white p-8 md:p-10 rounded-xl space-y-6">
              <h3 className="font-serif text-2xl mb-6">Contact Details</h3>
              <div className="space-y-6 text-sm">
                <div className="flex gap-4 items-start">
                  <MapPin className="h-5 w-5 text-[#d3ebad] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-[#d3ebad] uppercase tracking-wider opacity-70 font-semibold mb-1">Location</p>
                    <p className="font-sans text-base">Near Delight Party Plot,<br/>New 150 Feet Ring Road, Kalawad Road,<br/>Vartej, Gujarat (Opp. Second Wife)</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Phone className="h-5 w-5 text-[#d3ebad] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-[#d3ebad] uppercase tracking-wider opacity-70 font-semibold mb-1">Reservations</p>
                    <p className="font-sans text-base">+91 96240 24240</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Mail className="h-5 w-5 text-[#d3ebad] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-[#d3ebad] uppercase tracking-wider opacity-70 font-semibold mb-1">Email</p>
                    <p className="font-sans text-base">hello@tubedcourtyard.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-surface-low p-8 rounded-xl border border-outline-variant/15 space-y-6">
              <h3 className="font-serif text-2xl text-primary mb-6">Operating Hours</h3>
              <ul className="space-y-4 font-sans text-sm text-text-secondary">
                <li className="flex justify-between border-b border-outline-variant/20 pb-2">
                  <span>Monday – Thursday</span>
                  <span className="font-semibold text-primary">12:00 – 22:30</span>
                </li>
                <li className="flex justify-between border-b border-outline-variant/20 pb-2">
                  <span>Friday – Saturday</span>
                  <span className="font-semibold text-primary">12:00 – 23:30</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span>Sunday Brunch</span>
                  <span className="font-semibold text-primary">10:00 – 20:00</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </main>

      {/* Success Modal */}
      <Modal
        isOpen={isSuccessOpen}
        onClose={resetForm}
        title="Message Sent Successfully"
      >
        <div className="text-center py-6 space-y-4">
          <h4 className="text-xl font-serif text-primary font-bold">Thank You!</h4>
          <p className="text-text-secondary text-sm leading-relaxed max-w-sm mx-auto">
            Your message has been received. Our team will get back to you shortly.
          </p>
          <div className="pt-4">
            <Button variant="primary" onClick={resetForm} className="px-6 py-2.5">
              Done
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
