import "./App.css";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";
import Second from "./pages/second/Second";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Main />
      {/* <Login /> */}
      {/* <First /> */}
    </div>
  );
}

export default App;
