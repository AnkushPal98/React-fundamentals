import { useEffect, useState } from "react";
// import {v4 as uuidv4} from 'uuid';
import '../App.css';

export default function StudentForm({onAdd, onUpdate, editingStudent}) {
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  useEffect(() => {
    if(editingStudent){
      setStudent(editingStudent);
    }else{
      setStudent({
        firstName: '',
        lastName: '',
        email: '',
      });
    }
  },[editingStudent]);

  const handleChange = (e) => {
    setStudent({
        ...student,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // const {firstName, lastName, email} = student;

    const uuid = `id_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    if (editingStudent) {
      onUpdate(student);
    } else {
      onAdd({id: uuid, ...student});
    }

    // reset the input fields
    setStudent({
        firstName: '',
        lastName: '',
        email: '',
      });
  }

  return (
    <div className="studentForm">
      <form onSubmit={handleSubmit}> 
        <div>
          <label>First Name </label><br/>
          <input
            type="text"
            name="firstName"
            value={student.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name </label><br/>
          <input
            type="text"
            name="lastName"
            value={student.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email </label><br/>
          <input
            type="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="add">{editingStudent ? "Update" : "Add"}</button>
      </form>
    </div>
  );
}
