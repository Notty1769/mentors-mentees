import { useState } from "react";

export default function ControlledComponent() {
  const [formInputValue, setFormInputValue] = useState("");

  const handleFormInput = (event) => {
    setFormInputValue(event.target.value);
  };

  return (
    <form>
      <label>
        Full Name
        <input type="text" value={formInputValue} onChange={handleformInput} />
      </label>
    </form>
  );
}
