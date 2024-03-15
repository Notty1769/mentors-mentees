import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="container-md">M&M's</div>
    </div>
  );
}

export default App;
