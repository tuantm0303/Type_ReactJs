import React, { useState } from "react";
// import "./App.css";
import Student from "./pages/student";

type studentType = {
  name: string;
  age: string;
  phone: string;
}

function App() {
  const [addName, setAddName] = useState<string>('')
  const [addAge, setAddAge] = useState<string>('')
  const [addPhone, setAddPhone] = useState<string>('')

  const [student, setStudent] = useState<studentType[]>([
    {
      name: 'Trịnh Minh Tuấn',
      age: '21',
      phone: '0348090652',
    }
  ]);

  const getData = () => {
    const data: any = {
      name: addName,
      age: addAge,
      phone: addPhone,
    };

    setStudent([...student, data]);
    console.log(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <form>
            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setAddName(e.target.value)}
            />
            <label htmlFor="exampleInputEmail1" className="form-label">Age</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setAddAge(e.target.value)}
            />
            <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setAddPhone(e.target.value)}
            />
            <button
              className="btn btn-warning"
              type="submit"
              onClick={
                (e) => {
                  e.preventDefault()
                  getData()
                }
              }
            >
              ADD
            </button>
          </form>
        </div>
        <Student rows={student} />
      </header>
    </div>
  );
}

export default App;