import "./App.css";
import Main from "./components/main/Main";
import Navbar from "./components/Navbar/Navbar";
import First from "./pages/first/First";
import Second from "./pages/second/Second";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      {/* <First /> */}
      <Second />
    </div>
  );
}

export default App;
