// Shared types for the individual registration flow

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
