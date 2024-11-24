

// const Slide = () => {
//   return (
//     <div className="slide">
//       <h1>
//       Find Your Perfect Stay, Wherever You Go <br />
//       Create Moments That Feel Like Home
//       </h1>
//     </div>
//   );
// };

// export default Slide;

import React from "react";
import { Link } from "react-router-dom";
import "../styles/Slide.scss"
import { useSelector } from 'react-redux';

const Slide = () => {
  // Mocked user authentication status. Replace with actual authentication logic.
  // const isLoggedIn = localStorage.getItem("userToken") ? true : false;

  const user = useSelector((state) => state.user);

  return (
    // <div className="slide-container">
    //   <div className="slide-content">
    //     <h1>Find Your Perfect Stay, Wherever You Go</h1>
    //     <p>Create Moments That Feel Like Home</p>
    //     {!isLoggedIn && (
    //       <div className="slide-buttons">
    //         <Link to="/login">
    //           <button className="btn-primary">Log In</button>
    //         </Link>
    //         <Link to="/register">
    //           <button className="btn-secondary">Sign Up</button>
    //         </Link>
    //       </div>
    //     )}
    //   </div>
    // </div>

    <div className="slide-container">
      <div className="slide-text">
        <h1>Find Your Perfect Stay, Wherever You Go</h1>
        <h2>Create Moments That Feel Like Home</h2>

        {!user && (
          <div className="buttons-container">
            <Link to="/login" className="btn-login">
              Log In
            </Link>
            <Link to="/register" className="btn-signup">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Slide;
