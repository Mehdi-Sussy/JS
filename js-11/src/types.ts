export type userType = {
  id: string;
  name: string;
  phoneNumber: number | string;
  storage: "SIM" | "Device";
  avatar: string | null;
};
export type ContactInfoType = userType[];

export type contactInfoType = {
  name: string;
  phoneNumber: string | number;
};
