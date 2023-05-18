import React from 'react'

const UserArray =() =>{
    const Users = [
        {
          id: '01',
          number: '01',
          name: 'John Deo',
          email: 'john@gmail.com',
          phone: '202-555-0163'
        },
        {
          id: '02',
          number: '02',
          name: 'Brad Pitt',
          email: 'fightclud@gmail.com',
          phone: '202-555-0106'
        },
      ];
      return (
        <ul>
          {Users.map((data) => (
            <li key={data.id}>
              <p>{data.number}</p>
              <p>{data.name}</p>
              <p>{data.email}</p>
              <p>{data.phone}</p>
            </li>
          ))}
        </ul>
      );
}
export default UserArray;