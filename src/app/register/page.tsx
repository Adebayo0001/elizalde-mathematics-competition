"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, User, Users } from "lucide-react";
import GlobalHeader from "../../components/GlobalHeader";

export default function RegistrationTypePage() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans text-brand-dark flex flex-col">
      <GlobalHeader />

      <main className="flex-grow flex items-center justify-center py-16 px-6">
        <div className="max-w-2xl w-full mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-display font-extrabold text-brand-dark tracking-tight mb-4">
              How are you registering?
            </h1>
            <p className="text-slate-500 font-sans text-base leading-relaxed max-w-md mx-auto">
              Select the registration type below. You can register a single
              student or submit a group of students from your school in one go.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Individual */}
            <Link
              href="/register/individual"
              className="group block bg-white border-2 border-slate-200 hover:border-brand-blue hover:shadow-lg transition-all duration-300 p-8 rounded-none"
            >
              <div className="w-14 h-14 bg-brand-blue text-white flex items-center justify-center mb-6 group-hover:bg-brand-blue/90 transition-colors duration-300">
                <User className="w-7 h-7 !text-white" />
              </div>
              <h2 className="text-xl font-display font-bold text-brand-dark mb-2 tracking-tight">
                Individual Registration
              </h2>
              <p className="text-sm text-slate-500 font-sans leading-relaxed mb-6">
                Register one student. Complete their personal details, school
                information, and competition category before proceeding to
                payment.
              </p>

            </Link>

            {/* Group */}
            <Link
              href="/register/group"
              className="group block bg-white border-2 border-slate-200 hover:border-brand-red hover:shadow-lg transition-all duration-300 p-8 rounded-none"
            >
              <div className="w-14 h-14 bg-brand-red text-white flex items-center justify-center mb-6 group-hover:bg-brand-red/90 transition-colors duration-300">
                <Users className="w-7 h-7 !text-white" />
              </div>
              <h2 className="text-xl font-display font-bold text-brand-dark mb-2 tracking-tight">
                Group Registration
              </h2>
              <p className="text-sm text-slate-500 font-sans leading-relaxed mb-6">
                Register 2 to 4 students from the same school in one
                submission. One payment covers the entire group.
              </p>

            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
