import React from 'react';

type Props = {
  value: string; // YYYY-MM-DD format
  onChange: (value: string) => void;
  className?: string;
};

export default function DobSelector({ value, onChange, className }: Props) {
  // Parse the incoming YYYY-MM-DD or empty string
  const parts = value ? value.split('-') : ['', '', ''];
  const year = parts[0] || '';
  const month = parts[1] || '';
  const day = parts[2] || '';

  // Current year to calculate appropriate age ranges (e.g. up to 25 years old)
  const currentYear = new Date().getFullYear();
  // Years from currentYear down to 30 years ago
  const years = Array.from({ length: 31 }, (_, i) => currentYear - i);

  const months = [
    { value: '01', label: 'Jan' },
    { value: '02', label: 'Feb' },
    { value: '03', label: 'Mar' },
    { value: '04', label: 'Apr' },
    { value: '05', label: 'May' },
    { value: '06', label: 'Jun' },
    { value: '07', label: 'Jul' },
    { value: '08', label: 'Aug' },
    { value: '09', label: 'Sep' },
    { value: '10', label: 'Oct' },
    { value: '11', label: 'Nov' },
    { value: '12', label: 'Dec' },
  ];

  const days = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0'));

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newYear = e.target.value;
    onChange(`${newYear}-${month || '01'}-${day || '01'}`);
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMonth = e.target.value;
    onChange(`${year || currentYear}-${newMonth}-${day || '01'}`);
  };

  const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newDay = e.target.value;
    onChange(`${year || currentYear}-${month || '01'}-${newDay}`);
  };

  const selectClass = "px-3 py-3 bg-slate-50 border border-slate-200 rounded-none focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all text-sm";

  return (
    <div className={`flex gap-2 ${className || ''}`}>
      <select required className={`${selectClass} flex-1`} value={day} onChange={handleDayChange}>
        <option value="" disabled>Day</option>
        {days.map(d => (
          <option key={d} value={d}>{d}</option>
        ))}
      </select>
      
      <select required className={`${selectClass} flex-1`} value={month} onChange={handleMonthChange}>
        <option value="" disabled>Month</option>
        {months.map(m => (
          <option key={m.value} value={m.value}>{m.label}</option>
        ))}
      </select>
      
      <select required className={`${selectClass} flex-[1.2]`} value={year} onChange={handleYearChange}>
        <option value="" disabled>Year</option>
        {years.map(y => (
          <option key={y} value={y}>{y}</option>
        ))}
      </select>
    </div>
  );
}
