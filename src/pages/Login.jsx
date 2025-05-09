import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const { login }               = useAuth();
  const navigate                = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      alert('登录失败：' + err.message);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: 400, margin: 'auto' }}>
      <h2>登录</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="邮箱"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ width: '100%', marginBottom: '1rem' }}
        />
        <input
          type="password"
          placeholder="密码"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ width: '100%', marginBottom: '1rem' }}
        />
        <button type="submit" style={{ width: '100%' }}>
          登录
        </button>
      </form>
    </div>
  );
}
