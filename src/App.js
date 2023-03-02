import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Form from "./Component/Form";
import Table from "./Component/Table";

function App() {
  return (
    <div>
      <Router>
        <Navbar path="/" />
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route exact path="/table" element={<Table />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
