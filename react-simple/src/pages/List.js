import React from 'react';

function User({userData}) {
    return (
        <tr>
            <td>{userData.id}</td>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    )
}

function List() {
    const users = [
        {id: 'kim123', name: '김태호', email: 'kim123@gmail.com'},
        {id: 'park123', name: '박진우', email: 'park123@gmail.com'},
        {id: 'woo123', name: '우원식', email: 'woo@gmail.com'},
        {id: 'lee123', name: '이호진', email: 'lee123@gmail.com'}
    ];
    
    return (
        <table>
            <thead>
                <tr>
                    <th>아이디</th>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <User userData={user} />)}
            </tbody>
        </table>
    )
}

export default List;