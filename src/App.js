import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home/Home";
import Contact from "./Screens/Contact/Contact";
import Register from "./Screens/Register/Register";
import Login from "./Screens/Login/Login";
import PatientProfile from "./Components/patientprofile/PatientProfile";
import Layout from "./Screens/Layout";
import Appointment from "./Screens/Appointment/Appointment";
import AddAppointment from "./Screens/Appointment/AddAppointment";
import { Toaster } from "react-hot-toast";



function App() {
  return (
    <BrowserRouter>
      <Toaster />

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Layout>
        <Routes>
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/appointment/add" element={<AddAppointment />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          < Route path="/profile" element={<PatientProfile />} />
        </Routes>
      </Layout>



    </BrowserRouter >
  );
}

export default App;
