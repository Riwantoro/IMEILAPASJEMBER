import React from "react";
import "./StaffList.css";

const StaffList = ({ filteredStaff, onImeiClick, clickedIMEIs }) => {
  return (
    <div className="search-results">
      {filteredStaff.map((staff, index) => (
        <div key={index} className="staff-item">
          <p className="staff-name">{staff.nama.toUpperCase()}</p>
          <p className="staff-job">Jabatan: {staff.jabatan}</p>
          <div className="imei-buttons">
            {staff.imei1 && staff.imei1 !== "-" && (
              <button
                className={`imei-button ${clickedIMEIs[staff.imei1] ? "glass-effect" : ""}`}
                onClick={() => onImeiClick(staff.imei1)}
              >
                <i className="fas fa-mobile-alt"></i>
                IMEI 1: {staff.imei1}
              </button>
            )}
            {staff.Imei2 && staff.Imei2 !== "-" && (
              <button
                className={`imei-button ${clickedIMEIs[staff.Imei2] ? "glass-effect" : ""}`}
                onClick={() => onImeiClick(staff.Imei2)}
              >
                <i className="fas fa-mobile-alt"></i>
                IMEI 2: {staff.Imei2}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StaffList;