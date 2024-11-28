import React from 'react';
import { Link } from 'react-router-dom';
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const Footer = () => {
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
       <footer class="footer-container">
        <p>© 2024 Next Step Insight. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;

