import React, { useState, useEffect, useRef } from 'react';
import { FaUser, FaBell, FaPlus, FaAngleDown, FaChartBar } from 'react-icons/fa'; // Import required icons
import { FaBars } from 'react-icons/fa'; // Import FaBars icon

function TopNavbar({ toggleSidebar }) { // Receive toggleSidebar prop from parent component
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility
  const [showProfileDropdown, setShowProfileDropdown] = useState(false); // State to manage profile dropdown visibility
  const dropdownRef = useRef(null); // Ref to the dropdown element
  const profileDropdownRef = useRef(null); // Ref to the profile dropdown element

  useEffect(() => {
    // Attach click event listener to document body
    document.body.addEventListener('click', handleBodyClick);

    // Cleanup function to remove the event listener
    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, []);

  const handleBodyClick = (e) => {
    // Close dropdowns if click occurs outside their areas
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowDropdown(false);
    }
    if (profileDropdownRef.current && !profileDropdownRef.current.contains(e.target)) {
      setShowProfileDropdown(false);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform search action here (e.g., fetch search results)
    console.log("Search query:", searchQuery);
  };

  const handleAddNewRecordClick = (e) => {
    setShowDropdown(!showDropdown); // Toggle dropdown visibility
    e.stopPropagation(); // Prevent click event from propagating to document body
  };

  const handleProfileIconClick = (e) => {
    setShowProfileDropdown(!showProfileDropdown); // Toggle profile dropdown visibility
    e.stopPropagation(); // Prevent click event from propagating to document body
  };

  const handleSidebarToggle = () => {
    toggleSidebar(); // Toggle sidebar visibility
  };

  const handleDropdownOptionClick = (option) => { // Define handleDropdownOptionClick function
    // Handle dropdown option click action here (e.g., redirect based on option)
    console.log(`Selected option: ${option}`);
    // Close dropdown after option is clicked
    setShowDropdown(false);
  };

  const handleProfileDropdownOptionClick = (option) => { // Define handleProfileDropdownOptionClick function
    // Handle profile dropdown option click action here (e.g., redirect based on option)
    console.log(`Selected profile option: ${option}`);
    // Close profile dropdown after option is clicked
    setShowProfileDropdown(false);
  };

  const renderDropdownOptions = () => {
    if (showDropdown) {
      return (
        <div className="dropdown-options" ref={dropdownRef}>
          <div onClick={() => handleDropdownOptionClick('Add Mentor')}>Add Mentor</div>
          <div onClick={() => handleDropdownOptionClick('Add Mentee')}>Add Mentee</div>
          <div onClick={() => handleDropdownOptionClick('Add Course')}>Add Course</div>
        </div>
      );
    }
    return null;
  };

  const renderProfileDropdownOptions = () => {
    if (showProfileDropdown) {
      return (
        <div className="profile-dropdown-options" ref={profileDropdownRef}>
          <div onClick={() => handleProfileDropdownOptionClick('My Profile')}>My Profile</div>
          <div onClick={() => handleProfileDropdownOptionClick('Logout')}>Logout</div>
        </div>
      );
    }
    return null;
  };

  return (
    <nav className="top-navbar">
      <div className="logo">
        Super Admin Dashboard
      </div>
      <div className="sidebar-toggle-button" style={{ paddingRight: '120px', paddingLeft: '0px'}} onClick={handleSidebarToggle}>
        <FaBars />
      </div>
      <form className="search-form" style={{ paddingRight: '150px', marginLeft: '30px'}} onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
      <div className="dropdown" style={{ paddingRight: '200px', paddingLeft: '0px'}}>
        <button className="add-button" onClick={handleAddNewRecordClick}>
          <FaPlus />
          &nbsp;Add New Record
          <FaAngleDown /> {/* Downward arrow icon for dropdown indicator */}
        </button>
        {renderDropdownOptions()}
      </div>
      <div className="nav-icons">
        <div className="icon" style={{ paddingRight: '50px'}} onClick={() => console.log('Dashboard clicked')}>
          <FaChartBar />
        </div>
        <div className="icon" style={{ paddingRight: '50px'}} onClick={() => console.log('Notification clicked')}>
          <FaBell />
        </div>
        <div className="icon" style={{ marginRight: '30px' }} onClick={handleProfileIconClick}>
          <FaUser />
          {renderProfileDropdownOptions()}
        </div>
      </div>
    </nav>
  );
}

export default TopNavbar;
