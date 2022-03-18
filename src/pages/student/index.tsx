import React from "react";

type row = {
  name: string;
  age: string;
  phone: string;
};

type TableProps = {
  rows: row[];
};

function Student({ rows }: TableProps) {
  return (
    <div className='container'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Phone</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.phone}</td>
              <td><button className="btn btn-danger">Xóa</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Student;