import "../App.css";

export default function StudentTable({
  students,
  onDelete,
  setEditingStudent,
}) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Student Id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.email}</td>
                <td className="actions">
                  <button
                    type="submit"
                    className="edit"
                    onClick={() => setEditingStudent(student)}
                  >
                    Edit
                  </button>
                  <button
                    type="submit"
                    className="delete"
                    onClick={() => onDelete(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr className="no-data">
              <td colSpan="5">No students available</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
