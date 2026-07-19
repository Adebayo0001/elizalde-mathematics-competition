import React, { useState } from "react";
import { RegistrationData } from "../../pages/RegistrationPage";
import { PaystackButton } from "react-paystack";
import { CheckCircle2, AlertCircle } from "lucide-react";

type Props = {
  formData: RegistrationData;
  onBack: () => void;
};

export default function PaymentStep({ formData, onBack }: Props) {
  const [paymentStatus, setPaymentStatus] = useState<"pending" | "success" | "error">("pending");

  // Registration fee placeholder (e.g. 50,000 NGN)
  const registrationFee = 50000;
  
  // Paystack config
  // Replace with actual public key from environment variables in production
  const publicKey = "pk_test_dummy_public_key_replace_me_later";
  
  const componentProps = {
    email: formData.school.email || "school@example.com",
    amount: registrationFee * 100, // Paystack amount is in kobo
    metadata: {
      name: `${formData.student.firstName} ${formData.student.lastName}`,
      phone: formData.school.phone,
      custom_fields: [
        {
          display_name: "School Name",
          variable_name: "school_name",
          value: formData.school.schoolName
        },
        {
          display_name: "Category",
          variable_name: "category",
          value: formData.competition.category
        }
      ]
    },
    publicKey,
    text: `Pay ₦${registrationFee.toLocaleString()} & Complete Registration`,
    onSuccess: (reference: any) => {
      console.log("Payment successful:", reference);
      setPaymentStatus("success");
    },
    onClose: () => {
      console.log("Payment dialog closed.");
    },
  };

  if (paymentStatus === "success") {
    return (
      <div className="text-center py-12 animate-in zoom-in duration-500">
        <div className="w-24 h-24 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-12 h-12" />
        </div>
        <h2 className="text-3xl font-display font-bold text-brand-dark mb-4">Registration Complete!</h2>
        <p className="text-slate-600 font-sans max-w-md mx-auto mb-8 leading-relaxed">
          Thank you for registering <strong>{formData.student.firstName} {formData.student.lastName}</strong> for the Elizalde Mathematics Competition. We have sent a confirmation email to <strong>{formData.school.email}</strong>.
        </p>
        <button 
          onClick={() => window.location.href = '/'}
          className="px-8 py-4 bg-brand-dark hover:bg-brand-teal text-white font-bold font-display uppercase tracking-widest rounded-xl transition-all"
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
        <p className="text-sm text-slate-500 font-sans">Please review the details below before proceeding to payment.</p>
      </div>

      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
        <h3 className="font-display font-bold text-brand-dark uppercase tracking-widest text-sm mb-4 border-b border-slate-200 pb-2">Order Summary</h3>
        
        <div className="space-y-4 font-sans text-sm">
          <div className="flex justify-between items-center">
            <span className="text-slate-500">Candidate Name</span>
            <span className="font-semibold text-brand-dark">{formData.student.firstName} {formData.student.lastName}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500">School</span>
            <span className="font-semibold text-brand-dark">{formData.school.schoolName || "N/A"}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500">Category</span>
            <span className="font-semibold text-brand-dark">{formData.competition.category || "N/A"}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500">Mode</span>
            <span className="font-semibold text-brand-dark">{formData.competition.mode || "N/A"}</span>
          </div>
          
          <div className="pt-4 mt-4 border-t border-slate-200 flex justify-between items-center">
            <span className="text-base font-bold text-brand-dark uppercase tracking-wider">Total Registration Fee</span>
            <span className="text-2xl font-bold font-display text-brand-teal">₦{registrationFee.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-3 p-4 bg-amber-50 text-amber-800 rounded-xl border border-amber-200">
        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <div className="text-xs font-sans leading-relaxed">
          <strong>Note:</strong> You will be securely redirected to Paystack to complete this transaction. By clicking the button below, you agree to our Terms and Conditions.
        </div>
      </div>

      <div className="pt-6 flex flex-col-reverse md:flex-row justify-between items-center gap-4">
        <button
          type="button"
          onClick={onBack}
          className="w-full md:w-auto px-8 py-4 text-slate-500 hover:text-brand-dark hover:bg-slate-100 font-bold font-display uppercase tracking-widest rounded-xl transition-all cursor-pointer text-center"
        >
          Go Back
        </button>
        
        {/* We use PaystackButton as a custom styled component */}
        <PaystackButton 
          {...componentProps} 
          className="w-full md:w-auto px-8 py-4 bg-brand-green hover:bg-brand-teal text-white font-bold font-display uppercase tracking-widest rounded-xl transition-all cursor-pointer text-center shadow-lg hover:shadow-brand-teal/20"
        />
      </div>
    </div>
  );
}
