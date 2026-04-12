'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'ACCA Courses', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email is required";
    if (formData.message.length < 10) newErrors.message = "Message must be at least 10 characters";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Inquiry Sent:", formData);
      setSubmitted(true);
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="bg-brand-grey-50 min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl font-bold text-gray-900">Contact Us</h1>
          <p className="mt-4 font-body text-gray-600">Have a question for our Academic or Advisory wing? Reach out below.</p>
        </div>

        {submitted ? (
          <div className="bg-success-50 border border-success-200 p-8 rounded-2xl text-center">
            <h2 className="font-heading text-2xl font-bold text-success-1000">Inquiry Received!</h2>
            <p className="mt-2 font-body text-success-900">Our team will get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-sm border border-brand-grey-1000 space-y-6">
            <div>
              <label className="block font-heading text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input 
                type="text"
                className={`w-full rounded-lg border px-4 py-3 font-body focus:ring-2 focus:ring-brand-purple-500 outline-none transition-all ${errors.name ? 'border-error-500' : 'border-brand-grey-1000'}`}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              {errors.name && <p className="mt-1 text-xs text-error-1000 font-body">{errors.name}</p>}
            </div>

            <div>
              <label className="block font-heading text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input 
                type="email"
                className={`w-full rounded-lg border px-4 py-3 font-body focus:ring-2 focus:ring-brand-purple-500 outline-none transition-all ${errors.email ? 'border-error-500' : 'border-brand-grey-1000'}`}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              {errors.email && <p className="mt-1 text-xs text-error-1000 font-body">{errors.email}</p>}
            </div>

            <div>
              <label className="block font-heading text-sm font-medium text-gray-700 mb-2">Inquiry Type</label>
              <select 
                className="w-full rounded-lg border border-brand-grey-1000 px-4 py-3 font-body outline-none"
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
              >
                <option>ACCA Courses</option>
                <option>Professional Advisory</option>
                <option>Corporate Training</option>
                <option>General Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block font-heading text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea 
                rows={5}
                className={`w-full rounded-lg border px-4 py-3 font-body focus:ring-2 focus:ring-brand-purple-500 outline-none transition-all ${errors.message ? 'border-error-500' : 'border-brand-grey-1000'}`}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
              {errors.message && <p className="mt-1 text-xs text-error-1000 font-body">{errors.message}</p>}
            </div>

            <button type="submit" className="w-full bg-brand-purple-1000 text-white font-heading font-bold py-4 rounded-lg hover:bg-brand-purple-900 transition-all shadow-md">
              Send Inquiry
            </button>
          </form>
        )}
      </div>
    </div>
  );
}