import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import mockData from "./MOCK_DATA.json";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(mockData);
    console.log(data);
  }, []);
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
