import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home/Home";
import Contact from "./Screens/Contact/Contact";
import Register from "./Components/Register/Register";
import Login from "./Components/login/Login";
import PatientProfile from "./Components/patientprofile/PatientProfile";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Contact />} />
        <Route path="/register" element={<Register />}  />
        <Route path="/login" element={<Login />}  />
       < Route path="/profile" element={ <PatientProfile />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
