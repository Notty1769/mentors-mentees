import React from 'react';
import PhoneNumberValidation from './phoneNumberValidation';
import Button from './Button';
import Form from './Form';



const App = () => {
  return (
    <div className="grid-container">
      <h1>Welcome to preplaced</h1>
      <Form/>
      <PhoneNumberValidation />
      <Button />
    </div>
  );
};

export default App;