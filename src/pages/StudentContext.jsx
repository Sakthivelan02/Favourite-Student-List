import { createContext, useContext, useState } from "react";

//Create the context
const StudentContext = createContext(null);

//Student data — name + roll number
const newStudents = [
  { id: 1, name: "Sakthivel", roll: "FSWD-101" },
  { id: 2, name: "Raghavan", roll: "FSWD-102" },
  { id: 3, name: "Muthuvel Pandian", roll: "FSWD-103" },
  { id: 4, name: "jagadish", roll: "FSWD-104" },
  { id: 5, name: "David Billa", roll: "FSWD-105" },
  { id: 6, name: "gemini", roll: "FSWD-106" },
  { id: 7, name: "Deva", roll: "FSWD-107" },
  { id: 8, name: "Thotti Jaya", roll: "FSWD-108" },
  { id: 9, name: "Kokki Kumar", roll: "FSWD-109" },
  { id: 10, name: "Dhuruvan", roll: "FSWD-110" },
  { id: 11, name: "Siddharth Abhimanyu", roll: "FSWD-111" },
  { id: 12, name: "vedha", roll: "FSWD-112" },
];

// students list and the favourites list
export function StudentProvider({ children }) {
  const [students] = useState(newStudents);
  const [favourites, setFavourites] = useState([]);

  function addFavourite(student) {
    setFavourites((prev) => {
      const alreadyAdded = prev.some((s) => s.id === student.id);
      if (alreadyAdded) return prev; 
      // prevent duplicates
      return [...prev, student];
    });
  }

  function removeFavourite(studentId) {
    setFavourites((prev) => prev.filter((s) => s.id !== studentId));
  }

  function isFavourite(studentId) {
    return favourites.some((s) => s.id === studentId);
  }

  const value = {
    students,
    favourites,
    addFavourite,
    removeFavourite,
    isFavourite,
  };

  return (
    <StudentContext.Provider value={value}>
      {children}
    </StudentContext.Provider>
  );
}

// Custom hook for convenient access
export function useStudents() {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error("useStudents must be used within a StudentProvider");
  }
  return context;
}
