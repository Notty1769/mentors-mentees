import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import HomePreplaced from "./pages/HomePreplaced";
import StripedTable from "./components/Tables/StripedTable";
// import OrderStatus from "./components/Cards/OrderStatus";
// import Login from "./components/Login/Login";
// import PhoneNumberValidation from "./phoneNumberValidation";
// import Button from "./Button";
// import Form from "./Form";

const App = () => {
  return (
    <div className="grid-container">
      {<NavigationBar />}
      {/* <HomePreplaced /> */}
      {/* <Form /> */}
      {/* <PhoneNumberValidation /> */}
      {/* <Button /> */}
      {/* <Login /> */}
      {/* <OrderStatus /> */}
      {<StripedTable/>}
    </div>
  );
};

export default App;
