// import StudentCard, { IStudent } from "../StudentCard";
import UsersDashboard from "../UsersDashboard";
import { useState, useTransition, useDeferredValue } from "react";

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

export function MyComponent() {
  const [input, setInput] = useState("");
  const [list, setList] = useState<Array<string>>([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: any) => {
    const value = e.target.value;
    setInput(value);

    startTransition(() => {
      // Simulate an expensive computation (e.g. filtering a large list)
      const newList = Array(20000)
        .fill(null)
        .map((_, i) => `${value} - Item ${i}`);
      setList(newList);
    });
  };

  return (
    <div>
      <input type='text' value={input} onChange={handleChange} />
      {isPending ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function expensiveFilter(query: any) {
  // Simulate a large list of items
  const bigList = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);

  // Simulate an expensive operation with a loop
  const result = bigList.filter((item) => {
    // Simulate computational delay
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
      sum += i;
    }
    return item.toLowerCase().includes(query.toLowerCase());
  });

  return result;
}

export function MyComponentWithDefferedValue() {
  const [input, setInput] = useState("");
  const deferredInput = useDeferredValue(input);

  const filteredList = expensiveFilter(deferredInput);

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <ul>
        {filteredList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
