import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home/Home";
import Contact from "./Screens/Contact/Contact";

import Register from "./Screens/Register/Register";
import Login from "./Screens/Login/Login";



import PatientProfile from "./Components/patientprofile/PatientProfile";
import Layout from "./Screens/Layout";



function App() {
  return (
    <BrowserRouter>


      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Layout>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Contact />} />



          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          < Route path="/profile" element={<PatientProfile />} />
        </Routes>
      </Layout>



    </BrowserRouter >
  );
}

export default App;
