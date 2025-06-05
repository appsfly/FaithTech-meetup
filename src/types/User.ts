import { IStudentDetails } from "../Component/StudentDetails";

export interface IUser {
  _id?: string;
  name?: string;
  firstName?: string;
  password?: string; // Optional for frontend use, but never store plaintext passwords here
  lastName?: string;
  email?: string;
  role?: "student" | "mentor" | "admin";
  createdAt?: string;
  updatedAt?: string;
  progress?: Record<string, any>; // optional: you might want to track it per user
}

export type Student = Omit<IStudentDetails, "onBack">;
