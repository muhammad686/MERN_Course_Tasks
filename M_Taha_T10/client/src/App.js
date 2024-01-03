import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/students")
      .then((response) => setStudents(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="student-container">
      <h1>Student Management System</h1>
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Program</th>
            <th>Semester</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.program}</td>
              <td>{student.semester}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
