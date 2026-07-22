"use client";
import React from "react";
import { RegistrationData } from "../../app/register/page";

type Props = {
  data: RegistrationData["student"];
  updateData: (data: Partial<RegistrationData["student"]>) => void;
  onNext: () => void;
};

export default function StudentDetailsStep({ data, updateData, onNext }: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="text-2xl font-display font-bold text-brand-dark mb-2">Student Details</h2>
        <p className="text-sm text-slate-500 font-sans">Please provide the candidate's personal information.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold font-display uppercase tracking-widest text-brand-dark">First Name</label>
          <input
            required
            type="text"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-none focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all"
            value={data.firstName}
            onChange={(e) => updateData({ firstName: e.target.value })}
            placeholder="John"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold font-display uppercase tracking-widest text-brand-dark">Middle Name</label>
          <input
            type="text"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-none focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all"
            value={data.middleName}
            onChange={(e) => updateData({ middleName: e.target.value })}
            placeholder="Michael"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold font-display uppercase tracking-widest text-brand-dark">Last Name</label>
          <input
            required
            type="text"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-none focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all"
            value={data.lastName}
            onChange={(e) => updateData({ lastName: e.target.value })}
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold font-display uppercase tracking-widest text-brand-dark">Date of Birth</label>
          <input
            required
            type="date"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-none focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all"
            value={data.dob}
            onChange={(e) => updateData({ dob: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold font-display uppercase tracking-widest text-brand-dark">Gender</label>
          <select
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-none focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all"
            value={data.gender}
            onChange={(e) => updateData({ gender: e.target.value })}
          >
            <option value="" disabled>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold font-display uppercase tracking-widest text-brand-dark">Current Year</label>
          <select
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-none focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all"
            value={data.grade}
            onChange={(e) => updateData({ grade: e.target.value })}
          >
            <option value="" disabled>Select Year</option>
            <option value="Year 4">Year 4</option>
            <option value="Year 5">Year 5</option>
            <option value="Year 6">Year 6</option>
            <option value="Year 7">Year 7</option>
            <option value="Year 8">Year 8</option>
            <option value="Year 9">Year 9</option>
            <option value="Year 10">Year 10</option>
            <option value="Year 11">Year 11</option>
            <option value="Year 12">Year 12</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold font-display uppercase tracking-widest text-brand-dark">Nationality</label>
          <select
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-none focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all"
            value={data.nationality}
            onChange={(e) => updateData({ nationality: e.target.value })}
          >
            <option value="" disabled>Select Country</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="pt-6 flex justify-end">
        <button
          type="submit"
          className="px-8 py-4 bg-brand-dark hover:bg-brand-blue text-white font-bold font-display uppercase tracking-widest rounded-none transition-all cursor-pointer"
        >
          Next Step
        </button>
      </div>
    </form>
  );
}

