"use client";
import React, { useRef } from "react";
import { Trash2, Upload, UserPlus, X } from "lucide-react";
import DobSelector from "../DobSelector";
import { StudentEntry, CATEGORY_GRADES, REGISTRATION_FEE, blankStudent } from "./types";

type Props = {
  students: StudentEntry[];
  category: string;
  updateStudents: (students: StudentEntry[]) => void;
  onNext: () => void;
  onBack: () => void;
};

const inputClass =
  "w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-none focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all text-sm placeholder:text-slate-400 placeholder:font-light text-slate-700";
const labelClass = "text-[10px] font-medium font-sans uppercase tracking-wider text-slate-500 block mb-1";

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
          <h2 className="text-2xl font-display font-bold text-brand-dark mb-1">Group Registration</h2>
          <p className="text-sm text-slate-500 font-sans">
            Add each student&apos;s details. All students compete in the{" "}
            <span className="font-semibold text-brand-dark">{category}</span> category.
          </p>
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
                <div className="w-6 h-6 bg-brand-blue text-white flex items-center justify-center text-xs font-bold font-display">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className={labelClass}>Date of Birth</label>
                <DobSelector 
                  value={student.dob}
                  onChange={(val) => updateStudent(idx, { dob: val })}
                />
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
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Bahamas">Bahamas</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Belize">Belize</option>
                  <option value="Benin">Benin</option>
                  <option value="Bhutan">Bhutan</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                  <option value="Botswana">Botswana</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Brunei">Brunei</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Canada">Canada</option>
                  <option value="Cape Verde">Cape Verde</option>
                  <option value="Central African Republic">Central African Republic</option>
                  <option value="Chad">Chad</option>
                  <option value="Chile">Chile</option>
                  <option value="China">China</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Congo">Congo</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Czech Republic">Czech Republic</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Dominica">Dominica</option>
                  <option value="Dominican Republic">Dominican Republic</option>
                  <option value="East Timor">East Timor</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Egypt">Egypt</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Fiji">Fiji</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="Gabon">Gabon</option>
                  <option value="Gambia">Gambia</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Germany">Germany</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Greece">Greece</option>
                  <option value="Grenada">Grenada</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Guinea">Guinea</option>
                  <option value="Guinea-Bissau">Guinea-Bissau</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Haiti">Haiti</option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option value="India">India</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Iran">Iran</option>
                  <option value="Iraq">Iraq</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Israel">Israel</option>
                  <option value="Italy">Italy</option>
                  <option value="Ivory Coast">Ivory Coast</option>
                  <option value="Jamaica">Jamaica</option>
                  <option value="Japan">Japan</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Kiribati">Kiribati</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                  <option value="Laos">Laos</option>
                  <option value="Latvia">Latvia</option>
                  <option value="Lebanon">Lebanon</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Libya">Libya</option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Macedonia">Macedonia</option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Mali">Mali</option>
                  <option value="Malta">Malta</option>
                  <option value="Marshall Islands">Marshall Islands</option>
                  <option value="Mauritania">Mauritania</option>
                  <option value="Mauritius">Mauritius</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Micronesia">Micronesia</option>
                  <option value="Moldova">Moldova</option>
                  <option value="Monaco">Monaco</option>
                  <option value="Mongolia">Mongolia</option>
                  <option value="Montenegro">Montenegro</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Myanmar">Myanmar</option>
                  <option value="Namibia">Namibia</option>
                  <option value="Nauru">Nauru</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="Niger">Niger</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="North Korea">North Korea</option>
                  <option value="Norway">Norway</option>
                  <option value="Oman">Oman</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Palau">Palau</option>
                  <option value="Palestine">Palestine</option>
                  <option value="Panama">Panama</option>
                  <option value="Papua New Guinea">Papua New Guinea</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Peru">Peru</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Poland">Poland</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Romania">Romania</option>
                  <option value="Russia">Russia</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                  <option value="Saint Lucia">Saint Lucia</option>
                  <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                  <option value="Samoa">Samoa</option>
                  <option value="San Marino">San Marino</option>
                  <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Serbia">Serbia</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra Leone">Sierra Leone</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Slovakia">Slovakia</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Solomon Islands">Solomon Islands</option>
                  <option value="Somalia">Somalia</option>
                  <option value="South Africa">South Africa</option>
                  <option value="South Korea">South Korea</option>
                  <option value="South Sudan">South Sudan</option>
                  <option value="Spain">Spain</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Sudan">Sudan</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Swaziland">Swaziland</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Syria">Syria</option>
                  <option value="Taiwan">Taiwan</option>
                  <option value="Tajikistan">Tajikistan</option>
                  <option value="Tanzania">Tanzania</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Togo">Togo</option>
                  <option value="Tonga">Tonga</option>
                  <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Turkmenistan">Turkmenistan</option>
                  <option value="Tuvalu">Tuvalu</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="United Arab Emirates">United Arab Emirates</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="Vanuatu">Vanuatu</option>
                  <option value="Vatican City">Vatican City</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Yemen">Yemen</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
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
