import React, { useState, useContext, useEffect, Fragment } from 'react';
import UserContext from '../../context/userContext/userContext';
import { useNavigate } from 'react-router-dom'

const UserLogin = ({ loginTo }) => {
  const userContext = useContext(UserContext)
  const { login_User, isAuthenticated } = userContext
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated && loginTo === 'home') {
      navigate('/');
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) =>
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      // setAlert('Please fill in all fields', 'danger');
    } else {
      login_User({
        email,
        password,
      });
    }
    console.log('Login submit');
  };
  return (
    <Fragment>

      {/* <Navbar /> */}
      <div className='form-container container'>
        <div className='mb-3'>
          <h1>
            User <span>Lo</span>
            <span className='fc-cp-2'>g</span>
            <span >i</span>
            <span className='fc-gray-5'>n</span>
          </h1>
        </div>

        <form onSubmit={onSubmit}>
          {/* {Email Address} */}
          <div>
            <input
              id='userEmail'
              type='email'
              name='email'
              value={email}
              onChange={onChange}
              placeholder='.'
              className='MPH-input'
              maxLength='100'
              required
            />
            <label htmlFor='userEmail' className='MPH-input-label'>
              Email Address
            </label>
          </div>
          {/* {Password} */}
          <div>
            <input
              id='userPassword'
              type='password'
              name='password'
              value={password}
              onChange={onChange}
              placeholder='.'
              className='MPH-input'
              maxLength='50'
              required
            />
            <label htmlFor='userPassword' className='MPH-input-label'>
              Password
            </label>
          </div>

          {/* Submit button */}
          <input
            type='submit'
            value='Login'
            className='btn  btn-block mb-05'
            style={{ height: '2rem' }}
          />
          {/* <TestCodeBtn /> */}
          {/* <Alerts /> */}
        </form>
      </div>
    </Fragment>
  );
};

export default UserLogin;
