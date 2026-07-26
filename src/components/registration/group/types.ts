// Shared types for the group registration flow

export type StudentEntry = {
  firstName: string;
  middleName: string;
  lastName: string;
  dob: string;
  gender: string;
  grade: string;
  nationality: string;
  passportFile: File | null;
};

export type GroupRegistrationData = {
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
  };
  students: StudentEntry[];
  consent: boolean;
};

export const CATEGORY_GRADES: Record<string, string[]> = {
  Elementary: ["Year 4", "Year 5", "Year 6"],
  "Middle School": ["Year 7", "Year 8", "Year 9"],
  "High School": ["Year 10", "Year 11", "Year 12"],
};

export const REGISTRATION_FEE = 7000; // NGN per student

export const blankStudent = (): StudentEntry => ({
  firstName: "",
  middleName: "",
  lastName: "",
  dob: "",
  gender: "",
  grade: "",
  nationality: "",
  passportFile: null,
});
