import React, { useState, useMemo, useEffect } from 'react';
import { render } from 'react-dom';
import Users from './Users';
import './style.css';

const App = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [localData, setLocalData] = useState('');

  const logout = () => {
    localStorage.removeItem('data');
    setLocalData('');
    setPassword('');
    setUserName('');
  };
  const clickHandeler = () => {
    const payload = {
      email: userName,
      password,
    };
    fetch('https://reqres.in/api/login', payload)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem('data', JSON.stringify(res.data));
        setLocalData(JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="container">
        {localData ? (
          <Users logout={logout} />
        ) : (
          <div>
            <img
              src="https://drive.google.com/uc?export=view&id=1hvRAGrdq0SqFBZApx2--IcuDf-DOmOBH"
              alt="loading"
            />
            <div>
              <h3>Hello there, Sign in to continue</h3>
              <div className="wrapper">
                <form>
                  <div>
                    <label>Email</label>
                    <input
                      type="email"
                      className="input-css"
                      value={userName}
                      required
                      onChange={(e) => setUserName(e.target.value)}
                    />
                    <div></div>
                  </div>
                  <div>
                    <label>Password</label>
                    <input
                      type="password"
                      className="input-css"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div></div>
                  </div>
                  <button className="button-css" onClick={clickHandeler}>
                    Next
                  </button>
                </form>
                <div className="an-css">
                  <a href="#"> Sign In with company SSO</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
