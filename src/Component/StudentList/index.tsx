// import StudentCard, { IStudent } from "../StudentCard";
import UsersDashboard from "../UsersDashboard";

// const students: Array<IStudent> = [
//   {
//     id: "1",
//     name: "אורי כהן",
//     email: "uri@example.com",
//     progress: {
//       html: { status: "completed", progress: 100 },
//       css: { status: "in-progress", progress: 60 },
//       js: { status: "not-started", progress: 0 },
//     },
//   },
//   {
//     id: "2",
//     name: "יוסף אלי",
//     email: "uri@example.com",
//     progress: {
//       html: { status: "completed", progress: 80 },
//       css: { status: "in-progress", progress: 40 },
//       js: { status: "not-started", progress: 20 },
//     },
//   },
//   {
//     id: "3",
//     name: "אורי כהן",
//     email: "uri@example.com",
//     progress: {
//       html: { status: "completed", progress: 100 },
//       css: { status: "in-progress", progress: 60 },
//       js: { status: "not-started", progress: 0 },
//     },
//   },
//   {
//     id: "4",
//     name: "יוסף אלי",
//     email: "uri@example.com",
//     progress: {
//       html: { status: "completed", progress: 80 },
//       css: { status: "in-progress", progress: 40 },
//       js: { status: "not-started", progress: 20 },
//     },
//   },
// ];

export default function StudentList() {
  const handleStudentClick = (id: string) => {
    console.log("Details for student:", id);
  };

  return <UsersDashboard />;
}
