import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await setDoc(doc(db, "Users", user.uid), {
        email: user.email,
        firstName: fname,
        lastName: lname,
      });
      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form className="register-cont" onSubmit={handleRegister}>
      <h3 style={{textAlign:"center"}}>Sign Up</h3><br></br>
      Enter Your Name: <br></br>
      <input type="text" placeholder="First Name" value={fname} onChange={(e) => setFname(e.target.value)} required />
      <input type="text" placeholder="Last Name" value={lname} onChange={(e) => setLname(e.target.value)} /><br></br>
      <br></br>
      Enter your Email Address: 
      <br></br><input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br></br>
    <br></br> Enter Password :
    <br></br> <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br></br>
     
     <br></br> <button type="submit">Register</button>
    </form>
  );
}

export default Register;




/*
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo:""
        });
      }
      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h3>Sign Up</h3>

      <div className="mb-3">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          onChange={(e) => setFname(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          onChange={(e) => setLname(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/login">Login</a>
      </p>
    </form>
  );
}
export default Register;/*




/*import React, { useState } from 'react';
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

export default Register;*/