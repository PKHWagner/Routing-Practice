import './App.css';
import Home from './components/Home';
import Word from './components/Word';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:word" element={<Word />} />
        <Route path="/:word/:color/:bgColor" element={<Word />} />
      </Routes>
    </div>
  );
}

export default App;
