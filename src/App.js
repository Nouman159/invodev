import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home/Home";
import Contact from "./Screens/Contact/Contact";
<<<<<<< HEAD
import Register from "./Screens/Register/Register";
import Login from "./Screens/Login/Login";

=======
import Register from "./Components/Register/Register";
import Login from "./Components/login/Login";
import PatientProfile from "./Components/patientprofile/PatientProfile";
>>>>>>> e09ab64eed9b56f837c374371c8aace5b4813971


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Contact />} />
<<<<<<< HEAD
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
=======
        <Route path="/register" element={<Register />}  />
        <Route path="/login" element={<Login />}  />
       < Route path="/profile" element={ <PatientProfile />} />
>>>>>>> e09ab64eed9b56f837c374371c8aace5b4813971

      </Routes>
    </BrowserRouter>
  );
}

export default App;
