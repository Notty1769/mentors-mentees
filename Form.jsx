import { useState } from "react";

export default function ControlledComponent() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form>
      <label>
        Full Name
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
    </form>
  );
}
