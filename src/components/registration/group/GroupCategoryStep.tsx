"use client";
import React from "react";
import { GroupRegistrationData } from "./types";

type Props = {
  data: GroupRegistrationData["competition"];
  updateData: (data: Partial<GroupRegistrationData["competition"]>) => void;
  onNext: () => void;
  onBack: () => void;
};

const selectClass =
  "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-none focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all";
const labelClass =
  "text-xs font-bold font-display uppercase tracking-widest text-brand-dark";

export default function GroupCategoryStep({ data, updateData, onNext, onBack }: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <div>
        <h2 className="text-2xl font-display font-bold text-brand-dark mb-2">Competition Details</h2>
        <p className="text-sm text-slate-500 font-sans">
          Choose the category and participation mode. All students in this group will compete under the same category.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className={labelClass}>Competition Category</label>
          <select required className={selectClass} value={data.category}
            onChange={(e) => updateData({ category: e.target.value })}>
            <option value="" disabled>Select Category</option>
            <option value="Elementary">Elementary (Years 4–6)</option>
            <option value="Middle School">Middle School (Years 7–9)</option>
            <option value="High School">High School (Years 10–12)</option>
          </select>
          {data.category && (
            <p className="text-xs text-brand-blue font-sans mt-1">
              Student year groups will be validated against this category on the next step.
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className={labelClass}>Mode of Participation</label>
          <select required className={selectClass} value={data.mode}
            onChange={(e) => updateData({ mode: e.target.value })}>
            <option value="" disabled>Select Mode</option>
            <option value="Online">Online</option>
            <option value="Physical">Physical (At Venue)</option>
          </select>
        </div>
      </div>

      <div className="pt-6 flex justify-between items-center">
        <button type="button" onClick={onBack}
          className="px-8 py-4 text-slate-500 hover:text-brand-dark hover:bg-slate-100 font-bold font-display uppercase tracking-widest rounded-none transition-all cursor-pointer">
          Go Back
        </button>
        <button type="submit"
          className="px-8 py-4 bg-brand-dark hover:bg-brand-blue text-white font-bold font-display uppercase tracking-widest rounded-none transition-all cursor-pointer">
          Add Students
        </button>
      </div>
    </form>
  );
}
