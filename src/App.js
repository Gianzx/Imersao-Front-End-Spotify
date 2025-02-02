import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from "./Sidebar/sidebar";
import MainContent from "./mainContent/mainContent";
import Footer from "./Footer/footer";


 
const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <MainContent/>
      <Footer />
    </div>
  );
};

export default App;