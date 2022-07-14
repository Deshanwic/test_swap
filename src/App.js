
import { BrowserRouter,Routes,Route } from "react-router-dom";



import Login from "./components/Login";
import Newregister from "./components/Newregister";
import Navbar from "./components/Navbar";
import Home from "./components/views/Home";
import Footer from "./components/Footer";
import Bookdatails1 from "./components/pages/Bookdatails1";
import Allbooks from "./components/pages/Allbooks";
import Profile from "./components/pages/Profile";
import Business from "./components/views/Business";
import ChildrenBooks from "./components/views/ChildrenBooks";
import CookBooks from "./components/views/CookBooks";
import History from "./components/views/History";
import Literature from "./components/views/Literature";
import Romance from "./components/views/Romance";
import Fantacy from "./components/views/Fantacy";


function App() {

  return (
    <>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Login/>} />
   <Route path="/newregister" element={<Newregister/>} />
   <Route path="/navbar" element={<Navbar/>} />
   <Route path="/home" element={<Home/>} />
   <Route path="/footer" element={<Footer/>} />
   <Route path="/bookdatails1" element={<Bookdatails1/>} />
   <Route path="/business" element={<Business/>} />
   <Route path="/childrenbooks" element={<ChildrenBooks/>} />
   <Route path="/cookbooks" element={<CookBooks/>} />
   <Route path="/history" element={<History/>} />
   <Route path="/literature" element={<Literature/>} />
   <Route path="/romance" element={<Romance/>} />
   <Route path="/fantacy" element={<Fantacy/>} />
   <Route path="/allbooks" element={<Allbooks/>} />
   <Route path="/profile" element={<Profile/>} />
   </Routes>
   
   </BrowserRouter>
    </>
  );
}

export default App;
