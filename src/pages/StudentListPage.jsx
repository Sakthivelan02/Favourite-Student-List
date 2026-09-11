import { Link } from "react-router-dom";
import { useStudents } from "../pages/StudentContext";

export default function StudentListPage() {
  const { students, favourites, addFavourite, isFavourite } = useStudents();

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>ClassMates</h1>
          <p className="subtitle">{students.length} students enrolled</p>
        </div>
        <Link to="/favourites" className="nav-link">
          View Favourites ({favourites.length})
        </Link>
      </div>

      <div className="student-grid">
        {students.map((student) => {
          const favourited = isFavourite(student.id);
          return (
            <div className="student-card" key={student.id}>
              <div className="student-info">
                <span className="student-name">{student.name}</span>
                <span className="student-roll">Roll No: {student.roll}</span>
              </div>
              <button
                className={favourited ? "btn btn-added" : "btn btn-add"}
                onClick={() => addFavourite(student)}
                disabled={favourited}
              >
                {favourited ? "Added ✓" : "Add to Favourite"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
