"use client";
import React, { useRef } from "react";
import { RegistrationData } from "../../app/register/page";
import { Upload } from "lucide-react";

type Props = {
  data: RegistrationData["competition"];
  updateData: (data: Partial<RegistrationData["competition"]>) => void;
  onNext: () => void;
  onBack: () => void;
};

export default function CompetitionDetailsStep({ data, updateData, onNext, onBack }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.consent) {
      alert("Please agree to the declaration and consent.");
      return;
    }
    onNext();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      updateData({ passportFile: e.target.files[0] });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <div>
        <h2 className="text-2xl font-display font-bold text-brand-dark mb-2">Competition Details</h2>
        <p className="text-sm text-slate-500 font-sans">Finalize the candidate's participation details and upload necessary documents.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold font-display uppercase tracking-widest text-brand-dark">Competition Category</label>
          <select
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-none focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all"
            value={data.category}
            onChange={(e) => updateData({ category: e.target.value })}
          >
            <option value="" disabled>Select Category</option>
            <option value="Elementary">Elementary (Grades 4-6)</option>
            <option value="Middle School">Middle School (Grades 7-9)</option>
            <option value="High School">High School (Grades 10-12)</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold font-display uppercase tracking-widest text-brand-dark">Mode of Participation</label>
          <select
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-none focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all"
            value={data.mode}
            onChange={(e) => updateData({ mode: e.target.value })}
          >
            <option value="" disabled>Select Mode</option>
            <option value="Online">Online</option>
            <option value="Physical">Physical (At Venue)</option>
          </select>
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-xs font-bold font-display uppercase tracking-widest text-brand-dark block mb-2">Passport Photograph</label>
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-slate-300 bg-slate-50 hover:bg-slate-100 transition-colors rounded-none p-8 flex flex-col items-center justify-center cursor-pointer text-center"
          >
            <Upload className="w-8 h-8 text-slate-400 mb-3" />
            <span className="text-sm font-bold text-brand-dark">
              {data.passportFile ? data.passportFile.name : "Click to upload passport photograph"}
            </span>
            <span className="text-xs text-slate-500 mt-1">JPEG or PNG, max 2MB</span>
            <input 
              type="file" 
              accept="image/jpeg, image/png"
              className="hidden" 
              ref={fileInputRef}
              onChange={handleFileChange}
            />
          </div>
        </div>

        <div className="space-y-4 md:col-span-2 pt-4">
          <label className="flex items-start gap-4 cursor-pointer p-4 rounded-none border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors">
            <div className="flex-shrink-0 mt-1">
              <input
                type="checkbox"
                required
                checked={data.consent}
                onChange={(e) => updateData({ consent: e.target.checked })}
                className="w-5 h-5 text-brand-blue rounded-none border-slate-300 focus:ring-brand-blue focus:ring-2"
              />
            </div>
            <div className="text-sm text-slate-600 font-sans">
              <span className="font-bold text-brand-dark block mb-1">Declaration and Consent</span>
              I confirm that the details provided are true and correct. I also give consent for the use of photographs and video recordings taken during the competition for promotional purposes.
            </div>
          </label>
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
          className="px-8 py-4 bg-brand-red hover:bg-brand-blue text-white font-bold font-display uppercase tracking-widest rounded-none transition-all cursor-pointer"
        >
          Review & Submit
        </button>
      </div>
    </form>
  );
}

