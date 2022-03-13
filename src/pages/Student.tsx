import React from 'react'

function Student() {
    const students = [
        {
            id: 1,
            name: 'Trinh Minh Tuan',
            age: 21,
            phone: '0348090652',
            email: 'tuantmph13096@fpt.edu.vn',
            avatar: 'http://placeimg.com/300/200/sports'
        },
        {
            id: 2,
            name: 'Tran Minh Dung',
            age: 20,
            phone: '0123456789',
            email: 'dungtm@fpt.edu.vn',
            avatar: 'http://placeimg.com/300/200/sports'
        },
        {
            id: 3,
            name: 'Nguyen Van Linh',
            age: 21,
            phone: '0987654321',
            email: 'linhnv@fpt.edu.vn',
            avatar: 'http://placeimg.com/300/200/sports'
        },
    ]
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
                    {students.map(item => (
                        <tr>
                            <th scope="row">{item.id} </th>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td><img src={item.avatar} alt={item.avatar} /></td>
                            <td><button className="btn btn-danger">Xóa</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Student 