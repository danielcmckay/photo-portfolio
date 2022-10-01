import { Link } from "react-router-dom";
import "../App.css";

export const NavHeader = () => {
  return (
    <div className="nav-header">
      <h1>Daniel McKay Photography</h1>
      <nav className="nav-links">
        <Link to="/galleries">Galleries</Link>
        <Link to="/galleries">Galleries</Link>
        <Link to="/galleries">Galleries</Link>
      </nav>
    </div>
  );
};

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDlrMahpst_zUZSZFzE6ARDRrvJoiK8RvE",
//   authDomain: "photo-portfolio-b78b4.firebaseapp.com",
//   projectId: "photo-portfolio-b78b4",
//   storageBucket: "photo-portfolio-b78b4.appspot.com",
//   messagingSenderId: "859873373144",
//   appId: "1:859873373144:web:8163bc64e9468eb9aea0ad",
//   measurementId: "G-Y0LN90SPPS"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);