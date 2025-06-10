import { useEffect, useMemo, useState } from "react";
import StudentCard from "../StudentCard";
import StudentDetails, { IStudentDetails } from "../StudentDetails";
import AddStudent from "../AddStudent";
import { collection, onSnapshot } from "firebase/firestore";
import { Student } from "../../types/User";
import { db } from "../../config/firebase";
import { UserProfile } from "../../Screens/UserProfile";

// const students: Array<Omit<IStudentDetails, "onBack">> = [
//   {
//     id: "1",
//     name: "דני רפאלי",
//     email: "dani@example.com",
//     progress: {
//       html: { status: "completed", progress: 100 },
//       css: { status: "in-progress", progress: 70 },
//       js: { status: "not-started", progress: 0 },
//     },
//     attendance: [
//       { lessonName: "מבוא ל-HTML", attended: true, needsReview: false },
//       { lessonName: "מבנה עמוד CSS", attended: false, needsReview: true },
//     ],
//     notes: ["רוצה עוד תרגול ב-CSS", "לא הבנתי את שיעור ג'אווהסקריפט"],
//   },
//   {
//     id: "2",
//     name: "דני asd",
//     email: "dani@example.com",
//     progress: {
//       html: { status: "completed", progress: 100 },
//       css: { status: "in-progress", progress: 70 },
//       js: { status: "not-started", progress: 0 },
//     },
//     attendance: [
//       { lessonName: "מבוא ל-HTML", attended: true, needsReview: false },
//       { lessonName: "מבנה עמוד CSS", attended: false, needsReview: true },
//     ],
//     notes: ["רוצה עוד תרגול ב-CSS", "לא הבנתי את שיעור ג'אווהסקריפט"],
//   },
//   {
//     id: "3",
//     name: "דני asdasdasdasda",
//     email: "dani@example.com",
//     progress: {
//       html: { status: "completed", progress: 100 },
//       css: { status: "in-progress", progress: 70 },
//       js: { status: "not-started", progress: 0 },
//     },
//     attendance: [
//       { lessonName: "מבוא ל-HTML", attended: true, needsReview: false },
//       { lessonName: "מבנה עמוד CSS", attended: false, needsReview: true },
//     ],
//     notes: ["רוצה עוד תרגול ב-CSS", "לא הבנתי את שיעור ג'אווהסקריפט"],
//   },
//   {
//     id: "4",
//     name: "fghfghjfgh רפאלי",
//     email: "dani@example.com",
//     progress: {
//       html: { status: "completed", progress: 100 },
//       css: { status: "in-progress", progress: 70 },
//       js: { status: "not-started", progress: 0 },
//     },
//     attendance: [
//       { lessonName: "מבוא ל-HTML", attended: true, needsReview: false },
//       { lessonName: "מבנה עמוד CSS", attended: false, needsReview: true },
//     ],
//     notes: ["רוצה עוד תרגול ב-CSS", "לא הבנתי את שיעור ג'אווהסקריפט"],
//   },
// ];

export default function UsersDashboard() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "students"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...(doc.data() as Student),
        id: doc.id,
      }));
      setStudents(data.filter((student: any) => student.role !== "admin"));
    });

    return () => unsubscribe();
  }, []);

  const selectedStudent = useMemo(
    () => students.find((s) => s.id === selectedId),
    [selectedId]
  );
  return (
    <div>
      {!selectedId ? (
        <>
          <AddStudent />
          <div style={{ textAlign: "start", paddingLeft: "2.5rem" }}>
            Count: {students.length}
          </div>
          <div
            style={{
              display: "grid",
              gap: "16px",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              padding: "2rem",
            }}
          >
            {students.map((s) => (
              <StudentCard
                key={s.id}
                student={s}
                onClick={() => setSelectedId(s.id)}
              />
            ))}
          </div>
        </>
      ) : selectedStudent ? (
        <StudentDetails
          {...selectedStudent}
          onBack={() => setSelectedId(null)}
        />
      ) : null}
    </div>
  );
}
