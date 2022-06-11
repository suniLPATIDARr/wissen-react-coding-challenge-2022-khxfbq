import React, { useState, useMemo } from 'react';

const Users = (props) => {
  let localData = useMemo(() => JSON.parse(localStorage.getItem('data')), []);
  console.log(localData);
  const keys = Object.keys(localData[0]);
  return (
    <div>
      <button onClick={() => props.logout()}>Logout</button>
      <table>
        <tr>
          {keys.map((item) => (
            <th>{item}</th>
          ))}
        </tr>
        {localData.map((item, index) => (
          <tr>
            {keys.map((i) => (
              <td>{item[i]}</td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Users;
