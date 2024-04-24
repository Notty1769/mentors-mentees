import React from 'react';
import { FaHome, FaUserFriends, FaCog } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <FaHome />
        <span>Dashboard</span>
      </div>
      <div className="sidebar-item">
        <FaUserFriends />
        <span>Mentors</span>
      </div>
      <div className="sidebar-item">
        <FaUserFriends />
        <span>Mentees</span>
      </div>
      <div className="sidebar-item">
        <FaCog />
        <span>Overview</span>
      </div>
      <div className="sidebar-item">
        <FaCog />
        <span>Settings</span>
      </div>
    </div>
  );
}

export default Sidebar;
