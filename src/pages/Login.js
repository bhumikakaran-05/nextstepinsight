import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // handle login logic here
  };

  return (
    <div className="login">
      <h2>Log in</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
        <br></br>
        <button onClick={() => window.location.href = '/Quiz'}>Let's Take a Quiz</button>
      </form>
    </div>
  );
}

export default Login;
