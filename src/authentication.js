import React from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "./usercontext_service";

const Aunthentication = (props) => {
  const routerlocation = useLocation();

  if (
    routerlocation.pathname === "/" ||
    routerlocation.pathname === "/student/auth/login" ||
    routerlocation.pathname === "/admin/auth/login"
  ) {
    return props.children;
  } else {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      let user = JSON.parse(storedUser);
      return (
        <UserContext.Provider value={user}>
          {props.children}
        </UserContext.Provider>
      );
    } else {
      window.location.pathname = "/";
      return null; // Or you can return a placeholder component indicating loading or redirecting
    }
  }
};

export default Aunthentication;





// import React, { useState, useEffect } from 'react';
// import { Navigate } from 'react-router-dom';

// function Authentication() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const admin = JSON.parse(localStorage.getItem('admin'));
//     const user = JSON.parse(localStorage.getItem('user'));

//     if (admin || user) {
//       setIsLoggedIn(true);
//     }

//     setIsLoading(false);
//   }, []);

//   if (isLoading) {
//     return null; // You can render a loading indicator here if needed
//   }

//   if (!isLoggedIn) {
//     return <Navigate to="/" />;
//   }

//   const admin = JSON.parse(localStorage.getItem('admin'));
//   if (admin) {
//     return <Navigate to="/admin/dashboard" />;
//   } else {
//     return <Navigate to="/student/dashboard" />;
//   }
// }

// export default Authentication;
