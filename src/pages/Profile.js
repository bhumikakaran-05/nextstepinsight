import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  // Fetch user details from Firestore
  useEffect(() => {
    const fetchUserData = async () => {
      console.log(auth);
      const currentUser = auth.currentUser;
      if (currentUser) {
        try {
          const docRef = doc(db, "Users", currentUser.uid);
          const userDoc = await getDoc(docRef);
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user data: ", error);
        }
      } else {
        console.log("user not authenticated,redirecting..")
        // Redirect to login if no user is authenticated
        navigate("/Login");
      }
    };

    fetchUserData();
  }, [navigate]);

  // Logout function
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully");
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    
    <div class = "profile-cont">
      <h1 align="center" padding="50px">😃 Welcome to your Profile! </h1>
      <br></br>
      {userData ? (
        <div>
          <p><strong>First Name:</strong> {userData.firstName}</p>
          <p><strong>Last Name:</strong> {userData.lastName}</p>
          <p><strong>Email:</strong> {userData.email}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
      <button onClick={handleLogout} className="btn btn-danger">
        Logout
      </button>
      
      <div>
      <button type="Dashboard" onClick={() => window.location.href = '/Dashboard'}>
        Dashboard
      </button>
      </div>
    </div>
  );
}

export default Profile; // Ensure default export





/*import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);

      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }
  return (
    <div>
      {userDetails ? (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={userDetails.photo}
              width={"40%"}
              style={{ borderRadius: "50%" }}
            />
          </div>
          <h3>Welcome {userDetails.firstName} 🙏🙏</h3>
          <div>
            <p>Email: {userDetails.email}</p>
            <p>First Name: {userDetails.firstName}</p>
            /* <p>Last Name: {userDetails.lastName}</p> 
          
            </div>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default Profile;*/
