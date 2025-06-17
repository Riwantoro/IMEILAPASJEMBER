import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import StaffList from "./components/StaffList";
import DarkModeToggle from "./components/DarkModeToggle";
import IMEICounter from "./components/IMEICounter";
import staffData from "./data/kerobokanstaff.json";
import "./App.css";
import "./InmateSearch.css";
import clickSound from "./assets/click-sound.mp3";

const App = () => {
  const [darkMode, setDarkMode] = useState(true); // Set default to true
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isShaking, setIsShaking] = useState(false);
  const [clickedIMEIs, setClickedIMEIs] = useState(() => {
    const savedIMEIs = localStorage.getItem("clickedIMEIs");
    return savedIMEIs ? JSON.parse(savedIMEIs) : {};
  });
  const [totalIMEIs, setTotalIMEIs] = useState(() => {
    const savedTotal = localStorage.getItem("totalIMEIs");
    return savedTotal ? parseInt(savedTotal, 10) : 0;
  });
  const audio = new Audio(clickSound);

  useEffect(() => {
    localStorage.setItem("clickedIMEIs", JSON.stringify(clickedIMEIs));
    localStorage.setItem("totalIMEIs", totalIMEIs.toString());
  }, [clickedIMEIs, totalIMEIs]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);

    if (query.trim() === "") {
      setSearchResults([]); // Clear results if query is empty
      return;
    }

    const lowerQuery = query.toLowerCase();
    const results = staffData["Form Responses 1"].filter(
      (staff) =>
        staff.nama?.toLowerCase().includes(lowerQuery) ||
        staff.imei1?.toString().includes(lowerQuery) ||
        (staff.Imei2 && staff.Imei2.toString().includes(lowerQuery)) ||
        (staff.Imei3 && staff.Imei3.toString().includes(lowerQuery))
    );

    setSearchResults(results);
  };

  const handleIMEIClick = (imei) => {
    if (imei && imei !== "-") {
      audio.play();
  
      setClickedIMEIs((prev) => {
        const wasClicked = prev[imei];
        return { ...prev, [imei]: !wasClicked }; // Toggle status klik
      });
  
      setTotalIMEIs((prevTotal) => {
        return clickedIMEIs[imei] ? prevTotal - 1 : prevTotal + 1;
      });
  
      // Trigger shake effect
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500); // Reset animation after 500ms
    }
  };

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <DarkModeToggle toggleDarkMode={toggleDarkMode} />
      <Header isShaking={isShaking} />
      <SearchBox onSearch={handleSearch} />
      <IMEICounter imeiCount={totalIMEIs} />

      <div className={`frosted-container ${isShaking ? "shake" : ""}`}>
        {searchQuery.trim() !== "" && searchResults.length > 0 ? (
          <StaffList
            filteredStaff={searchResults}
            onImeiClick={handleIMEIClick}
            clickedIMEIs={clickedIMEIs}
          />
        ) : (
          searchQuery.trim() !== "" && <p className="no-data">Tidak ada data yang ditemukan.</p>
        )}
      </div>
    </div>
  );
};

export default App;