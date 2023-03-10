import "./App.css";
import CandidatesList from "./components/CandidatesList";
import Footer from "./components/Footer";
import MapDisplay from "./components/MapDisplay";
import NavBar from "./components/Navbar";
import StateTallyList from "./components/StateTallyList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="app__body">
        <CandidatesList />
        <MapDisplay />
        <StateTallyList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
