import { BrowserRouter,Route,Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import AboutPage from "./pages/AboutPage"
import Community from "./pages/Community"
import Blogs from "./pages/Blogs"
import Events from "./pages/Events"
import Contact from "./pages/Contact"
import Chatbot from "./pages/Chatbot"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage/>} />
    <Route path="/about-us" element={<AboutPage/>} />
    <Route path="/chatbot" element={<Chatbot/>} />
    <Route path="/community" element={<Community/>} />
    <Route path="/blogs" element={<Blogs/>} />
    <Route path="/events" element={<Events/>} />
    <Route path="/contact-us" element={<Contact/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App