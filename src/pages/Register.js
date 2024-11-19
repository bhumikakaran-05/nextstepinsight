import React, { useState } from 'react';
import { firestore } from '../firebase.js'
import { collection,addDoc} from 'firebase/firestore';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(firestore, "users"), {
        name: name,
        email: email,
        password: password
      });
      alert("Registration successful!");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to register. Please try again.");
    }
  };

  return (
    <div className="register">
      <h2>Create a free account</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button><br></br>
      <br>
      </br>
      <h3>Already Registered ?</h3>
      <button onClick={() => window.location.href = '/Login'}>Login Here</button>
      </form>
    </div>
  );
}

export default Register;
