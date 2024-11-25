import React from 'react';
import { Link } from 'react-router-dom';
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const Navbar = () => {
//  const [userData, setUserData] = useState(null);
  // const currentUser = auth?.currentUser;
  // if (currentUser) {
  //   try {
  //     const docRef = doc(db, "Users", currentUser.uid);
  //     const userDoc =  getDoc(docRef);
  //     if (userDoc.exists()) {
        
  //       console.log(userDoc.data());
  //     // const  setUserData = useState(null);
  //    // const  u =  setUserData(userDoc.data());
  //     } else {
  //       console.log("No such document!");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching user data: ", error);
  //   }
 // }
  return (
    <header class="menu">
    <nav>
      <div className="nav-container">
        {/* Logo on the left */}
        <div className="logo">
          <h3> NextStepInsight ☑</h3>
        </div>

        {/* Links on the right */}
        <ul className="nav-links">
          <li><Link to="/Home"> 🏡 Home</Link></li>
         
          <li><Link to="/explore">🔍 Explore</Link></li>
          <li><Link to="/Profile">👤 Profile</Link></li>
        
         
        </ul>
      </div>
    </nav>
    </header>
  );
};

export default Navbar;

