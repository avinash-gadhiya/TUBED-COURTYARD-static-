import React, { useState } from 'react';
import { Calendar, Users, Clock, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import Modal from '../../components/common/Modal';

export default function ReserveTable() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: '',
    time: '18:00 - Early Dinner',
    guests: 2,
    seating: 'pod',
    name: '',
    email: '',
    notes: '',
    agree: false
  });
  const [errors, setErrors] = useState({});
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const handleGuestChange = (change) => {
    setFormData(prev => {
      const val = prev.guests + change;
      if (val >= 1 && val <= 12) {
        return { ...prev, guests: val };
      }
      return prev;
    });
  };

  const handleRadioChange = (val) => {
    setFormData(prev => ({ ...prev, seating: val }));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep1 = () => {
    let err = {};
    if (!formData.date) err.date = 'Please select a date.';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const validateStep3 = () => {
    let err = {};
    if (!formData.name.trim()) err.name = 'Full name is required.';
    if (!formData.email.trim()) {
      err.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      err.email = 'Email address is invalid.';
    }
    if (!formData.agree) err.agree = 'You must agree to the cancellation policy.';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep3()) {
      setIsSuccessOpen(true);
    }
  };

  const resetForm = () => {
    setIsSuccessOpen(false);
    setFormData({
      date: '',
      time: '18:00 - Early Dinner',
      guests: 2,
      seating: 'pod',
      name: '',
      email: '',
      notes: '',
      agree: false
    });
    setStep(1);
  };

  return (
    <div className="bg-background text-text-primary">
      <main className="flex-grow pt-24 md:pt-32 relative overflow-hidden text-left min-h-[90vh]">
        {/* Background Atmosphere Image */}
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            alt="Background atmosphere"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUx-N5QaB8Jk9Dmeqqzm1EvVwqX4cvU76E83_jbR1f8c8T6XuBvfuJwjmjMleyzFeUVoWTP1kREBjPWFBvAPeTOTBZCT9YW6eb9Tl1bbSdXDvTuLFA2Be-q-7IYtX09iuo8V9Ymc_bjTxkChgvrMJTaNky0gZCt3S3rOpJwruhWZCdPBVnnGPKXNY5N5hpc-Kmc112jGsxT1u3214bAitbXut8sj5908XCoxLcQfhvYIKdvYAyuyU3CfMpk4gpidK8HBVf7iGOOFl1"
          />
        </div>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 py-8 sm:py-12 relative z-10">
          <div className="max-w-3xl mx-auto">
            <header className="text-center mb-8 sm:mb-12">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-primary mb-3 sm:mb-4">Secure Your Sanctuary</h1>
              <p className="font-sans text-sm sm:text-base text-text-secondary max-w-xl mx-auto">
                Experience the unique blend of architectural innovation and botanical serenity. Choose your preferred setting for an unforgettable evening.
              </p>
            </header>

            {/* Stepper Header */}
            <div className="flex items-center justify-between mb-8 sm:mb-12 px-2 sm:px-4">
              <div className="flex flex-col items-center gap-1.5 sm:gap-2 cursor-pointer" onClick={() => step > 1 && setStep(1)}>
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center transition-all text-sm ${step === 1 ? 'border-primary bg-primary text-white' : 'border-primary/40 bg-primary/10 text-primary'
                  }`}>
                  {step > 1 ? '✓' : '1'}
                </div>
                <span className="text-[10px] sm:text-xs font-sans font-bold uppercase tracking-wider text-primary">Details</span>
              </div>
              <div className="h-px bg-outline-variant/30 flex-grow mx-2 sm:mx-4"></div>
              <div className="flex flex-col items-center gap-1.5 sm:gap-2">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center transition-all text-sm ${step === 2 ? 'border-primary bg-primary text-white' : step > 2 ? 'border-primary/40 bg-primary/10 text-primary' : 'border-outline-variant/30 text-outline/50'
                  }`}>
                  {step > 2 ? '✓' : '2'}
                </div>
                <span className={`text-[10px] sm:text-xs font-sans font-bold uppercase tracking-wider ${step >= 2 ? 'text-primary' : 'text-outline/50'}`}>Seating</span>
              </div>
              <div className="h-px bg-outline-variant/30 flex-grow mx-2 sm:mx-4"></div>
              <div className="flex flex-col items-center gap-1.5 sm:gap-2">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center transition-all text-sm ${step === 3 ? 'border-primary bg-primary text-white' : 'border-outline-variant/30 text-outline/50'
                  }`}>
                  3
                </div>
                <span className={`text-[10px] sm:text-xs font-sans font-bold uppercase tracking-wider ${step === 3 ? 'text-primary' : 'text-outline/50'}`}>Confirm</span>
              </div>
            </div>

            {/* Step form wrapper */}
            <div className="bg-surface-lowest border border-outline-variant/20 rounded-xl p-5 sm:p-8 md:p-12 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-8">

                {/* Step 1: Details */}
                {step === 1 && (
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="block font-sans text-sm font-semibold text-text-secondary">Arrival Date</label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          className="w-full bg-surface-low border-b-2 border-outline-variant focus:border-primary px-3 py-2.5 text-sm text-text-primary outline-none transition-colors"
                          min={new Date().toISOString().split('T')[0]}
                        />
                        {errors.date && <p className="text-xs text-error">{errors.date}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="block font-sans text-sm font-semibold text-text-secondary">Time Selection</label>
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          className="w-full bg-surface-low border-b-2 border-outline-variant focus:border-primary px-3 py-2.5 text-sm text-text-primary outline-none transition-colors"
                        >
                          <option>18:00 - Early Dinner</option>
                          <option>19:30 - Prime Evening</option>
                          <option>21:00 - Nightfall</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block font-sans text-sm font-semibold text-text-secondary">Number of Guests</label>
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          onClick={() => handleGuestChange(-1)}
                          className="w-12 h-12 rounded-lg border border-outline-variant flex items-center justify-center text-primary hover:bg-primary/5 transition-colors text-xl font-bold"
                        >
                          -
                        </button>
                        <span className="w-16 text-center font-serif text-2xl text-primary font-bold">
                          {formData.guests}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleGuestChange(1)}
                          className="w-12 h-12 rounded-lg border border-outline-variant flex items-center justify-center text-primary hover:bg-primary/5 transition-colors text-xl font-bold"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-xs text-outline italic mt-2">For parties larger than 12, please contact our events team directly.</p>
                    </div>

                    <div className="pt-6 flex justify-end">
                      <Button type="button" onClick={handleNext} className="w-full sm:w-auto flex items-center justify-center gap-2">
                        Continue to Seating
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2: Seating Choice */}
                {step === 2 && (
                  <div className="space-y-8">
                    <h3 className="font-serif text-2xl text-primary mb-4">Choose Your Experience</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                      {/* Radios 1: Pod Dining */}
                      <label className="relative group cursor-pointer block">
                        <input
                          type="radio"
                          name="seating"
                          checked={formData.seating === 'pod'}
                          onChange={() => handleRadioChange('pod')}
                          className="sr-only"
                        />
                        <div className={`p-4 rounded-xl border transition-all h-full flex flex-col ${formData.seating === 'pod' ? 'border-primary bg-primary/5 shadow-sm' : 'border-outline-variant'
                          }`}>
                          <div className="h-48 rounded-lg overflow-hidden mb-4">
                            <img
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn0XdO5u3bkHDyJ45_bdj2ik-zhkhgLYsdcTaoNtdLA01YN54FEN0Rxhf1K6tiA5xM0M0W9udobabF_BvXryrk1MHxOwRtgVL59FtZNrNlzTKK_MRssrXc2Fvs8SpKH4AbEs_uo4TlqRWcQIOuNaWAa6QJ_L5C0JzNU_7CCTrf-fGtlzZEkNBVWsxNq01U-JA5Yk-xN_LZ6NC0u8BJa6rCd9wAJoXwnhF82i-P3x8um-n5uf9JCDEMbQqsk2f8HV6HNfkNoWglbCjl"
                              alt="Private Pod"
                            />
                          </div>
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-serif text-xl font-bold text-primary">The Private Pod</h4>
                            <span className="bg-secondary-container/10 border border-secondary/15 text-secondary px-2.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-widest">Highly Coveted</span>
                          </div>
                          <p className="text-xs sm:text-sm text-text-secondary mb-4 flex-grow">An architecturally unique, fully climate-controlled wooden 'tube' offering absolute privacy and panoramic garden views.</p>
                          <div className="flex items-center gap-1 text-primary text-xs font-semibold">
                            <span>Available for your time</span>
                          </div>
                        </div>
                      </label>

                      {/* Radios 2: Courtyard Seating */}
                      <label className="relative group cursor-pointer block">
                        <input
                          type="radio"
                          name="seating"
                          checked={formData.seating === 'courtyard'}
                          onChange={() => handleRadioChange('courtyard')}
                          className="sr-only"
                        />
                        <div className={`p-4 rounded-xl border transition-all h-full flex flex-col ${formData.seating === 'courtyard' ? 'border-primary bg-primary/5 shadow-sm' : 'border-outline-variant'
                          }`}>
                          <div className="h-48 rounded-lg overflow-hidden mb-4">
                            <img
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo_TF2F-gp7-hPrLAofNCPXKAcjHq48xbFeOLBN4kmi89f2CABS8Nix7l9qFjdXWy2LehLO1CeUqDc6gXwqjc74w0RcyD--LRnLtpsSTGbrAFCcAGbqsWok5RR9d9L0DDLwBqzohdqLxFkqauN680Y0Gv6cETb-VjeKpr65194vPBXMSj9_yo39Njv60Wo5qGBOaU5aVK_cPUs-9XAjpw8_NTAadMDxjc32W99Aroim2B_DnfHlGCzXHsI1Agvp8jiE6lBhhnaWn-J"
                              alt="Courtyard Terrace"
                            />
                          </div>
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-serif text-xl font-bold text-primary">Courtyard Terrace</h4>
                          </div>
                          <p className="text-xs sm:text-sm text-text-secondary mb-4 flex-grow">Dine under the stars amidst our curated botanical collection. Features heated seating and atmospheric hanging lanterns.</p>
                          <div className="flex items-center gap-1 text-text-secondary text-xs font-semibold">
                            <span>Limited availability</span>
                          </div>
                        </div>
                      </label>

                    </div>

                    <div className="pt-6 flex flex-col sm:flex-row justify-between gap-3">
                      <button type="button" onClick={handleBack} className="text-primary font-sans text-sm font-bold flex items-center justify-center sm:justify-start gap-2 hover:underline">
                        <ArrowLeft className="h-4 w-4" /> Back
                      </button>
                      <Button type="button" onClick={handleNext} className="w-full sm:w-auto flex items-center justify-center gap-2">
                        Confirm Details
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Confirmation */}
                {step === 3 && (
                  <div className="space-y-8">
                    <div className="bg-surface-low p-6 rounded-lg border border-outline-variant/30 mb-8">
                      <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-primary mb-4">Reservation Summary</h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-xs text-text-secondary block mb-1">Dine Date</span>
                          <span className="font-sans font-bold text-text-primary">{formData.date}</span>
                        </div>
                        <div>
                          <span className="text-xs text-text-secondary block mb-1">Time</span>
                          <span className="font-sans font-bold text-text-primary">{formData.time}</span>
                        </div>
                        <div>
                          <span className="text-xs text-text-secondary block mb-1">Guests</span>
                          <span className="font-sans font-bold text-text-primary">{formData.guests} People</span>
                        </div>
                        <div>
                          <span className="text-xs text-text-secondary block mb-1">Location</span>
                          <span className="font-sans font-bold text-text-primary">{formData.seating === 'pod' ? 'Private Pod' : 'Courtyard Terrace'}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="font-serif text-2xl text-primary">Your Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                          label="Full Name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          error={errors.name}
                          placeholder="Gotu Gadhiya"
                        />
                        <Input
                          label="Email Address"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          error={errors.email}
                          placeholder="gotu@example.com"
                        />
                      </div>

                      <div className="flex flex-col space-y-1.5 w-full">
                        <label className="text-xs font-bold uppercase tracking-wider text-text-secondary font-sans">
                          Special Occasion or Dietary Requirements
                        </label>
                        <textarea
                          name="notes"
                          value={formData.notes}
                          onChange={handleInputChange}
                          rows={3}
                          placeholder="Anniversary, Gluten-free menu requested, etc..."
                          className="w-full bg-surface-low border-b-2 border-outline-variant focus:border-primary px-3 py-2.5 text-sm text-text-primary outline-none transition-colors duration-250 resize-none"
                        />
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            name="agree"
                            id="agree"
                            checked={formData.agree}
                            onChange={handleInputChange}
                            className="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4 shrink-0 cursor-pointer"
                          />
                          <label htmlFor="agree" className="text-xs text-text-secondary leading-relaxed cursor-pointer">
                            I agree to the cancellation policy. Reservations canceled less than 24 hours in advance may be subject to a fee.
                          </label>
                        </div>
                        {errors.agree && <p className="text-xs text-error">{errors.agree}</p>}
                      </div>
                    </div>

                    <div className="pt-6 flex flex-col sm:flex-row justify-between gap-3">
                      <button type="button" onClick={handleBack} className="text-primary font-sans text-sm font-bold flex items-center justify-center sm:justify-start gap-2 hover:underline">
                        <ArrowLeft className="h-4 w-4" /> Back
                      </button>
                      <Button variant="primary" type="submit" className="w-full sm:w-auto flex items-center justify-center gap-2 shadow-lg shadow-primary/10">
                        Complete Reservation
                      </Button>
                    </div>
                  </div>
                )}

              </form>
            </div>

            {/* Stepper info footer */}
            <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-center text-text-secondary">
              <div className="flex flex-col items-center gap-2">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary">Valet Parking</span>
                <p className="text-xs italic">Complimentary service for all guests</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary">Seasonal Tasting</span>
                <p className="text-xs italic">Our menu changes with the lunar cycle</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary">Dress Code</span>
                <p className="text-xs italic">Smart casual botanical attire</p>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* Confirmation Success Modal */}
      <Modal
        isOpen={isSuccessOpen}
        onClose={resetForm}
        title="Reservation Request Submitted"
      >
        <div className="text-center py-6 space-y-4">
          <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
            <CheckCircle className="h-6 w-6" />
          </div>
          <h4 className="text-xl font-serif text-primary font-bold">Thank you, {formData.name}!</h4>
          <p className="text-text-secondary text-sm leading-relaxed max-w-sm mx-auto">
            Your table reservation request for a <strong className="text-primary">{formData.seating === 'pod' ? 'Private Pod' : 'Courtyard Terrace'}</strong> on <strong className="text-primary">{formData.date}</strong> has been received.
          </p>
          <p className="text-text-secondary text-xs">
            We have sent a confirmation email to <strong>{formData.email}</strong>.
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
