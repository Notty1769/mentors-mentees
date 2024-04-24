import React, { useState } from 'react'; // Import useState hook
import './App.css';
import TopNavbar from './components/TopNavbar';
import Sidebar from './components/SideNavbar';
import { Row, Col, Container } from 'react-bootstrap';
import { BsPeopleFill, BsFileText, BsClockFill } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoCard from './components/InfoCard';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">
      <TopNavbar toggleSidebar={toggleSidebar} />
      <Container fluid>
        <Row>
          {isSidebarOpen && <Col xl={3}><Sidebar /></Col>}
          <Col xl={isSidebarOpen ? 9 : 12}>
            <Row className="gx-4 gy-4 mx-5 my-4">
              <Col xl={3} sm={6}>
                <InfoCard
                  title="Total Mentors"
                  activeText="Active: 20"
                  inactiveText="Inactive: 5"
                  icon={<BsPeopleFill className="text-primary mx-4 my-3" size={40} />}
                />
              </Col>
              <Col xl={3} sm={6}>
                <InfoCard
                  title="Total Mentees"
                  activeText="Active: 50"
                  inactiveText="Inactive: 10"
                  icon={<BsPeopleFill className="text-primary mx-4 my-3" size={30} />}
                />
              </Col>
              <Col xl={3} sm={6}>
                <InfoCard
                  title="Total Applications"
                  activeText="Pending: 15"
                  inactiveText="Reviewed: 35"
                  icon={<BsFileText className="text-warning mx-4 my-3" size={30} />}
                />
              </Col>
              <Col xl={3} sm={6}>
                <InfoCard
                  title="Active Sessions"
                  activeText="Total: 25"
                  inactiveText="Upcoming: 10"
                  icon={<BsClockFill className="text-info mx-4 my-3" size={30} />}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
