import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../features/auth/authSlice';

const LoginForm = () => {

      const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return alert('Please enter email');
    const fakeToken = 'fake-token-123';
    dispatch(login(fakeToken));
    navigate('/userhome');
  };

  return (
    <div className="login-div" style={{ marginTop: '150px' }}>
        <h2 >Login</h2>
      <form onSubmit={handleLogin} className='login-form'>
        
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email"
         
        />
        <button type="submit" className='login-form-button' >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm


