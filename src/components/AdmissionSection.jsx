import { useState } from 'react';
import { motion } from 'framer-motion';
import { admissionSteps } from '../data/siteData';
import SectionTitle from './SectionTitle';

const initialFormData = {
  name: '',
  fatherName: '',
  dateOfBirth: '',
  contact: '',
  email: '',
  address: '',
  graduationDegree: '',
  graduationPassOutYear: '',
  masterDegree: '',
  masterPassOutYear: '',
  certification: '',
  programEnrolled: '',
  totalFeeApplication: '',
  feePaid: '',
  paymentMethod: '',
  signature: null,
  proofUpload: null,
  agree: false,
};

const AdmissionSection = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox'
          ? checked
          : type === 'file'
            ? files[0]
            : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Admission Form Data:', formData);
    alert('Form submitted successfully!');
    setFormData(initialFormData);
  };

  return (
    <section id="admission" className="py-6 sm:py-8">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Admissions"
          title="Admission Form"
          description="Fill in your details carefully to complete your admission process."
          align="center"
        />

        <div className="mt-3 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          {/* Left Side */}
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
              Complete your registration in simple steps
            </h3>

            <div className="mt-4 flex flex-1 flex-col space-y-3">
              {admissionSteps?.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-3"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-slate-900">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-sm leading-6 text-slate-200">{step}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-brand-300/20 bg-brand-400/10 p-4">
              <p className="text-sm leading-6 text-slate-200">
                Please enter correct personal, academic, and fee details before
                submitting the application.
              </p>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card h-[600px] rounded-[28px] p-5 sm:p-6 lg:p-8 flex flex-col"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-brand-200 shrink-0">
              Application Form
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white shrink-0">
              Fill in your details
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-300 shrink-0">
              Enter all required details below.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-4 flex-1 overflow-y-auto pr-2"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none focus:border-brand-300/40"
                    required
                  />
                </div>

                {/* Father Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white">
                    Father Name
                  </label>
                  <input
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    placeholder="Enter father name"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none focus:border-brand-300/40"
                    required
                  />
                </div>

                {/* DOB */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-brand-300/40"
                    required
                  />
                </div>

                {/* Contact */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white">
                    Contact
                  </label>
                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Enter contact number"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none focus:border-brand-300/40"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none focus:border-brand-300/40"
                    required
                  />
                </div>

                {/* Program Enrolled */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white">
                    Program Enrolled
                  </label>
                  <input
                    type="text"
                    name="programEnrolled"
                    value={formData.programEnrolled}
                    onChange={handleChange}
                    placeholder="Enter program enrolled"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none focus:border-brand-300/40"
                    required
                  />
                </div>

                {/* Address */}
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-white">
                    Address
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your address"
                    rows="4"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none focus:border-brand-300/40"
                    required
                  />
                </div>

                {/* Graduation Degree */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white">
                    Graduation Degree
                  </label>
                  <input
                    type="text"
                    name="graduationDegree"
                    value={formData.graduationDegree}
                    onChange={handleChange}
                    placeholder="Enter graduation degree"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none focus:border-brand-300/40"
                  />
                </div>

                {/* Graduation Pass Out Year */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white">
                    Graduation Pass Out Year
                  </label>
                  <input
                    type="text"
                    name="graduationPassOutYear"
                    value={formData.graduationPassOutYear}
                    onChange={handleChange}
                    placeholder="Enter graduation pass out year"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none focus:border-brand-300/40"
                  />
                </div>

                {/* Master Degree */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white">
                    Master Degree
                  </label>
                  <input
                    type="text"
                    name="masterDegree"
                    value={formData.masterDegree}
                    onChange={handleChange}
                    placeholder="Enter master degree"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none focus:border-brand-300/40"
                  />
                </div>

                {/* Master Pass Out Year */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white">
                    Master Pass Out Year
                  </label>
                  <input
                    type="text"
                    name="masterPassOutYear"
                    value={formData.masterPassOutYear}
                    onChange={handleChange}
                    placeholder="Enter master pass out year"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none focus:border-brand-300/40"
                  />
                </div>

                {/* Certification */}
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-white">
                    Add Any Certification
                  </label>
                  <textarea
                    name="certification"
                    value={formData.certification}
                    onChange={handleChange}
                    placeholder="Enter your certifications"
                    rows="3"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none focus:border-brand-300/40"
                  />
                </div>

                {/* Total Fee Application */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white">
                    Total Fee Application
                  </label>
                  <input
                    type="number"
                    name="totalFeeApplication"
                    value={formData.totalFeeApplication}
                    onChange={handleChange}
                    placeholder="Enter total fee"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none focus:border-brand-300/40"
                  />
                </div>

                {/* Fee Paid */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white">
                    Fee Paid
                  </label>
                  <input
                    type="number"
                    name="feePaid"
                    value={formData.feePaid}
                    onChange={handleChange}
                    placeholder="Enter fee paid"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none focus:border-brand-300/40"
                  />
                </div>

                {/* Payment Method */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white">
                    Method of Payment
                  </label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-brand-300/40"
                    required
                  >
                    <option value="" className="text-slate-900">
                      Select payment method
                    </option>
                    <option value="Cash" className="text-slate-900">
                      Cash
                    </option>
                    <option value="UPI" className="text-slate-900">
                      UPI
                    </option>
                    <option value="Card" className="text-slate-900">
                      Card
                    </option>
                    <option value="Bank Transfer" className="text-slate-900">
                      Bank Transfer
                    </option>
                  </select>
                </div>

                {/* Signature */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white">
                    Signature Upload
                  </label>

                  <input
                    type="file"
                    name="signature"
                    accept="image/*"
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white 
    file:mr-4 file:rounded-lg file:border-0 file:bg-white file:px-4 file:py-2 
    file:text-sm file:font-semibold file:text-slate-900"
                    required
                  />
                </div>

                {/* Proof Upload */}
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-white">
                    Upload Proof
                  </label>
                  <input
                    type="file"
                    name="proofUpload"
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white file:mr-4 file:rounded-lg file:border-0 file:bg-white file:px-4 file:py-2 file:text-sm file:font-semibold file:text-slate-900"
                  />
                </div>

                {/* Agree */}
                <div className="sm:col-span-2">
                  <label className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                    <input
                      type="checkbox"
                      name="agree"
                      checked={formData.agree}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4"
                      required
                    />
                    <span>
                      I agree that all the information provided by me is correct.
                    </span>
                  </label>
                </div>

                {/* Submit */}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:translate-y-[-2px]"
                  >
                    Submit Application
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionSection;