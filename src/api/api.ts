import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { usersCollection } from "../Screens/LoginScreen/mock";
import { db } from "../config/firebase";

export enum Endpoints {
  Meeting = "meeting",
  User = "user",
}

const baseUrl = "http://localhost:3200/";

// Create a new item
export const createItem = async (endpoint: string, itemData: any) => {
  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating item:", error);
    throw error;
  }
};

// Fetch all items
export const getItems = async (endpoint: string) => {
  try {
    const response = await fetch(`${baseUrl}${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting items:", error);
    throw error;
  }
};

// Fetch a single item by ID
export const getItemById = async (endpoint: string, itemId: any) => {
  try {
    return usersCollection;
    const response = await fetch(`${baseUrl}${endpoint}/${itemId}`);
    const data = await response.json();
  } catch (error) {
    console.error(`Error getting item with ID ${itemId}:`, error);
    throw error;
  }
};

export async function getUserIdByEmail(email: string): Promise<string> {
  const q = query(collection(db, "students"), where("email", "==", email));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    return querySnapshot.docs[0].id; // first match
  }

  throw new Error("No user found with email " + email);
}

export async function markTopicComplete(
  email: string,
  courseId: string,
  completed: Array<string>
) {
  const userId = await getUserIdByEmail(email);
  const userRef = doc(db, "students", userId);
  const coursePath = `progress.${courseId}.completedTopics`;

  await updateDoc(userRef, {
    [coursePath]: completed,
    [`progress.${courseId}.status`]: "in-progress",
  });
}
export async function updateCourseProgress(
  email: string,
  courseId: string,
  totalTopics: number
) {
  const userId = await getUserIdByEmail(email);
  const userRef = doc(db, "students", userId);
  const userSnap = await getDoc(userRef);
  const userData = userSnap.data();

  const completed =
    userData?.progress?.[courseId]?.completedTopics?.length || 0;
  const percent = Math.round((completed / totalTopics) * 100);

  await updateDoc(userRef, {
    [`progress.${courseId}.progress`]: percent,
    [`progress.${courseId}.status`]:
      percent === 100 ? "completed" : "in-progress",
  });
}

export const fetchUserByEmail = async (email: string) => {
  try {
    const q = query(collection(db, "students"), where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log("❌ No user found with this email.");
      return null;
    }

    const userDoc = querySnapshot.docs[0];
    const userData = userDoc.data();

    return userData;
  } catch (error) {
    console.error("Error fetching user by email:", error);
    throw error;
  }
};

// TODO: UPDATE, DELETE

// normalize new documents.
const defaultProgress = {
  progress: 0,
  status: "not-started",
  completedTopics: [],
};

const courses = ["html", "css", "js", "project development", "projects"];

async function normalizeAllStudentProgress() {
  const studentsRef = collection(db, "students");
  const snapshot = await getDocs(studentsRef);

  for (const docSnap of snapshot.docs) {
    const studentData = docSnap.data();
    const progress = studentData.progress || {};
    const newProgress = { ...progress };

    let needsUpdate = false;

    for (const course of courses) {
      if (!newProgress[course]) {
        newProgress[course] = defaultProgress;
        needsUpdate = true;
      } else {
        // Ensure structure is complete
        newProgress[course].progress ??= 0;
        newProgress[course].status ??= "not-started";
        newProgress[course].completedTopics ??= [];
        needsUpdate = true;
      }
    }

    if (needsUpdate) {
      await updateDoc(doc(db, "students", docSnap.id), {
        progress: newProgress,
      });
      console.log(`Updated progress for ${docSnap.id}`);
    }
  }

  console.log("✅ Done updating all students");
}
