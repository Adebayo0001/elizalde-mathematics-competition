"use client";
import React, { useRef } from "react";
import { Trash2, Upload, UserPlus, X } from "lucide-react";
import { StudentEntry, CATEGORY_GRADES, REGISTRATION_FEE, blankStudent } from "./types";

type Props = {
  students: StudentEntry[];
  category: string;
  updateStudents: (students: StudentEntry[]) => void;
  onNext: () => void;
  onBack: () => void;
};

const inputClass =
  "w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-none focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all text-sm";
const labelClass = "text-[10px] font-bold font-display uppercase tracking-widest text-brand-dark block mb-1";

function PassportUpload({
  file,
  onFileChange,
}: {
  file: File | null;
  onFileChange: (f: File | null) => void;
}) {
  const ref = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const dropped = e.dataTransfer.files[0];
    if (dropped && (dropped.type === "image/jpeg" || dropped.type === "image/png")) {
      onFileChange(dropped);
    }
  };

  return (
    <div className="space-y-1">
      <label className={labelClass}>Passport Photo</label>
      <div
        onClick={() => ref.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        className="relative border-2 border-dashed border-slate-300 bg-slate-50 hover:bg-slate-100 transition-colors rounded-none p-4 flex flex-col items-center justify-center cursor-pointer text-center min-h-[90px]"
      >
        {file ? (
          <div className="flex items-center gap-3 w-full">
            <img
              src={URL.createObjectURL(file)}
              alt="Passport preview"
              className="w-12 h-12 object-cover rounded-none border border-slate-200 flex-shrink-0"
            />
            <div className="text-left min-w-0">
              <p className="text-xs font-bold text-brand-dark truncate">{file.name}</p>
              <p className="text-[10px] text-slate-400">
                {(file.size / 1024).toFixed(0)} KB
              </p>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onFileChange(null);
              }}
              className="ml-auto p-1 text-slate-400 hover:text-brand-red transition-colors flex-shrink-0"
              title="Remove"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <>
            <Upload className="w-5 h-5 text-slate-400 mb-1" />
            <span className="text-[11px] font-bold text-slate-500">Click or drag to upload</span>
            <span className="text-[10px] text-slate-400">JPEG / PNG, max 2MB</span>
          </>
        )}
        <input
          type="file"
          accept="image/jpeg,image/png"
          className="hidden"
          ref={ref}
          required={!file}
          onChange={(e) => {
            const f = e.target.files?.[0] ?? null;
            if (f) onFileChange(f);
          }}
        />
      </div>
    </div>
  );
}

export default function GroupRosterStep({ students, category, updateStudents, onNext, onBack }: Props) {
  const allowedGrades = CATEGORY_GRADES[category] ?? [];

  const updateStudent = (idx: number, patch: Partial<StudentEntry>) => {
    const updated = students.map((s, i) => (i === idx ? { ...s, ...patch } : s));
    updateStudents(updated);
  };

  const addStudent = () => updateStudents([...students, blankStudent()]);

  const removeStudent = (idx: number) => {
    if (students.length <= 2) return; // min 2
    updateStudents(students.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate all passport photos present
    const missing = students.findIndex((s) => !s.passportFile);
    if (missing !== -1) {
      alert(`Please upload a passport photo for Student ${missing + 1}.`);
      return;
    }
    onNext();
  };

  const total = students.length * REGISTRATION_FEE;

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div>
          <h2 className="text-2xl font-display font-bold text-brand-dark mb-1">Student Roster</h2>
          <p className="text-sm text-slate-500 font-sans">
            Add each student&apos;s details. All students compete in the{" "}
            <span className="font-semibold text-brand-dark">{category}</span> category.
          </p>
        </div>
        <div className="flex-shrink-0 text-right">
          <div className="text-xs font-bold font-display uppercase tracking-widest text-slate-400">Total</div>
          <div className="text-2xl font-display font-extrabold text-brand-blue">
            ₦{total.toLocaleString()}
          </div>
          <div className="text-[10px] text-slate-400">
            {students.length} student{students.length !== 1 ? "s" : ""} × ₦{REGISTRATION_FEE.toLocaleString()}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {students.map((student, idx) => (
          <div
            key={idx}
            className="border border-slate-200 bg-white rounded-none p-6 relative"
          >
            {/* Card header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-brand-dark text-white flex items-center justify-center text-xs font-bold font-display">
                  {idx + 1}
                </div>
                <span className="text-sm font-bold font-display uppercase tracking-widest text-brand-dark">
                  Student {idx + 1}
                </span>
              </div>
              {students.length > 2 && (
                <button
                  type="button"
                  onClick={() => removeStudent(idx)}
                  className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-brand-red font-bold font-display uppercase tracking-widest transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Remove
                </button>
              )}
            </div>

            {/* Name row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className={labelClass}>First Name</label>
                <input required type="text" className={inputClass} value={student.firstName}
                  onChange={(e) => updateStudent(idx, { firstName: e.target.value })}
                  placeholder="John" />
              </div>
              <div>
                <label className={labelClass}>Middle Name <span className="text-slate-400 font-normal normal-case tracking-normal">(Optional)</span></label>
                <input type="text" className={inputClass} value={student.middleName}
                  onChange={(e) => updateStudent(idx, { middleName: e.target.value })}
                  placeholder="Michael" />
              </div>
              <div>
                <label className={labelClass}>Last Name</label>
                <input required type="text" className={inputClass} value={student.lastName}
                  onChange={(e) => updateStudent(idx, { lastName: e.target.value })}
                  placeholder="Doe" />
              </div>
            </div>

            {/* Details row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className={labelClass}>Date of Birth</label>
                <input required type="date" className={inputClass} value={student.dob}
                  onChange={(e) => updateStudent(idx, { dob: e.target.value })} />
              </div>
              <div>
                <label className={labelClass}>Gender</label>
                <select required className={inputClass} value={student.gender}
                  onChange={(e) => updateStudent(idx, { gender: e.target.value })}>
                  <option value="" disabled>Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Year Group</label>
                <select required className={inputClass} value={student.grade}
                  onChange={(e) => updateStudent(idx, { grade: e.target.value })}>
                  <option value="" disabled>Select Year</option>
                  {allowedGrades.map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass}>Nationality</label>
                <select required className={inputClass} value={student.nationality}
                  onChange={(e) => updateStudent(idx, { nationality: e.target.value })}>
                  <option value="" disabled>Select</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Passport upload */}
            <PassportUpload
              file={student.passportFile}
              onFileChange={(f) => updateStudent(idx, { passportFile: f })}
            />
          </div>
        ))}
      </div>

      {/* Add student button */}
      <button
        type="button"
        onClick={addStudent}
        className="w-full flex items-center justify-center gap-2 py-4 border-2 border-dashed border-slate-300 hover:border-brand-blue hover:bg-blue-50 text-slate-500 hover:text-brand-blue font-bold font-display uppercase tracking-widest text-sm rounded-none transition-all"
      >
        <UserPlus className="w-4 h-4" />
        Add Another Student
      </button>

      <div className="pt-4 flex justify-between items-center">
        <button type="button" onClick={onBack}
          className="px-8 py-4 text-slate-500 hover:text-brand-dark hover:bg-slate-100 font-bold font-display uppercase tracking-widest rounded-none transition-all cursor-pointer">
          Go Back
        </button>
        <button type="submit"
          className="px-8 py-4 bg-brand-red hover:bg-brand-blue text-white font-bold font-display uppercase tracking-widest rounded-none transition-all cursor-pointer">
          Review & Pay
        </button>
      </div>
    </form>
  );
}
