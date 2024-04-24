import React from 'react';
import { Card } from 'react-bootstrap';

const InfoCard = ({ title, activeText, inactiveText, icon }) => {
  return (
    <Card className="h-100 shadow bg-dark text-light">
      <Card.Body className="d-flex flex-column justify-content-between align-items-center">
        <div className="text-center">
          <h3>{title}</h3>
          <div className="d-flex justify-content-center">
            <div className="mr-3 my-2 mx-2">
              <p className="text-light mb-1">{activeText}</p>
              <p className="text-info mb-0">{inactiveText}</p>
            </div>
            {icon}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default InfoCard;
