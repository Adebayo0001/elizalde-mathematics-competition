"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import dynamic from "next/dynamic";

import GroupSchoolStep from "../../../components/registration/group/GroupSchoolStep";
import GroupCategoryStep from "../../../components/registration/group/GroupCategoryStep";
import GroupRosterStep from "../../../components/registration/group/GroupRosterStep";
import { GroupRegistrationData, blankStudent } from "../../../components/registration/group/types";

const GroupPaymentStep = dynamic(
  () => import("../../../components/registration/group/GroupPaymentStep"),
  { ssr: false }
);

const initialData: GroupRegistrationData = {
  school: {
    schoolName: "",
    schoolAddress: "",
    phone: "",
    email: "",
    altEmail: "",
  },
  competition: {
    category: "",
    mode: "",
  },
  students: [blankStudent(), blankStudent()],
  consent: false,
};

const steps = [
  { id: 1, title: "School" },
  { id: 2, title: "Category" },
  { id: 3, title: "Students" },
  { id: 4, title: "Payment" },
];

export default function GroupRegistrationPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<GroupRegistrationData>(initialData);

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 4));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const updateSchool = (data: Partial<GroupRegistrationData["school"]>) =>
    setFormData((prev) => ({ ...prev, school: { ...prev.school, ...data } }));

  const updateCompetition = (data: Partial<GroupRegistrationData["competition"]>) =>
    setFormData((prev) => ({
      ...prev,
      competition: { ...prev.competition, ...data },
      // Reset students grade when category changes
      students: prev.students.map((s) => ({ ...s, grade: "" })),
    }));

  const updateStudents = (students: GroupRegistrationData["students"]) =>
    setFormData((prev) => ({ ...prev, students }));

  return (
    <div className="min-h-screen bg-brand-bg font-sans text-brand-dark flex flex-col">
      <header className="bg-brand-bg/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            href="/register"
            className="flex items-center gap-2 text-sm font-bold font-display uppercase tracking-widest text-slate-500 hover:text-brand-dark transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-inherit" />
            Back
          </Link>
          <div className="font-display font-extrabold text-lg text-brand-dark tracking-tight">
            EMC Olympiad
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
                className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-brand-red rounded-none z-0 transition-all duration-500 ease-out"
                style={{ width: `${((step - 1) / 3) * 100}%` }}
              />
              {steps.map((s) => (
                <div key={s.id} className="relative z-10 flex flex-col items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-none flex items-center justify-center text-sm font-bold transition-colors duration-300 ${
                      step >= s.id ? "bg-brand-red text-white" : "bg-slate-200 text-slate-400"
                    }`}
                  >
                    {step > s.id ? <Check className="w-5 h-5 text-white" strokeWidth={3} /> : s.id}
                  </div>
                  <span
                    className={`text-[10px] font-bold font-display uppercase tracking-widest absolute -bottom-6 w-24 text-center ${
                      step >= s.id ? "text-brand-dark" : "text-slate-400"
                    }`}
                  >
                    {s.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="bg-white rounded-none shadow-xl border border-slate-200/50 p-8 md:p-12">
            {step === 1 && (
              <GroupSchoolStep
                data={formData.school}
                updateData={updateSchool}
                onNext={handleNext}
                onBack={() => (window.location.href = "/register")}
              />
            )}
            {step === 2 && (
              <GroupCategoryStep
                data={formData.competition}
                updateData={updateCompetition}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}
            {step === 3 && (
              <GroupRosterStep
                students={formData.students}
                category={formData.competition.category}
                updateStudents={updateStudents}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}
            {step === 4 && (
              <GroupPaymentStep data={formData} onBack={handleBack} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
