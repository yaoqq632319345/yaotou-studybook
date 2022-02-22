import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login () {
  const navigate = useNavigate();

  return (
    <div>
      login
      <button onClick={() => navigate('/home')}>home</button>
    </div>
  );
}
