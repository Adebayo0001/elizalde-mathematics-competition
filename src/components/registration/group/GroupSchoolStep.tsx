"use client";
import React from "react";
import { GroupRegistrationData } from "./types";

type Props = {
  data: GroupRegistrationData["school"];
  updateData: (data: Partial<GroupRegistrationData["school"]>) => void;
  onNext: () => void;
  onBack: () => void;
};

const inputClass =
  "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-none focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all";
const labelClass =
  "text-xs font-bold font-display uppercase tracking-widest text-brand-dark";

export default function GroupSchoolStep({ data, updateData, onNext, onBack }: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <div>
        <h2 className="text-2xl font-display font-bold text-brand-dark mb-2">School & Contact Details</h2>
        <p className="text-sm text-slate-500 font-sans">
          This information applies to all students in this group submission.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2 md:col-span-2">
          <label className={labelClass}>School Name</label>
          <input required type="text" className={inputClass} value={data.schoolName}
            onChange={(e) => updateData({ schoolName: e.target.value })}
            placeholder="e.g. Springfield High School" />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className={labelClass}>School Address</label>
          <input required type="text" className={inputClass} value={data.schoolAddress}
            onChange={(e) => updateData({ schoolAddress: e.target.value })}
            placeholder="123 Education Ave" />
        </div>

        <div className="space-y-2">
          <label className={labelClass}>Phone Number</label>
          <input required type="tel" className={inputClass} value={data.phone}
            onChange={(e) => updateData({ phone: e.target.value })}
            placeholder="+234 800 000 0000" />
        </div>

        <div className="space-y-2">
          <label className={labelClass}>Primary Email</label>
          <input required type="email" className={inputClass} value={data.email}
            onChange={(e) => updateData({ email: e.target.value })}
            placeholder="contact@school.edu" />
        </div>

        <div className="space-y-2">
          <label className={labelClass}>Alternative Email <span className="text-slate-400 font-normal normal-case tracking-normal">(Optional)</span></label>
          <input type="email" className={inputClass} value={data.altEmail}
            onChange={(e) => updateData({ altEmail: e.target.value })}
            placeholder="admin@school.edu" />
        </div>

        <div className="space-y-2">
          <label className={labelClass}>Coordinator&apos;s Residential Address</label>
          <input required type="text" className={inputClass} value={data.residentialAddress}
            onChange={(e) => updateData({ residentialAddress: e.target.value })}
            placeholder="Coordinator's home address" />
        </div>
      </div>

      <div className="pt-6 flex justify-between items-center">
        <button type="button" onClick={onBack}
          className="px-8 py-4 text-slate-500 hover:text-brand-dark hover:bg-slate-100 font-bold font-display uppercase tracking-widest rounded-none transition-all cursor-pointer">
          Go Back
        </button>
        <button type="submit"
          className="px-8 py-4 bg-brand-dark hover:bg-brand-blue text-white font-bold font-display uppercase tracking-widest rounded-none transition-all cursor-pointer">
          Next Step
        </button>
      </div>
    </form>
  );
}
