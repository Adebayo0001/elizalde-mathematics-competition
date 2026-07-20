"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

import StudentDetailsStep from "../../components/registration/StudentDetailsStep";
import SchoolDetailsStep from "../../components/registration/SchoolDetailsStep";
import CompetitionDetailsStep from "../../components/registration/CompetitionDetailsStep";
import dynamic from "next/dynamic";

const PaymentStep = dynamic(() => import("../../components/registration/PaymentStep"), { ssr: false });

export type RegistrationData = {
  student: {
    firstName: string;
    middleName: string;
    lastName: string;
    dob: string;
    gender: string;
    grade: string;
    nationality: string;
  };
  school: {
    schoolName: string;
    schoolAddress: string;
    phone: string;
    email: string;
    altEmail: string;
    residentialAddress: string;
  };
  competition: {
    category: string;
    mode: string;
    passportFile: File | null;
    consent: boolean;
  };
};

const initialData: RegistrationData = {
  student: {
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    gender: "",
    grade: "",
    nationality: "",
  },
  school: {
    schoolName: "",
    schoolAddress: "",
    phone: "",
    email: "",
    altEmail: "",
    residentialAddress: "",
  },
  competition: {
    category: "",
    mode: "",
    passportFile: null,
    consent: false,
  },
};

export default function RegistrationPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<RegistrationData>(initialData);

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 4));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const updateStudentData = (data: Partial<RegistrationData["student"]>) => {
    setFormData((prev) => ({ ...prev, student: { ...prev.student, ...data } }));
  };

  const updateSchoolData = (data: Partial<RegistrationData["school"]>) => {
    setFormData((prev) => ({ ...prev, school: { ...prev.school, ...data } }));
  };

  const updateCompetitionData = (data: Partial<RegistrationData["competition"]>) => {
    setFormData((prev) => ({ ...prev, competition: { ...prev.competition, ...data } }));
  };

  const steps = [
    { id: 1, title: "Student" },
    { id: 2, title: "School" },
    { id: 3, title: "Competition" },
    { id: 4, title: "Payment" },
  ];

  return (
    <div className="min-h-screen bg-brand-bg font-sans text-brand-dark flex flex-col">
      {/* Header */}
      <header className="bg-brand-bg/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-bold font-display uppercase tracking-widest text-slate-500 hover:text-brand-dark transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="font-display font-extrabold text-lg text-brand-dark tracking-tight">
            EMC 2026 Registration
          </div>
        </div>
      </header>

      <main className="flex-grow py-12 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 rounded-none z-0" />
              <div 
                className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-brand-teal rounded-none z-0 transition-all duration-500 ease-out"
                style={{ width: `${((step - 1) / 3) * 100}%` }}
              />
              
              {steps.map((s) => (
                <div key={s.id} className="relative z-10 flex flex-col items-center gap-2">
                  <div className={`w-8 h-8 rounded-none flex items-center justify-center text-sm font-bold transition-colors duration-300 ${step >= s.id ? 'bg-brand-teal text-white' : 'bg-slate-200 text-slate-400'}`}>
                    {step > s.id ? <CheckCircle2 className="w-5 h-5" /> : s.id}
                  </div>
                  <span className={`text-[10px] font-bold font-display uppercase tracking-widest absolute -bottom-6 w-24 text-center ${step >= s.id ? 'text-brand-dark' : 'text-slate-400'}`}>
                    {s.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="bg-white rounded-none -[2rem] shadow-xl border border-slate-200/50 p-8 md:p-12">
            {step === 1 && (
              <StudentDetailsStep data={formData.student} updateData={updateStudentData} onNext={handleNext} />
            )}
            {step === 2 && (
              <SchoolDetailsStep data={formData.school} updateData={updateSchoolData} onNext={handleNext} onBack={handleBack} />
            )}
            {step === 3 && (
              <CompetitionDetailsStep data={formData.competition} updateData={updateCompetitionData} onNext={handleNext} onBack={handleBack} />
            )}
            {step === 4 && (
              <PaymentStep formData={formData} onBack={handleBack} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
