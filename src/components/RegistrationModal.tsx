"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2, Loader2, Award, Calendar, GraduationCap } from "lucide-react";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    schoolName: "",
    country: "",
    repName: "",
    repEmail: "",
    repPhone: "",
    elementarySelected: true,
    middleSelected: true,
    highSelected: true,
    expectedStudents: "4",
    acceptedTerms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep1 = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.schoolName.trim()) tempErrors.schoolName = "School name is required";
    if (!formData.country.trim()) tempErrors.country = "Country is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const validateStep2 = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.repName.trim()) tempErrors.repName = "Contact Representative name is required";
    if (!formData.repEmail.trim()) {
      tempErrors.repEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.repEmail)) {
      tempErrors.repEmail = "Please enter a valid email address";
    }
    if (!formData.repPhone.trim()) tempErrors.repPhone = "Phone number is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.acceptedTerms) {
      setErrors({ terms: "You must accept the terms of participation to proceed." });
      return;
    }

    setIsLoading(true);
    setErrors({});

    // Simulate server side submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleReset = () => {
    setStep(1);
    setIsSuccess(false);
    setFormData({
      schoolName: "",
      country: "",
      repName: "",
      repEmail: "",
      repPhone: "",
      elementarySelected: true,
      middleSelected: true,
      highSelected: true,
      expectedStudents: "4",
      acceptedTerms: false,
    });
    setErrors({});
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg overflow-hidden rounded-none bg-white shadow-2xl z-10 border border-slate-100"
          >
            {/* Header */}
            <div className="bg-slate-50 border-b border-slate-100 px-6 py-4 flex items-center justify-between">
              <div>
                <h3 className="font-display font-bold text-lg text-brand-dark">
                  School Registration
                </h3>
                <p className="text-xs text-slate-500 font-sans mt-0.5">
                  EMC 2026 Academic Tournament
                </p>
              </div>
              <button
                id="close-registration-modal"
                onClick={onClose}
                className="p-1.5 rounded-none hover:bg-slate-200 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content Panel */}
            <div className="p-6 font-sans">
              {isSuccess ? (
                /* Success Screen */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-none bg-brand-green/10 text-brand-green mb-4 ring-8 ring-brand-green/5">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h4 className="font-display font-bold text-2xl text-brand-dark mb-2">
                    Registration Submitted!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto mb-6">
                    Thank you for registering <strong>{formData.schoolName}</strong> for the Elizalde Mathematics Competition 2026. 
                    An confirmation email and onboarding packet have been sent to <strong>{formData.repEmail}</strong>.
                  </p>

                  <div className="bg-brand-bg rounded-none p-4 text-left max-w-sm mx-auto mb-8 border border-slate-100 space-y-2">
                    <div className="flex items-start gap-2.5 text-xs text-slate-600">
                      <GraduationCap className="h-4 w-4 text-brand-teal shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-brand-dark">Assigned Categories: </span>
                        {[
                          formData.elementarySelected && "Elementary",
                          formData.middleSelected && "Middle School",
                          formData.highSelected && "High School",
                        ]
                          .filter(Boolean)
                          .join(", ")}
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-600">
                      <Award className="h-4 w-4 text-brand-teal shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-brand-dark">Team Allocation: </span>
                        3–4 students per category (approx. {formData.expectedStudents} students total)
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-600">
                      <Calendar className="h-4 w-4 text-brand-teal shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-brand-dark">Next Event: </span>
                        Pre-Olympiad Mentoring Conference
                      </div>
                    </div>
                  </div>

                  <button
                    id="finish-registration"
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-2.5 bg-brand-teal hover:bg-brand-teal/90 text-white font-medium rounded-none text-sm transition-all focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal cursor-pointer"
                  >
                    Return to Homepage
                  </button>
                </motion.div>
              ) : (
                /* Step Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Progress bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1.5 w-full">
                      {[1, 2, 3].map((s) => (
                        <React.Fragment key={s}>
                          <div
                            className={`h-2 rounded-none transition-all duration-300 ${
                              s <= step ? "bg-brand-teal flex-grow" : "bg-slate-100 w-10"
                            }`}
                          />
                        </React.Fragment>
                      ))}
                    </div>
                    <span className="text-xs font-display font-medium text-slate-400 ml-4 shrink-0">
                      Step {step} of 3
                    </span>
                  </div>

                  {step === 1 && (
                    /* Step 1: School Details */
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <div>
                        <h4 className="font-display font-semibold text-brand-dark text-base mb-1">
                          School Information
                        </h4>
                        <p className="text-xs text-slate-500 mb-4">
                          Enter the registered name of the academic institution.
                        </p>
                      </div>

                      <div className="space-y-1">
                        <label htmlFor="schoolName" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                          School Name *
                        </label>
                        <input
                          type="text"
                          id="schoolName"
                          placeholder="e.g. Greensprings School"
                          value={formData.schoolName}
                          onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                          className={`w-full px-4 py-2.5 rounded-none border ${
                            errors.schoolName ? "border-brand-red bg-brand-red/5 focus:ring-brand-red" : "border-slate-200 focus:ring-brand-teal"
                          } focus:border-transparent focus:ring-2 outline-none transition-all text-sm`}
                        />
                        {errors.schoolName && (
                          <p className="text-xs text-brand-red font-sans mt-1">{errors.schoolName}</p>
                        )}
                      </div>

                      <div className="space-y-1">
                        <label htmlFor="country" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                          Country of Origin *
                        </label>
                        <input
                          type="text"
                          id="country"
                          placeholder="e.g. Nigeria, Bulgaria, Singapore"
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          className={`w-full px-4 py-2.5 rounded-none border ${
                            errors.country ? "border-brand-red bg-brand-red/5 focus:ring-brand-red" : "border-slate-200 focus:ring-brand-teal"
                          } focus:border-transparent focus:ring-2 outline-none transition-all text-sm`}
                        />
                        {errors.country && (
                          <p className="text-xs text-brand-red font-sans mt-1">{errors.country}</p>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    /* Step 2: Rep Contact */
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <div>
                        <h4 className="font-display font-semibold text-brand-dark text-base mb-1">
                          Official Contact Representative
                        </h4>
                        <p className="text-xs text-slate-500 mb-4">
                          The designated math coach, faculty advisor, or principal representative.
                        </p>
                      </div>

                      <div className="space-y-1">
                        <label htmlFor="repName" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="repName"
                          placeholder="e.g. Dr. Sarah Alabi"
                          value={formData.repName}
                          onChange={(e) => setFormData({ ...formData, repName: e.target.value })}
                          className={`w-full px-4 py-2.5 rounded-none border ${
                            errors.repName ? "border-brand-red bg-brand-red/5 focus:ring-brand-red" : "border-slate-200 focus:ring-brand-teal"
                          } focus:border-transparent focus:ring-2 outline-none transition-all text-sm`}
                        />
                        {errors.repName && (
                          <p className="text-xs text-brand-red font-sans mt-1">{errors.repName}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label htmlFor="repEmail" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                             Email Address *
                          </label>
                          <input
                            type="email"
                            id="repEmail"
                            placeholder="coach@school.edu"
                            value={formData.repEmail}
                            onChange={(e) => setFormData({ ...formData, repEmail: e.target.value })}
                            className={`w-full px-4 py-2.5 rounded-none border ${
                              errors.repEmail ? "border-brand-red bg-brand-red/5 focus:ring-brand-red" : "border-slate-200 focus:ring-brand-teal"
                            } focus:border-transparent focus:ring-2 outline-none transition-all text-sm`}
                          />
                          {errors.repEmail && (
                            <p className="text-xs text-brand-red font-sans mt-1">{errors.repEmail}</p>
                          )}
                        </div>

                        <div className="space-y-1">
                          <label htmlFor="repPhone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="repPhone"
                            placeholder="+1 (555) 000-0000"
                            value={formData.repPhone}
                            onChange={(e) => setFormData({ ...formData, repPhone: e.target.value })}
                            className={`w-full px-4 py-2.5 rounded-none border ${
                              errors.repPhone ? "border-brand-red bg-brand-red/5 focus:ring-brand-red" : "border-slate-200 focus:ring-brand-teal"
                            } focus:border-transparent focus:ring-2 outline-none transition-all text-sm`}
                          />
                          {errors.repPhone && (
                            <p className="text-xs text-brand-red font-sans mt-1">{errors.repPhone}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    /* Step 3: Categories & Submit */
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <div>
                        <h4 className="font-display font-semibold text-brand-dark text-base mb-1">
                          Participation Categories
                        </h4>
                        <p className="text-xs text-slate-500 mb-4">
                          Select the categories your school will enter. A team consists of 3–4 students.
                        </p>
                      </div>

                      {/* Selection Grid */}
                      <div className="space-y-2">
                        <label className="flex items-center gap-3 p-3 border border-slate-200 rounded-none hover:bg-slate-50 transition-colors cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.elementarySelected}
                            onChange={(e) =>
                              setFormData({ ...formData, elementarySelected: e.target.checked })
                            }
                            className="h-4.5 w-4.5 text-brand-teal rounded-none border-slate-300 focus:ring-brand-teal cursor-pointer"
                          />
                          <div>
                            <span className="block text-sm font-semibold text-slate-800">
                              Elementary
                            </span>
                            <span className="block text-xs text-slate-500">
                              Grades 4–6 • Team of 3–4 students
                            </span>
                          </div>
                        </label>

                        <label className="flex items-center gap-3 p-3 border border-slate-200 rounded-none hover:bg-slate-50 transition-colors cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.middleSelected}
                            onChange={(e) =>
                              setFormData({ ...formData, middleSelected: e.target.checked })
                            }
                            className="h-4.5 w-4.5 text-brand-teal rounded-none border-slate-300 focus:ring-brand-teal cursor-pointer"
                          />
                          <div>
                            <span className="block text-sm font-semibold text-slate-800">
                              Middle School
                            </span>
                            <span className="block text-xs text-slate-500">
                              Grades 7–9 • Team of 3–4 students
                            </span>
                          </div>
                        </label>

                        <label className="flex items-center gap-3 p-3 border border-slate-200 rounded-none hover:bg-slate-50 transition-colors cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.highSelected}
                            onChange={(e) =>
                              setFormData({ ...formData, highSelected: e.target.checked })
                            }
                            className="h-4.5 w-4.5 text-brand-teal rounded-none border-slate-300 focus:ring-brand-teal cursor-pointer"
                          />
                          <div>
                            <span className="block text-sm font-semibold text-slate-800">
                              High School
                            </span>
                            <span className="block text-xs text-slate-500">
                              Grades 10–12 • Team of 3–4 students
                            </span>
                          </div>
                        </label>
                      </div>

                      {/* Expected student count selector */}
                      <div className="space-y-1">
                        <label htmlFor="expectedStudents" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                          Expected Total Competitors
                        </label>
                        <select
                          id="expectedStudents"
                          value={formData.expectedStudents}
                          onChange={(e) =>
                            setFormData({ ...formData, expectedStudents: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-none border border-slate-200 focus:ring-brand-teal focus:border-transparent focus:ring-2 outline-none text-sm bg-white"
                        >
                          <option value="4">3 - 4 Students (1 Team)</option>
                          <option value="8">6 - 8 Students (2 Teams)</option>
                          <option value="12">9 - 12 Students (3 Teams)</option>
                          <option value="16">More than 12 Students (Multi-Teams)</option>
                        </select>
                      </div>

                      {/* Terms Acceptance */}
                      <div className="pt-2">
                        <label className="flex items-start gap-2.5 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.acceptedTerms}
                            onChange={(e) =>
                              setFormData({ ...formData, acceptedTerms: e.target.checked })
                            }
                            className="h-4 w-4 text-brand-teal rounded-none border-slate-300 focus:ring-brand-teal mt-0.5"
                          />
                          <span className="text-xs text-slate-500 leading-tight">
                            I verify that I have permission from my school administration to register for EMC 2026 and agree to the competition guidelines.
                          </span>
                        </label>
                        {errors.terms && (
                          <p className="text-xs text-brand-red font-sans mt-1.5">{errors.terms}</p>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* Footer Buttons */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={handleBack}
                        disabled={isLoading}
                        className="px-5 py-2 border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-none text-sm font-medium transition-colors disabled:opacity-50 cursor-pointer"
                      >
                        Back
                      </button>
                    ) : (
                      <div />
                    )}

                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="px-6 py-2 bg-brand-teal hover:bg-brand-teal/95 text-white rounded-none text-sm font-medium transition-colors ml-auto cursor-pointer"
                      >
                        Continue
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="px-6 py-2 bg-brand-red hover:bg-brand-red/90 text-white rounded-none text-sm font-medium transition-all shadow-sm shadow-brand-red/20 ml-auto flex items-center gap-2 disabled:bg-brand-red/75 cursor-pointer"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Registering...
                          </>
                        ) : (
                          "Submit Registration"
                        )}
                      </button>
                    )}
                  </div>
                </form>
              )}
            </div>

            {/* Bottom Security reassurance */}
            <div className="bg-slate-50 border-t border-slate-100 px-6 py-3 text-center">
              <p className="text-[10px] text-slate-400 font-sans tracking-wide">
                🛡️ Verified Secure Academic Portal. We respect your privacy.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
