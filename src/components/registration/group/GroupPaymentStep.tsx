"use client";
import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { GroupRegistrationData, REGISTRATION_FEE } from "./types";

type Props = {
  data: GroupRegistrationData;
  onBack: () => void;
};

export default function GroupPaymentStep({ data, onBack }: Props) {
  const [paymentStatus, setPaymentStatus] = useState<"pending" | "success">("pending");

  const totalAmount = data.students.length * REGISTRATION_FEE;
  const publicKey = "pk_test_dummy_public_key_replace_me_later";

  const componentProps = {
    email: data.school.email || "school@example.com",
    amount: totalAmount * 100, // kobo
    metadata: {
      name: data.school.schoolName,
      phone: data.school.phone,
      custom_fields: [
        {
          display_name: "School Name",
          variable_name: "school_name",
          value: data.school.schoolName,
        },
        {
          display_name: "Category",
          variable_name: "category",
          value: data.competition.category,
        },
        {
          display_name: "Mode",
          variable_name: "mode",
          value: data.competition.mode,
        },
        {
          display_name: "Student Count",
          variable_name: "student_count",
          value: String(data.students.length),
        },
        {
          display_name: "Students",
          variable_name: "students",
          value: data.students
            .map((s) => `${s.firstName} ${s.lastName} (${s.grade})`)
            .join(", "),
        },
      ],
    },
    publicKey,
    text: `Pay ₦${totalAmount.toLocaleString()} for ${data.students.length} Student${data.students.length !== 1 ? "s" : ""}`,
    onSuccess: () => setPaymentStatus("success"),
    onClose: () => {},
  };

  if (paymentStatus === "success") {
    return (
      <div className="text-center py-12 animate-in zoom-in duration-500">
        <div className="w-24 h-24 bg-brand-red/10 text-brand-red rounded-none flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-12 h-12 text-brand-red" />
        </div>
        <h2 className="text-3xl font-display font-bold text-brand-dark mb-3">Group Registration Complete!</h2>
        <p className="text-slate-600 font-sans max-w-md mx-auto mb-4 leading-relaxed">
          All {data.students.length} students from{" "}
          <strong>{data.school.schoolName}</strong> have been successfully registered
          for the Elizalde Mathematics Competition.
        </p>
        <p className="text-sm text-slate-500 mb-8">
          A confirmation email has been sent to <strong>{data.school.email}</strong>.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="px-8 py-4 bg-brand-dark hover:bg-brand-blue text-white font-bold font-display uppercase tracking-widest rounded-none transition-all"
        >
          Return to Homepage
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <div>
        <h2 className="text-2xl font-display font-bold text-brand-dark mb-2">Review & Payment</h2>
        <p className="text-sm text-slate-500 font-sans">
          Review all registered students before completing payment.
        </p>
      </div>

      {/* School & Competition summary */}
      <div className="bg-slate-50 border border-slate-200 p-5 rounded-none space-y-2 text-sm font-sans">
        <h3 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400 mb-3">School Details</h3>
        <div className="flex justify-between"><span className="text-slate-500">School</span><span className="font-semibold text-brand-dark">{data.school.schoolName}</span></div>
        <div className="flex justify-between"><span className="text-slate-500">Category</span><span className="font-semibold text-brand-dark">{data.competition.category}</span></div>
        <div className="flex justify-between"><span className="text-slate-500">Mode</span><span className="font-semibold text-brand-dark">{data.competition.mode}</span></div>
      </div>

      {/* Student list */}
      <div className="border border-slate-200 rounded-none overflow-hidden">
        <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
          <h3 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400">
            Registered Students ({data.students.length})
          </h3>
        </div>
        <div className="divide-y divide-slate-100">
          {data.students.map((student, idx) => (
            <div key={idx} className="flex items-center gap-4 px-5 py-3">
              {student.passportFile ? (
                <img
                  src={URL.createObjectURL(student.passportFile)}
                  alt={`${student.firstName} passport`}
                  className="w-10 h-10 object-cover rounded-none border border-slate-200 flex-shrink-0"
                />
              ) : (
                <div className="w-10 h-10 bg-slate-100 border border-slate-200 flex items-center justify-center flex-shrink-0 text-xs font-bold text-slate-400">
                  {idx + 1}
                </div>
              )}
              <div className="flex-grow min-w-0">
                <p className="font-semibold text-sm text-brand-dark truncate">
                  {student.firstName} {student.middleName} {student.lastName}
                </p>
                <p className="text-xs text-slate-400">{student.grade} · {student.gender}</p>
              </div>
              <span className="text-sm font-bold text-brand-blue flex-shrink-0">
                ₦{REGISTRATION_FEE.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
        <div className="bg-slate-50 border-t border-slate-200 px-5 py-4 flex justify-between items-center">
          <span className="font-bold font-display uppercase tracking-wider text-sm text-brand-dark">
            Total ({data.students.length} students)
          </span>
          <span className="text-2xl font-extrabold font-display text-brand-blue">
            ₦{totalAmount.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Consent */}
      <label className="flex items-start gap-4 cursor-pointer p-4 rounded-none border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors">
        <input
          type="checkbox"
          required
          className="w-5 h-5 mt-0.5 text-brand-blue rounded-none border-slate-300 focus:ring-brand-blue flex-shrink-0"
          onChange={() => {}}
        />
        <div className="text-sm text-slate-600 font-sans">
          <span className="font-bold text-brand-dark block mb-1">Declaration and Consent</span>
          I confirm that all details provided are true and correct. I give consent on behalf of all students
          listed above for the use of photographs taken during the competition for promotional purposes.
        </div>
      </label>

      {/* Paystack note */}
      <div className="flex items-start gap-3 p-4 bg-amber-50 text-amber-800 rounded-none border border-amber-200">
        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <p className="text-xs font-sans leading-relaxed">
          <strong>Note:</strong> You will be securely redirected to Paystack to complete this transaction.
          One payment covers all {data.students.length} students.
        </p>
      </div>

      <div className="pt-2 flex flex-col-reverse md:flex-row justify-between items-center gap-4">
        <button type="button" onClick={onBack}
          className="w-full md:w-auto px-8 py-4 text-slate-500 hover:text-brand-dark hover:bg-slate-100 font-bold font-display uppercase tracking-widest rounded-none transition-all cursor-pointer text-center">
          Go Back
        </button>
        <PaystackButton
          {...componentProps}
          className="w-full md:w-auto px-8 py-4 bg-brand-red hover:bg-brand-blue text-white font-bold font-display uppercase tracking-widest rounded-none transition-all cursor-pointer text-center shadow-lg"
        />
      </div>
    </div>
  );
}
