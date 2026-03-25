import { useState } from 'react';
import { motion } from 'framer-motion';
import { admissionSteps } from '../data/siteData';
import SectionTitle from './SectionTitle';

const AdmissionSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    city: '',
    qualification: '',
    course: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Admission Form Data:', formData);
    alert('Form submitted successfully!');
    setFormData({
      fullName: '',
      mobileNumber: '',
      email: '',
      city: '',
      qualification: '',
      course: '',
      message: '',
    });
  };

  return (
    <section id="admission" className="py-14 sm:py-16">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Admissions"
          title="A simple, premium and confidence-driven admission experience"
          description="Take the next step with a guided admission journey designed to be simple, clear and student-friendly."
          align="center"
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          {/* LEFT: Admission Process */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card flex h-full flex-col rounded-[28px] p-5 sm:p-6"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-brand-200">
              Admission Process
            </p>

            <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
              Your journey from interest to enrollment
            </h3>

            <div className="mt-6 flex flex-1 flex-col space-y-3">
              {admissionSteps.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-3"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-slate-900">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-sm leading-6 text-slate-200">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-brand-300/20 bg-brand-400/10 p-4">
              <p className="text-sm leading-6 text-slate-200">
                Complete the form and our admission team will get in touch with you
                to guide you through the next steps.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card h-full rounded-[28px] p-5 sm:p-6 lg:p-8"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-brand-200">
              Admission Form
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              Fill in your details
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Complete the form below and our team will connect with you shortly.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-brand-300/40"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-brand-300/40"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-brand-300/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-brand-300/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Highest Qualification
                </label>
                <select
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-brand-300/40"
                  required
                >
                  <option value="" className="text-slate-900">
                    Select qualification
                  </option>
                  <option value="10th" className="text-slate-900">10th</option>
                  <option value="12th" className="text-slate-900">12th</option>
                  <option value="Diploma" className="text-slate-900">Diploma</option>
                  <option value="Graduate" className="text-slate-900">Graduate</option>
                  <option value="Post Graduate" className="text-slate-900">Post Graduate</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Interested Course
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-brand-300/40"
                  required
                >
                  <option value="" className="text-slate-900">
                    Select course
                  </option>
                  <option value="CCNA" className="text-slate-900">CCNA</option>
                  <option value="CCNP" className="text-slate-900">CCNP</option>
                  <option value="Cyber Security" className="text-slate-900">Cyber Security</option>
                  <option value="Cloud Computing" className="text-slate-900">Cloud Computing</option>
                  <option value="Ethical Hacking" className="text-slate-900">Ethical Hacking</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-white">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message"
                  rows="5"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-brand-300/40"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:translate-y-[-2px]"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionSection;