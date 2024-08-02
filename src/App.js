
import { useEffect } from "react";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import Login from "./pages/login";
import Onebox from "./pages/onebox"; 



function App() {


  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Login - ReachInbox";
        metaDescription = "Login to your ReachInbox account.";
        break;
      case "/onebox":
        title = "Onebox - ReachInbox";
        metaDescription = "Access your Onebox screen.";
        break;
      default:
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
        
      <Route path="/" element={<Login />} />
      <Route path="/onebox" element={<Onebox />} /> {/* Add Onebox route*/}
    </Routes>
  );
}

export default App;




