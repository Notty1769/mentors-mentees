import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneNumberValidation = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [valid, setValid] = useState(true);

  const handleChange = (value) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

    return phoneNumberPattern.test(phoneNumber);
  };

  return (
    <div>
      <label>
        Phone Number
        <PhoneInput
          country={'in'}
          value={phoneNumber}
          onChange={handleChange}
          inputProps={{
          required: true,
          }}
              />
              


      </label>
      {valid && (
        <p>Don't worry we won't spam you with un-necessary notifications,or promotional content</p>
      )}
    </div>
  );
};
export default PhoneNumberValidation;