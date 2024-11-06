import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  const handleAdd = (formData) => {

    // setStudents((prevState) => {
    //   console.log("prevState = ", prevState);
    //   const students = [...prevState, formData];
    //   return students;
    // });
    setStudents([...students, formData]);
  };

  const handleUpdate = (updatedStudent) => {
    setStudents(students.map((student) => student.id === updatedStudent.id ? updatedStudent : student));
    setEditingStudent(null);
  };

  const handleDelete = (id) => {
    setStudents((prevState) => prevState.filter((student) => student.id !== id ));
  };


  return (
    <>
       <h1>School Management System</h1>
      <StudentForm onAdd={handleAdd} onUpdate={handleUpdate} editingStudent={editingStudent}/>
      <StudentTable students={students} onDelete={handleDelete} setEditingStudent={setEditingStudent}/>
    </>
  );
}

export default App;
