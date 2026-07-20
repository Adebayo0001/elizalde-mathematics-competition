"use client";
import React from "react";
import { RegistrationData } from "../../app/register/page";

type Props = {
  data: RegistrationData["school"];
  updateData: (data: Partial<RegistrationData["school"]>) => void;
  onNext: () => void;
  onBack: () => void;
};

export default function SchoolDetailsStep({ data, updateData, onNext, onBack }: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <div>
        <h2 className="text-2xl font-display font-bold text-brand-dark mb-2">School & Contact Details</h2>
        <p className="text-sm text-slate-500 font-sans">Provide the academic and contact information for verification.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2 md:col-span-2">
          <label className="text-xs font-bold font-display uppercase tracking-widest text-brand-dark">School Name</label>
          <input
            required
            type="text"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-none focus:outline-none focus:ring-2 focus:ring-brand-teal focus:bg-white transition-all"
            value={data.schoolName}
            onChange={(e) => updateData({ schoolName: e.target.value })}
            placeholder="e.g. Springfield High School"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-xs font-bold font-display uppercase tracking-widest text-brand-dark">School Address</label>
          <input
            required
            type="text"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-none focus:outline-none focus:ring-2 focus:ring-brand-teal focus:bg-white transition-all"
            value={data.schoolAddress}
            onChange={(e) => updateData({ schoolAddress: e.target.value })}
            placeholder="123 Education Ave"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold font-display uppercase tracking-widest text-brand-dark">Phone Number</label>
          <input
            required
            type="tel"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-none focus:outline-none focus:ring-2 focus:ring-brand-teal focus:bg-white transition-all"
            value={data.phone}
            onChange={(e) => updateData({ phone: e.target.value })}
            placeholder="+1 (555) 000-0000"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-xs font-bold font-display uppercase tracking-widest text-brand-dark">Email Address</label>
          <input
            required
            type="email"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-none focus:outline-none focus:ring-2 focus:ring-brand-teal focus:bg-white transition-all"
            value={data.email}
            onChange={(e) => updateData({ email: e.target.value })}
            placeholder="contact@school.edu"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold font-display uppercase tracking-widest text-brand-dark">Alternative Email</label>
          <input
            type="email"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-none focus:outline-none focus:ring-2 focus:ring-brand-teal focus:bg-white transition-all"
            value={data.altEmail}
            onChange={(e) => updateData({ altEmail: e.target.value })}
            placeholder="admin@school.edu (Optional)"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-xs font-bold font-display uppercase tracking-widest text-brand-dark">Residential Address (Student)</label>
          <input
            required
            type="text"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-none focus:outline-none focus:ring-2 focus:ring-brand-teal focus:bg-white transition-all"
            value={data.residentialAddress}
            onChange={(e) => updateData({ residentialAddress: e.target.value })}
            placeholder="Student's home address"
          />
        </div>
      </div>

      <div className="pt-6 flex justify-between items-center">
        <button
          type="button"
          onClick={onBack}
          className="px-8 py-4 text-slate-500 hover:text-brand-dark hover:bg-slate-100 font-bold font-display uppercase tracking-widest rounded-none transition-all cursor-pointer"
        >
          Go Back
        </button>
        <button
          type="submit"
          className="px-8 py-4 bg-brand-dark hover:bg-brand-teal text-white font-bold font-display uppercase tracking-widest rounded-none transition-all cursor-pointer"
        >
          Next Step
        </button>
      </div>
    </form>
  );
}
