import { useState } from 'react'

function Student() {
    const [students, setStudents] = useState([
        {
            id: 1, name: 'Trịnh Minh Tuấn', age: 21, phone: '0348090652', email: 'tuantmph13096@fpt.edu.vn', avatar: 'http://placeimg.com/300/200/sports'
        },
        {
            id: 2, name: 'Trần Minh Dũng', age: 19, phone: '0123456789', email: 'dungtm@fpt.edu.vn', avatar: 'http://placeimg.com/300/200/sports'
        },
        {
            id: 3, name: 'Nguyễn Văn Linh', age: 20, phone: '0987654321', email: 'linhnv@fpt.edu.vn', avatar: 'http://placeimg.com/300/200/sports'
        },
    ])

    const handleRemove = (id: number) => {
        const confirm = window.confirm('Are you sure delete??')
        if(confirm) {
            setStudents(students.filter(student => student.id !== id))
        }
    }

    return (
        <div className='container'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Avatar</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((item, index) => (
                        <tr>
                            <th scope="row" key={index}>{item.id} </th>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td><img src={item.avatar} alt={item.avatar} /></td>
                            <td><button className="btn btn-danger" onClick={() => handleRemove(item.id)}>Xóa</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Student 