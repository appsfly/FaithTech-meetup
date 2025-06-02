import { useState } from "react";
import styled from "styled-components";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { IStudentDetails } from "../StudentDetails";

const Container = styled.div`
  margin: 20px;
`;

export default function AddStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleAdd = async () => {
    if (!name || !email) return;
    const user: Omit<IStudentDetails, "onBack" | "id"> = {
      name,
      email,
      phone,
      progress: {
        html: { status: "not-started", progress: 0 },
        css: { status: "not-started", progress: 0 },
        js: { status: "not-started", progress: 0 },
      },
      attendance: [
        { lessonName: "מבוא ל-HTML", attended: false, needsReview: false },
        { lessonName: "מבנה עמוד CSS", attended: false, needsReview: false },
      ],
      notes: [""],
    };
    await addDoc(collection(db, "students"), user);
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <Container>
      <h2>הוסף תלמיד</h2>
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder='טלפון'
      />
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='שם'
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='אימייל'
      />
      <button onClick={handleAdd}>הוסף</button>
    </Container>
  );
}
