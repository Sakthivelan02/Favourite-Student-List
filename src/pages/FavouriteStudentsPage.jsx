import { Link } from "react-router-dom";
import { useStudents } from "../pages/StudentContext";

export default function FavouriteStudentsPage() {
  const { favourites, removeFavourite } = useStudents();

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Favourite Students</h1>
          <p className="subtitle">{favourites.length} saved</p>
        </div>
        <Link to="/" className="nav-link">
          Back to Class
        </Link>
      </div>

      {favourites.length === 0 ? (
        <div className="empty-state">
          <p>No favourite students added yet.</p>
        </div>
      ) : (
        <div className="student-grid">
          {favourites.map((student) => (
            <div className="student-card" key={student.id}>
              <div className="student-info">
                <span className="student-name">{student.name}</span>
                <span className="student-roll">Roll No: {student.roll}</span>
              </div>
              <button
                className="btn btn-remove"
                onClick={() => removeFavourite(student.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
