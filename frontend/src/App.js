import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import PhoneNumberValidation from "./phoneNumberValidation";
import Button from "./Button";
import Form from "./Form";

const App = () => {
  return (
    <div className="grid-container">
      <NavigationBar />
      <h1>Welcome to preplaced</h1>
      <Form />
      <PhoneNumberValidation />
      <Button />
    </div>
  );
};

export default App;
